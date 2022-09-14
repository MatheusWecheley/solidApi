import { app } from "./app";
import Database from "./database/config";

const db = new Database();


db.createConnection();
app.listen(3000);