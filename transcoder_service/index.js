import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import KafkaConfig from "./kafka/kafka.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
   allowedHeaders: ["*"],
   origin: "*"
}));

app.use(express.json());

const kafkaconfig =  new KafkaConfig()
kafkaconfig.consume("transcode", (value)=>{
   console.log("got data from kafka : " , value)
})

app.get('/', (req, res) => {
   res.send('HHLD YouTube Transcoder')
})

app.listen(port, () => {
   console.log(`Server is listening at ${port}`);
})
