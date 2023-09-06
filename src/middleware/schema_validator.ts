import { NextFunction, Request, Response } from "express";
import { ValiError, parse } from "valibot";


export const schemaValidator = (schema: any) => 
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const {query, params, body} = parse(schema, {body: req.body, params: req.params, query: req.query})
            // const body = parse(schema, req.body);
            // const params = parse(schema, req.params);
            // const query = parse(schema, req.query);
            req.params = params;
            req.query = query;
            req.body = body;
            next();
        } catch (error) {
            const message = error instanceof ValiError ? error.issues[0].message : error;
            return res.status(400).json({message, ok: false})
        }
    }