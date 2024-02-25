import "reflect-metadata";
import { startServer } from "./server";
import { connect } from "./config/typeOrm";




async function main(){
    connect()
    const PORT = 3000 || 30001;
    const app = await startServer();
    app.listen(PORT)
    console.log(`Server on ${PORT}`);
    
}

main();