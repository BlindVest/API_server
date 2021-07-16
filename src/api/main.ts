import { Request, Response } from 'express'

const main = (req: Request, res: Response) => {
    let data: Object
    if(req.query.asdf) {
        return res.send('asdf')
    } else {
        data = {
            message: 'Please Set Params'
        }
        res.status(400)
        res.send(JSON.stringify(data))
    }
}

export default main