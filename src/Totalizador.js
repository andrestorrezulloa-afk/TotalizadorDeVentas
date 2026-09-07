export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

export function calcularImpuesto(precioNeto, estado) {
  const impuestosPorEstado = {
    "UT": 0.0665, 
    "NV": 0.0800,
    "TX": 0.0625, 
    "AL": 0.0400, 
    "CA": 0.0825  
  };
  const tasa = impuestosPorEstado[estado] || 0;
  return precioNeto * tasa;
}
export function calcularDescuento(precioNeto) {
  return 0; 
}