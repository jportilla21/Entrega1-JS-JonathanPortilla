
let valorcompra, valortotal, descuento

do{
    let valorcompra = prompt ("ingresa el valor total de tu compra:USD")

    if (valorcompra>=0 && valorcompra<=1000){
    descuento= valorcompra*0.10
    alert ("Tu descuento en ese pedido es de: USD" + " " + descuento)
    valortotal = valorcompra - descuento
    alert ("Tu valor a pagar es de: USD" + " " + valortotal)
    break;
}

    if (valorcompra>=1001 && valorcompra<=2000){
        descuento= valorcompra*0.30
        alert ("Tu descuento en ese pedido es de: USD" + " " + descuento)
        valortotal = valorcompra - descuento
        alert ("Tu valor a pagar es de: USD" + " " + valortotal)
        break;
}

if (valorcompra>=2001){
    descuento= valorcompra*0.50
    alert ("Tu descuento en ese pedido es de: USD" + " " + descuento)
    valortotal = valorcompra - descuento
    alert ("Tu valor a pagar es de: USD" + " " + valortotal)
    break;
}

}  while (descuento==true)
