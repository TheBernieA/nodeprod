import express, { Request, Response } from 'express'

export const welcome = (request: Request, response: Response) => {
    response.send('<h1>welcome users</h1>')
}