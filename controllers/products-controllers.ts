import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator/src/validation-result"

const prisma = new PrismaClient()


export const getProducts = async (req: Request, res: Response) => {
    const users = await prisma.product.findMany()
    res.json(users)
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return next(new Error('please insert valid info'))
    }
    const { name, description } = req.body
    const newProduct = await prisma.product.create({
        data: {
            name: name,
            description: description
        }
    })
    res.json(newProduct)
}

export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.userId
    const { name, description } = req.body
    const newProduct = await prisma.product.update({
        where: {
            id: +id
        },
        data: {
            name,
            description
        }
    })
    res.json(newProduct)
}



export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.prodId
    const deletedProduct = await prisma.product.delete({
        where: {
            id: +id
        }
    })
    res.json(deletedProduct)
}