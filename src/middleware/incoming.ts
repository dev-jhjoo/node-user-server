import { NextFunction, Request, Response } from 'express';

const log = ( req:Request, res:Response, next:NextFunction ) => {
  const { hostname, ip, method, url, headers, body } = req;
  console.log({ hostname, ip, method, url, headers, body });
  next();
};

const incoming = { log };
export default incoming;
