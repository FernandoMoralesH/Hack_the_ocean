const CreatureController = require('./../../lib/controllers/creatureController')

describe('Class CreatureController',()=> {
    test('1. Metodo getCreatures',()=>{
        const Creatures = CreatureController.getCreatures()
        expect(Creatures).not.toBeUndefined();
    })
})