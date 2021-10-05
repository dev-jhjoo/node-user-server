import { HttpStatus } from '../config/index.config';
import ExceptionAttribute from './my/attribute.exception';
import MyBasicException from './my/basic.exception';

/**
 * @author joojh
 * status code : 404
 * name : Not Found
 *
 * @description
 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
 */
class NotFoundException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute ) {
    super(
      HttpStatus.NOT_FOUND,
      errorAttribute.getCode,
      errorAttribute.getMessage
    );
  }
}

export default NotFoundException;
