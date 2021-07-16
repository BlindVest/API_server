import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './router'

const app: express.Application = express()
dotenv.config({ path: '../.env' })
const port = process.env.PORT || 8080
const corsOptions: object = {
  origin: '*'
}

const urlencodedOptions: object = {
  extended: true
}

app.use(router)
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded(urlencodedOptions))
app.set('trust proxy', true)

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', '[Server]', ` Server on  : ${port}`)
})
