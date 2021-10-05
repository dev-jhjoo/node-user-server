import { HttpStatus } from '../config/index.config';
import ExceptionAttribute from './my/attribute.exception';
import MyBasicException from './my/basic.exception';

/**
 * @author joojh
 * status code : 203
 * name : Non-Authoritative Information
 *
 * @description
 * The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin,
 * but is returning a modified version of the origin's response.
 */
class AlreadyProcessedException extends MyBasicException {
  constructor( errorAttribute:ExceptionAttribute ) {
    super(
      HttpStatus.NON_AUTHORITATIVE_INFORMATION,
      errorAttribute.getCode,
      errorAttribute.getMessage
    );
  }
}

export default AlreadyProcessedException;
