function calcularpromedio(){
    //definir variables y cambiar tipo de dato a a número
    let Nota1 = parseFloat(document.getElementById("n1").value);
    let Nota2 = parseFloat(document.getElementById("n2").value);
    let Nota3 = parseFloat(document.getElementById("n3").value);
    let Nota4 = parseFloat(document.getElementById("n4").value);
    let Nota5 = parseFloat(document.getElementById("n5").value);
    //realizar la suma
    let total = Nota1 + Nota2 + Nota3 + Nota4 + Nota5;
    //calcular el promedio
    let promedio = total / 5;
    //mostrar el resultado´+{}
    document.getElementById("resultado").innerHTML = "El promedio de las notas es: " + promedio;
}
function limpiar(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("n4").value = "";
    document.getElementById("n5").value = "";
    document.getElementById("resultado").innerHTML = "";
}