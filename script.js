function CalcularPromedio(){
    var v1= document.getElementById("n1").value;
    var v2= document.getElementById("n2").value;
    var v3= document.getElementById("n3").value;
    var pro= (parseFloat (v1) + parseFloat (v2) + parseFloat (v3))/3;
   
    
    var estado= '';
    
    if (pro>=3){
       estado= ", por lo tanto aprobaste.";
    }else{
       estado=", por lo tanto no aprobaste.";
    }

    document.getElementById("res").innerHTML = "El promedio de notas es: " + pro + estado;

}





