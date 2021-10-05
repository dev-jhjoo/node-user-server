import { HttpStatus } from '../config/index.config';
import ExceptionAttribute from './my/attribute.exception';
import MyBasicException from './my/basic.exception';

/**
 * @author joojh
 * status code : 500
 * name : Internal Server Error
 *
 * @description
 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
 */
class InternalServerErrorException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute ) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      errorAttribute.getCode,
      errorAttribute.getMessage
    );
  }
}

export default InternalServerErrorException;
