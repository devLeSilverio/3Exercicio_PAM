$(document).on('click', '#calculo',function(){
var lado = parseFloat($('#lado1').val());
var lado2 = parseFloat($('#lado2').val());
var lado3 = parseFloat($('#lado3').val());

if(Verificar(lado,lado2,lado3)){
  if(lado == lado2 && lado2 == lado3){
    $('#situação').html("<img src='lib/equilatero.jpg' heigth='300vh' width='300vh'>");
    $('#aviso').val("Equilátero!!");
  }
  else if((lado == lado2 && lado2!=lado3) || (lado == lado3 && lado3!=lado2) || (lado2 == lado3 && lado3!=lado)){
    $('#situação').html("<img src='lib/isosceles.jpg' heigth='300vh' width='300vh'>");
    $('#aviso').val("Isósceles!!");
  }
   else if((lado != lado2 && lado2!=lado3) || (lado != lado3 && lado3!=lado2) || (lado2 != lado3 && lado3!=lado)){
    $('#situação').html("<img src='lib/escaleno.png' heigth='300vh' width='300vh'>");
    $('#aviso').val("Escaleno!!");
  }
}

});

function Verificar(lado,lado2,lado3){
    if(lado<(lado2+lado3) && lado2<(lado3+lado) && lado3<( lado2 + lado)){
        return true;
    }else{
      navigator.notification.alert("Esse triângulo não é válido!!",null,"Aviso","OK");
      navigator.vibrate(5000);
    }
}

$(document).on('click', '#limpar', function() {
$('#lado3').val('');
$('#lado1').val('');
$('#lado2').val('');
$('#aviso').val('');

});