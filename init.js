import "./model/video";
import "./model/comment";
import "./model/user";
import dotenv from "dotenv";
import db from "./db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 4000;

const listening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, listening);


