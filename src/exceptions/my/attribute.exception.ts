export default class ExceptionAttribute {
    private code:number;
    private message:string;

    constructor( code:number, message:string ) {
      this.code = code;
      this.message = message;
    }

    get getCode():number {
      return this.code;
    }

    get getMessage():string {
      return this.message;
    }
}
