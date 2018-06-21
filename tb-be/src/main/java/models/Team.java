package models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalTime;
import java.time.temporal.ChronoUnit;

public class Team {

    private Long id;
    private String name;
    private String roomName;
    private Boolean finished;
    private String secretCode;
    private String startTime;
    private String timeElaplsed;

    public Team() {
    }

    public boolean isSecretCodeMine(String secretCode){
       return this.secretCode.equalsIgnoreCase(secretCode);
    }
    public void finishGame() {
        this.finished = true;
        try{
            LocalTime startTime = LocalTime.parse(this.startTime);
            LocalTime endTime = LocalTime.now();
            long timeElapsed = ChronoUnit.MINUTES.between(startTime, endTime);

            this.timeElaplsed = String.valueOf( timeElapsed ) + "min";
        }catch(Exception e){
            e.printStackTrace();
            timeElaplsed = "?";
        }

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRoomName() {
        return roomName;
    }

    public Boolean getFinished() {
        return finished;
    }

    public void setSecretCode(String secretCode) {
        this.secretCode = secretCode;
    }

    public String getStartTime() {
        return startTime;
    }


    public String getTimeElaplsed() {
        return timeElaplsed;
    }

    public void setTimeElaplsed(String timeElaplsed) {
        this.timeElaplsed = timeElaplsed;
    }
}
