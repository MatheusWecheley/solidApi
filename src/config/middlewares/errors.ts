import express, { Express, NextFunction, Request, Response } from 'express';

export default function errorsHandle(app: Express): void {
   app.use(
      (err: Error, request: Request, response: Response, next: NextFunction) => {
         if(err instanceof Error) {
            return response.status(400).json({
               message: err.message,
            });
         }
         return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err}`,
         });
      }
   );
}