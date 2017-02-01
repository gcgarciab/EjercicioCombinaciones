describe("funcion isValid", function () {
    it("Validación de entrada de números", function () {
        var obj = { keyCode: 50 };
        var x = isValid(obj);
        expect(x).toEqual(true);
    });
});

describe("funcion isValid", function () {
    it("Validación de entrada de espacios", function () {
        var obj = { keyCode: 32 };
        var x = isValid(obj);
        expect(x).toEqual(true);
    });
});

describe("funcion isValid", function () {
    it("Validación de entrada de backspace", function () {
        var obj = { keyCode: 8 };
        var x = isValid(obj);
        expect(x).toEqual(true);
    });
});

describe("funcion isValid", function () {
    it("Validación de entrada de caracter especial '@' ", function () {
        var obj = { keyCode: 64 };
        var x = isValid(obj);
        expect(x).toEqual(false);
    });
});

describe("funcion sortedArray", function () {
    it(" Recibe String y genera un arreglo ordenado ", function () {
        var input = "99 18 90 9 56"
        var x = sortedArray(input);
        expect(x).toEqual(["99","90","9","56","18"]);
    });
});

describe("funcion sortedArray", function () {
    it(" Recibe String y genera un arreglo ordenado ", function () {
        var input = "420 42 423"
        var x = sortedArray(input);
        expect(x).toEqual(["423","420","42"]);
    });
});

describe("funcion calculate", function () {
    it(" Calcular mayor combinación de un arreglo de números ", function () {
        var unsortedArray = ["99","90","9","56","18"];
        var x = calculate(unsortedArray);
        expect(x).toEqual(["99", "9", "90", "56", "18" ]);
    });
});

describe("funcion calculate", function () {
    it(" Calcular mayor combinación de un arreglo de números ", function () {
        var unsortedArray = ["423","420","42"];
        var x = calculate(unsortedArray);
        expect(x).toEqual(["42","423","420"]);
    });
});

describe("funcion toString", function () {
    it(" Convierte arreglo a String ", function () {
        var array = ["99", "9", "90", "56", "18" ];
        var x = toString(array);
        expect(x).toEqual("999905618");
    });
});

describe("funcion toString", function () {
    it(" Convierte arreglo a String ", function () {
        var array = [ "42", "423", "420" ];
        var x = toString(array);
        expect(x).toEqual("42423420");
    });
});

