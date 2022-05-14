const StudentService = require("./../../lib/services/creatureService");
const Reader = require("./../../lib/utils/Reader");
describe("Class CreatureService",()=>{
    test("Metodo getCreatures",()=>{
        const creatures = Reader.readJsonFile("creatures.json");
        const getCreatures = StudentService.getCreatures(creatures);
        expect(getCreatures).not.toBeUndefined();
    });
});