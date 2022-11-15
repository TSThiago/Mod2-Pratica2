function calcularAumento(salario) {
    while(salario < 1501){
        salario = salario * 1.2
        return salario
    }
    while(salario > 1500 && salario < 2001){
        salario = salario * 1.15
        return salario
    }
    while(salario > 2000 && salario < 3001){
        salario = salario * 1.1
        return salario
    }
    while(salario > 3000){
        salario = salario * 1.05
        return salario
    }
}

try{
console.log(calcularAumento(3000))
}catch{
    console.log("ERRO! Valor inserido não é um número!")
}