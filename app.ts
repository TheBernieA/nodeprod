import express from "express"
import { router as usersRoutes } from "./routes/users-routes";
import { router as productsRoutes } from "./routes/products-routes";


const app = express()
app.use(express.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})


app.use('/users', usersRoutes)
app.use('/api/products', productsRoutes)



app.listen(3000, () => console.log('Server running'))