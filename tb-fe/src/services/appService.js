import axios from "axios";

export default class AppService{
    constructor(){
        this.server = "./tb";
        //this.server = "http://localhost:8088/tb";

        this.httpAdapter  = axios.create({
            baseURL: this.server,
            headers: {'X-Ajax-call': '',
                'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        })
    }

    getTeamStatuses(){
        return this.httpAdapter.get('/getTeamsStatuses');
    }

    submitCode(code){
        return this.httpAdapter.post("/submitCode", {
            code
        })
    }
}