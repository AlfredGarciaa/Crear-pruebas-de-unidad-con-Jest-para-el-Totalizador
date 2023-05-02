import CalcularImpuesto from "./Calcular_Impuestos.js";
import CalcularDescuento from "./Calcular_Descuentos.js";

describe("==============    /// IMPUESTOS ///   ==============", () => {
  // if resultado X == X then mostrar mensaje de exito (verde)
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

describe("==============    /// DESCUENTOS ///   ==============", () => {
  // if resultado X == X then mostrar mensaje de exito (verde)
  // else mostrar mensaje de falla (rojo)
  it("deberia calcular el descuento mayor a 1000", () => {
    const resultado = CalcularDescuento(1500);
    expect(resultado).toEqual(45); 
  });
  it("deberia calcular el descuento mayor a 3000", () => {
    const resultado = CalcularDescuento(5000);
    expect(resultado).toEqual(250); 
  });
  it("deberia calcular el descuento mayor a 7000", () => {
    const resultado = CalcularDescuento(8500);
    expect(resultado).toEqual(595); 
  });
  it("deberia calcular el descuento mayor a 10000", () => {
    const resultado = CalcularDescuento(20000);
    expect(resultado).toEqual(2000); 
  });
  it("deberia calcular el descuento mayor a 30000", () => {
    const resultado = CalcularDescuento(100000);
    expect(resultado).toEqual(15000); 
  });
});


///version1

/// VERSION 2
