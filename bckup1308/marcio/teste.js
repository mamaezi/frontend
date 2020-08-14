var valor=0
function mudavalor(){
    valor++;
    document.getElementById("textoAModificar").innerHTML="Valor Atual"+valor;

}

function recuperaDoBanco(){
    fetch("http://localhost:8088/agencias")
    .then(res=>res.json())
    .then(bodyjson=> preencheHTML(bodyjson))
    }


function preencheHTML(bodyjson){
var textoHTML="";
    for (i=0;i<bodyjson.length;i++){
        var agencia = bodyjson[i];
        textoHTML=textoHTML + agencia.nome + " abertura: "+agencia.horaInicio+" fechamento:" +agenciaHora;
    }
document.getElementById("textoAModificar").innerHTML = textoHTML;
}
