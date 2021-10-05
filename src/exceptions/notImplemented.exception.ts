import { HttpStatus } from '../config/index.config';
import ExceptionAttribute from './my/attribute.exception';
import MyBasicException from './my/basic.exception';

/**
 * @author joojh
 * status code : 501
 * name : Not Implemented
 *
 * @description
 * The server either does not recognize the request method,
 * or it lacks the ability to fulfil the request. Usually this implies future availability
 * (e.g., a new feature of a web-service API).
 */
class NotImplementedException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute ) {
    super(
      HttpStatus.NOT_IMPLEMENT,
      errorAttribute.getCode,
      errorAttribute.getMessage
    );
  }
}

export default NotImplementedException;
