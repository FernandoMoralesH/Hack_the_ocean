const creaturesController = require("");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundo!')
});

