const Superhero = require('./../app/superhero')
describe("Unit Test for Superhero", () => {
    test('Case 1 Get a superhero', () => {
      const ironman = new Superhero("Iron Man", "Tony Stark","Robert Downey Jr.")
     /// const spiderman = new Spiderman("Spiderman Sony", 31)
      expect(ironman.name).toBe("Iron Manwe");
      expect(ironman.actor).toBe("Robert Downey Jr.");
      expect(ironman.heroName).toBe("Tony Stark");
    });
  })
  