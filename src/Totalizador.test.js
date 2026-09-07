import { calcularPrecioNeto, calcularImpuesto } from "./Totalizador.js";

describe("Totalizador - Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando la cantidad por el precio", () => {
    expect(calcularPrecioNeto(3, 20)).toEqual(60);
  });
});
describe("Totalizador - Impuesto", () => {
  it("deberia calcular el monto del impuesto para el estado TX (6.25%)", () => {
    expect(calcularImpuesto(100, "TX")).toEqual(6.25);
  });

  it("deberia calcular el monto del impuesto para el estado CA (8.25%)", () => {
    expect(calcularImpuesto(200, "CA")).toEqual(16.5);
  });
});