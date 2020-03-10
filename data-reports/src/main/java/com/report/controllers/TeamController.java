package com.report.controllers;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.report.model.Team;
import com.report.model.TeamRepository;

@RestController
@RequestMapping("/api/team/")
public class TeamController {

    private final static Logger LOGGER = LoggerFactory.getLogger(TeamController.class);
    private final TeamRepository teamRepository;

    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("player")
    @ResponseStatus(HttpStatus.CREATED)
    public Team postPlayer(@RequestBody Team player) {
        return teamRepository.save(player);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("player")
    public List<String[]> getPlayers() {
    	
    	List<Team> list = teamRepository.findAll();
    	
    	System.out.println(list.size());
    	
    	List<String[]> dataList = new ArrayList<>();
    	String[] array = null;
    	if(!list.isEmpty()) {
	    	for(Team t: teamRepository.findAll()) {
	    		array = new String[2];
	    		array[0] = t.getPlayerName();
	    		array[1] =t.getRun()+"";
	    		dataList.add(array);
	    	}
    	}
    	
        return dataList;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("player")
    public Long updatePlayer(@RequestBody Team player) {
        return teamRepository.updatePlayerRuns(player.getPlayerName(), player.getRun());
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public final Exception handleAllExceptions(RuntimeException e) {
        LOGGER.error("Internal server error.", e);
        return e;
    }
}
