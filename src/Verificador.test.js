import CalcularImpuesto from "./Calcular_Funciones.js";

describe("==============    /// IMPUESTOS ///   ==============", () => {
  // if resultado x == x then mostrar mensaje de exito (verde)
  // else mostrar mensaje de falla (rojo)
  it("deberia calcular el impuesto del estado UT", () => {
    const resultado = CalcularImpuesto(10,"UT");
    expect(resultado).toEqual(0.665); 
  });
  it("deberia calcular el impuesto del estado NV", () => {
    const resultado = CalcularImpuesto(20,"NV");
    expect(resultado).toEqual(1.6); 
  });
  it("deberia calcular el impuesto del estado TX", () => {
    const resultado = CalcularImpuesto(30,"TX");
    expect(resultado).toEqual(1.875); 
  });
  it("deberia calcular el impuesto del estado AL", () => {
    const resultado = CalcularImpuesto(40,"AL");
    expect(resultado).toEqual(1.6); 
  });
  it("deberia calcular el impuesto del estado CA", () => {
    const resultado = CalcularImpuesto(50,"CA");
    expect(resultado).toEqual(4.125); 
  });
});
