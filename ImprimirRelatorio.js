    function imprimir(){
        alert ("imprimir");
        var userSTR = localStorage.getItem("Impressao")
        alert ("1 + imprimir"+ userSTR);

        if (!userSTR){    // o objeto não existe no Local Storage
            window.location = "home.html";
        }
        else{
              
            document.getElementById("relatorio").innerHTML = userSTR;
            window.print();
        }   
     }