import app from "./app/app.js";
app.listen(app.get("port"), () => {
    console.log(`https://localhost:${app.get("port")}`);
})