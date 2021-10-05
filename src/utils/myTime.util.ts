import moment from "moment"

class MyTime{
    get getNow(){
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }
}

const myTime = new MyTime();
export default myTime;