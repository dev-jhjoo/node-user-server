import moment from 'moment';

class MyTime {
  getNow = () => moment().format( 'YYYY-MM-DD HH:mm:ss' )
}

const myTime = new MyTime();
export default myTime;
