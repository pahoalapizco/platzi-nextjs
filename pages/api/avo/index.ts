import { IncomingMessage, ServerResponse } from "http";

// BD
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url)
    const db = new DB()
    const allEntries = await db.getAll()
    const data = {
        length: allEntries.length,
        data: allEntries
    }

    res.statusCode = 200
    res.setHeader("Content-type", "application/json")
    res.end(JSON.stringify(data))

}

export default allAvos