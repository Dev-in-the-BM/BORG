import {getData} from "./utils.js";
import {receiver} from "./receiver.js";

let express = require("express");
let bodyParser = require("body-parser");
export const app = express();
app.use(bodyParser.json());

getData((data) => {
	for(let i in data.clients) {
		receiver(data.clients[i].token);
	}
}, "data");

app.listen(3000);
