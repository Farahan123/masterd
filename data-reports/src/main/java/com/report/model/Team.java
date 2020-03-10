package com.report.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "player")
public class Team {

	@Id
	private String id;

	@Indexed(unique = true)
	private String playerName;

	private int run;

	@Override
	public String toString() {
		return "Player{" + "id=" + id + ", playerName='" + playerName + '\'' + ", run=" + run + '}';
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public int getRun() {
		return run;
	}

	public void setRun(int run) {
		this.run = run;
	}

}