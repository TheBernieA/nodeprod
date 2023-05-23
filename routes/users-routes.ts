import express from 'express'
import { welcome } from '../controllers/users-controllers'

export const router = express.Router()

router.get('/message', welcome)
