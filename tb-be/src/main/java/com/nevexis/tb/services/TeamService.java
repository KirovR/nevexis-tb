package com.nevexis.tb.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import models.BasicInfo;
import models.SubmitCodeStatuses;
import models.Team;
import models.TbStatus;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Optional;

@Service
public class TeamService {

    private TbStatus tbStatus;
    private String address;

    @PostConstruct
    private void initStatuses(){
        this.tbStatus = this.readInitial();
        this.address = this.tbStatus.getAddressInformation().getAddress();
        this.tbStatus.getAddressInformation().setAddress("");

        final long totalTeams = this.tbStatus.getStatuses().size();
        this.tbStatus.setBasicInfo(new BasicInfo(totalTeams, 0L));

    }

    public TbStatus getTeamsStatuses(){
      return this.tbStatus;
    }

    public SubmitCodeStatuses submitCode(String secretCode){

        Optional<Team> foundTeamOpt = this.tbStatus.getStatuses().stream().filter(team -> team.isSecretCodeMine(secretCode)).findAny();

        if (foundTeamOpt.isPresent()) {
            Team  foundTeam = foundTeamOpt.get();
            if(foundTeam.getFinished()){
                return SubmitCodeStatuses.CODE_ALREADY_SUBMITTED;
            }else {
                foundTeam.finishGame();
                long unfinishedTeamsCnt = this.tbStatus.getStatuses().stream().filter(team -> !team.getFinished()).count();
                if(unfinishedTeamsCnt == 0){
                    this.tbStatus.getAddressInformation().setVisible(true);
                    this.tbStatus.getAddressInformation().setAddress(this.address);
                }
                this.tbStatus.getBasicInfo().updateFinishedTeams();

                return SubmitCodeStatuses.SUCCESS;
            }
        }else{
            return SubmitCodeStatuses.CODE_NOT_FOUND;
        }

    }

    private TbStatus readInitial(){
        InputStream in = this.getClass().getClassLoader()
                .getResourceAsStream("statuses.json");

        ObjectMapper mapper = new ObjectMapper();

        try {
            TbStatus ts = mapper.readValue(in, TbStatus.class);
            return ts;
        } catch (IOException e) {
            e.printStackTrace();
            return new TbStatus();
        }


    }


}
