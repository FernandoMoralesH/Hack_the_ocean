const creaturesController = require("./controllers/creatureController");
const req = require("express/lib/request");
const res = require("express/lib/response");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!')
});

app.get ("/v1/creature:species", (request, response) => {
    const species = request.params.species;
    const speciesSelect = creaturesController.getCreatures(species);
    response.json(speciesSelect);
});

app.listen(port, () => {
    console.log(`Hachita API run in localhost:${port}`);
});
