import esBisiesto from "./bisiesto.js"


describe("AnioBisiesto", () => {
    it("Deberia dar verdadero para años bisiestos. Caso anio 400", () => {
        expect(esBisiesto(400)).toEqual(true);
    });
    it("Deberia dar verdadero para años bisiestos. Caso anio 800", () => {
        expect(esBisiesto(800)).toEqual(true);
    });
    it("Deberia dar falso para años no bisiestos. Caso anio 401", () => {
        expect(esBisiesto(401)).toEqual(false);
    });
    it("Deberia dar falso para años no bisiestos. Caso anio 1700", () => {
        expect(esBisiesto(1700)).toEqual(false);
    });
    it("Deberia dar falso para años no bisiestos. Caso anio 2100", () => {
        expect(esBisiesto(2100)).toEqual(false);
    });
    it("Deberia dar verdadero para años bisiestos. Caso anio 2008", () => {
        expect(esBisiesto(2008)).toEqual(true);
    });
    it("Deberia dar verdadero para años bisiestos. Caso anio 2016", () => {
        expect(esBisiesto(2016)).toEqual(true);
    });
    it("Deberia dar false para años no bisiestos. Caso anio 2017", () => {
        expect(esBisiesto(2017)).toEqual(false);
    });
    it("Deberia dar false para años no bisiestos. Caso anio 2019", () => {
        expect(esBisiesto(2019)).toEqual(false);
    });
});