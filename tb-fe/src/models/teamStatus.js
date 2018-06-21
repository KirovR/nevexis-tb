export default class TeamStatus{
    constructor(id='', name='', roomName='', time='', finished=false){
        this.id= id;
        this.name=name;
        this.roomName=roomName;
        this.time=time;
        this.finished = finished;
    }
}