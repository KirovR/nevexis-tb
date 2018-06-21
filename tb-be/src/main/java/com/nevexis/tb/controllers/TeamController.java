package com.nevexis.tb.controllers;

import com.nevexis.tb.services.TeamService;
import models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tb")
public class TeamController {

    @Autowired
    private TeamService ts;

    @GetMapping("/getTeamsStatuses")
    public TbStatus getTeamsStatuses(){

        return ts.getTeamsStatuses();
    }

    @PostMapping("/submitCode")
    public SubmitCodeStatuses submitCode(@RequestBody SubmitCoderequest req){
        String code = req.getCode();
        if(null != code){
            code = code.trim();
        }
        return ts.submitCode(code);
    }
}
