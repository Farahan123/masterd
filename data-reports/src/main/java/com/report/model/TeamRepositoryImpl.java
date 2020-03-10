package com.report.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.mongodb.client.result.UpdateResult;

public class TeamRepositoryImpl implements TeamRepositoryCustom {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public Long updatePlayerRuns(String playerName, int run) {
    	
    	System.out.println("Inside update...");

        Query query = new Query(Criteria.where("playerName").is(playerName));
        Update update = new Update();
        update.set("run", run);

        UpdateResult result = mongoTemplate.updateFirst(query, update, Team.class);

        if(result!=null)
            return result.getModifiedCount();
        else
            return 0l;

    }
}
