function CalcularImpuesto(valorcompra, valueState) {
    let valorImpuestos=0;
    let res;
    switch (valueState) {
        case 'UT':
            valorImpuestos = 0.0665;
            break;
        case 'NV':
            valorImpuestos = 0.08;
            break;
        case 'TX':
            valorImpuestos = 0.0625;
            break;
        case 'AL':
            valorImpuestos = 0.04;
            break;
        case 'CA':
            valorImpuestos = 0.0825;
            break;
        default:
            alert("No existe");
    }
    res = valorcompra * valorImpuestos;
    return res;
}
export default CalcularImpuesto;
  