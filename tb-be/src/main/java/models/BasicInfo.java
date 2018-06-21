package models;

public class BasicInfo {

    private long totalTeams;
    private long finishedTeams;

    public BasicInfo() {
    }

    public BasicInfo(long totalTeams, long finishedTeams) {
        this.totalTeams = totalTeams;
        this.finishedTeams = finishedTeams;
    }

    public void updateFinishedTeams(){
        this.finishedTeams++;
    }

    public long getTotalTeams() {
        return totalTeams;
    }

    public void setTotalTeams(long totalTeams) {
        this.totalTeams = totalTeams;
    }

    public long getFinishedTeams() {
        return finishedTeams;
    }

    public void setFinishedTeams(long finishedTeams) {
        this.finishedTeams = finishedTeams;
    }
}
