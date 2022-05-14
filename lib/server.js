const creaturesController = require("");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundo!')
});

app.get ("/v1/creature:species", (request, response) => {
    const species = request.params.species;
    const speciesSelect = creaturesController.getCreatures(species);
    response.json(speciesSelect);
} )
