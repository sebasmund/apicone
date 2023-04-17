import app from "./app";

const main=()=>{
    app.listen(app.get("port"))
    console.log('Server on port 4000')
};

main();