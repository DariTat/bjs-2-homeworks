class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timeId;
    }  
   
    addClock(time, callback, id){
        this.time = time;
        this.callback = callback;
        this.id = id;
        if(this.id === undefined){
            throw new Error('error text');
        }
        if(this.alarmCollection.find(item => item.id === id)){
            console.error('Звонок с таким id существует');
            return false;
        }
        this.alarmCollection.push({time: this.time, callback: this.callback, id: this.id});
    }
    removeClock(id){
        if(this.alarmCollection.filter(item => item.id === id)){
            let index = this.alarmCollection.findIndex(item => item.id === id);
            if (this.alarmCollection.splice(index, 1)){
                return true;
            }else{
                return false;
            }
        }
    }
    getCurrentFormattedTime(){
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if(minutes < 10){minutes = '0'+ minutes;}
        if(hours < 10){hours = '0'+ hours};
        let timeNow = hours + ':' + minutes;
        return timeNow;
    }
    start(){
        function checkClock(call){
            if (call.time === this.getCurrentFormattedTime()){
                call.callback();
            }
        }
        const checkClockBind = checkClock.bind(this);
        if (this.timeId === undefined){
            this.timeId = setInterval(() => this.alarmCollection.forEach(call => checkClockBind(call)), 2000);
        }
    }
    stop(){
        if(this.timeId !== undefined){
            clearInterval(this.timeId);
            delete this.timeId;
        }
    }
    printAlarms(){
        this.alarmCollection.forEach(item => console.log("Будильник № " + item.id + " заведён на " + item.time));
    }
    clearAlarms(){
        clearInterval(this.timeId);
        this.alarmCollection.length = 0;
    }
}