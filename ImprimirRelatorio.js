    function imprimir(){
       
        var userSTR = localStorage.getItem("Impressao")
              if (!userSTR){    // o objeto não existe no Local Storage
            window.location = "home.html";
        }
        else{
              
            document.getElementById("relatorio").innerHTML = userSTR;
            window.print();
        }   
     }