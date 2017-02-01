/* Función para validar 'space', 'backspace' and digits*/
function isValid(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var isNumber = (charCode > 47 && charCode < 58)
    if ( charCode == 8 || charCode == 32 || isNumber) {
        return true;
    }
    return false;
}

/* Funcion auxiliar para llamar la funcion calculate() */
function calcResult(e){
    e.preventDefault();
    var numbers = document.getElementById('numbers').value;
    document.getElementById("data").innerHTML = toString(calculate(sortedArray(numbers)));
}

/* Ordenar arreglo de String */
function sortedArray(value){
    return value.split(" ").sort().reverse();
}

/*Funcion para validar la mayor combinación*/
function calculate(value){
    for(var i = 0; i < value.length; i++){
        for (var j = 0; j < (value.length - i - 1); j++){
            if(value[j][0] == value[j + 1][0]){
                var left = value[j] + value[j + 1];
                var right = value[j + 1] + value[j];
                if(right > left){
                    var temp =  value[j];
                    value[j] = value[j + 1];
                    value[j + 1] = temp;
                }
            }
        }
    }
    return value;
}

/*Funcion para convertir unarreglo en String*/
function toString(array){
    var result = '';
    for(var i = 0; i < array.length; i++){
        result = result + array[i];
    }
    return result;
}




