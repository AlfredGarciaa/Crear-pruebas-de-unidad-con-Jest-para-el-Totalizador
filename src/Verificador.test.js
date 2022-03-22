import CalcularImpuesto from "./Calcular_Funciones.js";

describe("*** FUNCIONES ***", () => {
  it("deberia calcular el impuesto", () => {
    const resultado = CalcularImpuesto(20,"TX");
    expect(resultado).toEqual(1.25); // if resultado == 1.25 then mostrar mensaje de exito (verde)
                                      // else mostrar mensaje de falla (rojo)
  });
});
