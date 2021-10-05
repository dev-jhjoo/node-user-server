import { HttpStatus } from '../config/index.config';
import ExceptionAttribute from './my/attribute.exception';
import MyBasicException from './my/basic.exception';

/**
 * @author joojh
 * status code : 403
 * name : Forbidden
 *
 * @description
 * The request contained valid data and was understood by the server, but the server is refusing action.
 * This may be due to the user not having the necessary permissions
 * for a resource or needing an account of some sort, or attempting a prohibited action
 * (e.g. creating a duplicate record where only one is allowed).
 * This code is also typically used if the request provided authentication by answering
 * the WWW-Authenticate header field challenge, but the server did not accept that authentication.
 * The request should not be repeated.
 */
class ForbiddenException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute ) {
    super(
      HttpStatus.FORBIDDEN,
      errorAttribute.getCode,
      errorAttribute.getMessage
    );
  }
}

export default ForbiddenException;
