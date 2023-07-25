export function Fibonacci(){
    let numAnterior: number = 0;
    let numAtual: number = 1;
    
    console.log(numAnterior);
    console.log(numAtual);
    
    for (let contador = 0; contador < 8; contador++) {
        let proximoNumero = numAnterior + numAtual;
    
        console.log(proximoNumero);
    
        numAnterior = numAtual;
        numAtual = proximoNumero;
    }
}

