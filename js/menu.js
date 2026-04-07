function myFunction(){
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav"){
        x.className += " responsive";//Abrir e executar o icone do menu
    }else{
        x.className = "topnav"; //Recolha o menu pelo icone
    }
    }