import esBisiesto from "./bisiesto.js"


describe("AnioBisiesto", () => {
    it("Deberia dar verdadero para años bisiestos. Caso anio 400", () => {
        expect(esBisiesto(400)).toEqual(true);
    });
    it("Deberia dar verdadero para años bisiestos. Caso anio 800", () => {
        expect(esBisiesto(800)).toEqual(true);
    });
});