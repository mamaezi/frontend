function autenticar()
{
    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("{Digitou = " + txtEmail + "/" + txtSenha +"}");

    var msgBody={
        email:txtEmail,
        senha:txtSenha
    }
    //definir o metodo como posto
    //definir mensagem do corpo da reuisicao
    //
    var cabecalho={
        method:"POST",
        body:JSON.stringify(msgBody),//converte para string json)
        headers:{
            "Content-type":"application/json"
        }
    }
    const newLocal = "http://localhost:8088/login";
//envia o dados
    fetch(newLocal,cabecalho)
    .then(res=> trataResposta(res));
}

function trataResposta(res){
    if (res.status==200){
       // document.getElementById("msgERRO").innerHTML="<h3>Conectado com Sucesso!<h3>";
       res.json().then(objeto=>logar(objeto));
    }
    else if (res.status==401){
        document.getElementById("msgERRO").innerHTML="<h3>Senha Inv&aacute;lida!<h3>";
    }
    else if (res.status ==404){
        document.getElementById("msgERRO").innerHTML="<h3>Usu&aacute;rio Desconhecido!<h3>";
    }
}

function logar(objeto){
//console.log(objeto);

var objSTR = JSON.stringify(objeto);
localStorage.setItem("ScheduleUser",objSTR);
window.location="home.html";
}
