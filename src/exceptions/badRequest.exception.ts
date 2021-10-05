import { HttpStatus } from '../config/index.config';
import ExceptionAttribute from './my/attribute.exception';
import MyBasicException from './my/basic.exception';

/**
 * @author joojh
 * status code : 400
 * name : Bad Request
 *
 * @description
 * The server cannot or will not process the request due to an apparent client error
 * (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).
 */
class BadRequestException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute ) {
    super(
      HttpStatus.BAD_REQUEST,
      errorAttribute.getCode,
      errorAttribute.getMessage
    );
  }
}

export default BadRequestException;
