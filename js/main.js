window.addEventListener("load",function(){
    var button = document.getElementById("calcularCri");
    button.addEventListener("click",function(){
         document.getElementById("bg-1").style.border="8px solid " + RandomColor({hue: 'green', count: 18});
    });
        

});
