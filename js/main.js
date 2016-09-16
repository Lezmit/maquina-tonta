
window.addEventListener("load", function() {
    var supercri = document.getElementById("calcularSuperCri");
    supercri.addEventListener("click", function() { 
        var color = document.getElementById("Textcolor").value;
        if(color == "red"){
          document.getElementById("bg-1").classList.toggle("b-color1");
          document.getElementById("bg-2").classList.remove("b-color2");
          document.getElementById("bg-3").classList.remove("b-color3");
        } 
          else if(color == "yellow"){
          document.getElementById("bg-2").classList.toggle("b-color2");
          document.getElementById("bg-3").classList.remove("b-color3");
          document.getElementById("bg-2").classList.remove("b-color1");
        }
          else if(color == "green"){
          document.getElementById("bg-3").classList.toggle("b-color3");
          document.getElementById("bg-1").classList.remove("b-color1");
          document.getElementById("bg-2").classList.remove("b-color2");
        }
    });

    var boton = document.getElementById("calcularCri");
    var cont = 1;
    boton.addEventListener("click", function(){
        if (cont == 1){
            document.getElementById("Textcolor").value = "red";
            document.getElementById("bg-1").classList.add("b-color1");
            document.getElementById("bg-3").classList.remove("b-color3");
        }
        if (cont == 2){
            document.getElementById("Textcolor").value = "yellow";
            document.getElementById("bg-2").classList.add("b-color2");
            document.getElementById("bg-1").classList.remove("b-color1");
        }
        if (cont == 3){
            document.getElementById("Textcolor").value = "green";
            document.getElementById("bg-3").classList.add("b-color3");
            document.getElementById("bg-2").classList.remove("b-color2");
            cont = 0;
        }
        cont ++;
    });

 });