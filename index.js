function laskeLämpö() {
    function celToFah(celsius) {
        var fahrenheit = Math.round((celsius * (9/5)) + 32);
        return fahrenheit;
    }

    function fahToCel(fahrenheit) {
        var celsius = Math.round((fahrenheit - 32) * (5/9));
        return celsius;
    }


    var valittuLämpö = document.getElementById("valinta");
    var valinta_arvo = valittuLämpö.options[valittuLämpö.selectedIndex].value;

    var lämpö = document.getElementById("lämpötila").value;

    var tulos;
 
    if (valinta_arvo == "cel") {
        tulos = celToFah(lämpö);
        document.getElementById("tulosalue").innerHTML = "= " + tulos + " Fahrenheitiä";
    } else {
        tulos = fahToCel(lämpö);
        document.getElementById("tulosalue").innerHTML = "= " + tulos + " Celsiusta";
    }

}
