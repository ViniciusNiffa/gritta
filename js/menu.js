function myFunction(){
    var x = document.getElementById("cabecalho");
    if(x.className === "topHeader"){
        x.className += " responsive";//Abrir e executar o icone do menu
    }else{
        x.className = "topHeader"; //Recolha o menu pelo icone
    }
    }