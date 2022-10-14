class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timeId = null;
    }  
    addClock(time, callback, id){
        if(!id){
            throw new Error('error text');
        }
        if(this.alarmCollection.find(item => item.id === id)){
            console.error('Звонок с таким id существует');
            return false;
        }
        this.alarmCollection.push({time, callback, id});
    }
    removeClock(id){
        let len = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        if(len !== this.alarmCollection.length){
            console.log("Звонок удален");
            return true;
        }else {
            return false;
        }
    }
    getCurrentFormattedTime(){
        let timeNow = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
            });
        return timeNow;
    }
    start(){
        function checkClock(call){
            if (call.time === this.getCurrentFormattedTime()){
                call.callback();
            }
        }
        const checkClockBind = checkClock.bind(this);
        if (this.timeId === null){
            this.timeId = setInterval(() => this.alarmCollection.forEach(call => checkClockBind(call)), 2000);
        }
    }
    stop(){
        if(this.timeId !== null){
            clearInterval(this.timeId);
            this.timeId = null;
        }
    }
    printAlarms(){
        this.alarmCollection.forEach(item => console.log("Будильник № " + item.id + " заведён на " + item.time));
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}