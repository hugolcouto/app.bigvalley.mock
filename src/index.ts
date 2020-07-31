import express from 'express'
import routes from './routes'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(routes)
const PORT = process.env.PORT || 3010
app.listen(PORT)