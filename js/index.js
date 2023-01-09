let selecaoPrato;
let selecaoBebida;
let selecaoSobremesa;
let priceFood;
let priceDrink;
let priceDessert;

function selecionarPrato(frango) {
  let prato = document.querySelector(".pratoSelecionado");
  let check = frango.querySelector("ion-icon");
  if(prato !== null) {
    prato.classList.toggle("pratoSelecionado");
    prato.querySelector(".icone").classList.add("escondido");
  }
  frango.classList.add("pratoSelecionado");
  frango.classList.remove("produto");
  check.classList.remove("escondido");
  selecaoPrato = frango.querySelector(".nomeFrango").innerHTML;
  priceFood = frango.querySelector(".precoFrango").innerHTML;
  trocabotao();
}

function selecionarBebida(coca) {
  let bebida = document.querySelector(".bebidaSelecionada");
  let check = coca.querySelector("ion-icon");
  if(bebida !== null) {
    bebida.classList.toggle("bebidaSelecionada");
    bebida.querySelector(".icone").classList.add("escondido");
  }
  coca.classList.add("bebidaSelecionada");
  coca.classList.remove("produto");
  check.classList.remove("escondido");
  selecaoBebida = coca.querySelector(".bebidaSelecionada .nomeBebida").innerHTML;  priceDrink = coca.querySelector(".bebidaSelecionada .precoBebida").innerHTML;
  trocabotao();
}

function selecionarSobremesa(pudim) {
  let sobremesa = document.querySelector(".sobremesaSelecionada");
  let check = pudim.querySelector("ion-icon");
  if(sobremesa !== null) {
    sobremesa.classList.toggle("sobremesaSelecionada");
    sobremesa.querySelector(".icone").classList.add("escondido");
  }
  pudim.classList.add("sobremesaSelecionada");
  pudim.classList.remove("produto");
  check.classList.remove("escondido");
  selecaoSobremesa = pudim.querySelector(".sobremesaSelecionada .nomeSobremesa").innerHTML;
  priceDessert = pudim.querySelector(".sobremesaSelecionada .precoSobremesa").innerHTML;
  trocabotao();
}


function trocabotao() {
  if (selecaoPrato !== undefined && selecaoBebida !== undefined && selecaoSobremesa !== undefined) {
    document.querySelector('.botaoAntes').classList.add('escondido');
    document.querySelector('.botao').classList.remove('escondido');
  }else {
    document.querySelector('.botao').classList.add('escondido');
    document.querySelector('.botaoAntes').classList.remove('escondido');
  }
  
}
function finalizarCompra() {
  let valueFood = priceFood.replace("R$", "").replace(",",".");
  let calueDrink = priceDrink.replace("R$", "").replace(",",".");
  let valueDessert = priceDessert.replace("R$", "").replace(",",".");
  let mensagem;
    mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${selecaoPrato} 
- Bebida: ${selecaoBebida} 
- Sobremesa: ${selecaoSobremesa} 
Total: R$ ${ (Number(valueFood) + Number(calueDrink) + Number(valueDessert)).toFixed(2).toString().replace('.', ',')}`); 

  window.open("https://wa.me/+5521999999999?text=" + mensagem);
}

