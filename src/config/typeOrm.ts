import { createConnection } from "typeorm"
import path from "path"

export async function connect(){
    await createConnection({
        type: 'mysql',
        host:'localhost',
        port: 3306,
        username: 'root',
        password: 'pablo123',
        database: 'test',
        entities:[
            path.join(__dirname + '/entities/**/**.ts')
        ],
        synchronize: true
    })
    console.log('Database is connected');
} 