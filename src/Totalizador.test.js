import { calcularPrecioNeto, calcularImpuesto, calcularDescuento } from "./Totalizador.js";

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
describe("Totalizador - Descuento", () => {
  it("deberia calcular 0 de descuento si el monto es menor a 1000", () => {
    expect(calcularDescuento(500)).toEqual(0);
  });
  it("deberia calcular 3% de descuento si el monto es exactamente 1000", () => {
    expect(calcularDescuento(1000)).toEqual(30);
  });
  
});