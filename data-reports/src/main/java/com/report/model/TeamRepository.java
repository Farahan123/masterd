package com.report.model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TeamRepository extends MongoRepository<Team, Long>, TeamRepositoryCustom {

    Team findFirstByPlayerName(String playerName);

    @Query("{playerName:'?0'}")
    Team findCustomByPlayer(String playerName);
    
}
