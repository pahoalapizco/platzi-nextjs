import { NextApiRequest, NextApiResponse } from 'next'
// BD
import DB from '@database'

const avoById = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.avoId
    const db = new DB()
    const entry = await db.getById(id as string)

    res.statusCode = 200
    res.setHeader("Content-type", "application/json")
    res.end(JSON.stringify(entry))

}

export default avoById