/*
acessar o localStorage e ver se existe um item chamado scheduleruser
se tiver reucpea
se nao existem retorna pra index.
*/

var templateFoto='<img src="{{LINKFOTO}}" width="100%">';
var templateInfo ='Nome: {{NOME}} <br>Email: {{EMAIL}} <br>Racf:{{RACH}} <br>Funcional:{{FUNCIONAL}} <br> Departamento:{{DEPARTAMENTO} / {{UNIDADE}} ';


function carregarInfoUsuario(){
var usrSTR=localStorage.getItem("ScheduleUSER");
if (!usrSRT)
{
    window.location="index.html";

}
else{
    var user = JSON.parse(usrSTR);
    console.log(user.linkFoto);
    document.getElementById("fotoUSER").innerHTML=templateFoto.replace({{LINKFOTO}},user.LINKFOTO);
    
    var infoUser = templateInfo.replace ("{{NOME}}",user.nome)
    .replace ("{{NOME}}",user.email)
    .replace ("{{RACF}}",user.racf)
    .replace ("{{FUNCIONAL}}",user.funcional)
    .replace ("{{DEPARTAMENTO}}",user.depto.nome)
    .replace ("{{UNIDADE}}",user.depto.unidade);

    Document.getElementById("infoUSER").innerHTML=infouser;

}
}

function carregaAgencias(){
    var templateSelect = '<select class="form-group" id="selectAgencia"> {{OPCOES}} </select>';


}


function preencheComboBox(listaAgencias){

    
}

