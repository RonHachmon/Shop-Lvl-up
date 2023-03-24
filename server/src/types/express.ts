import { Response, Request, NextFunction } from 'express';
export type res = Response;
export type req = Request;
export type next = NextFunction;

export interface expressErrors {
  statusCode: number;
  message: string;
  validErrors: string[];
}
