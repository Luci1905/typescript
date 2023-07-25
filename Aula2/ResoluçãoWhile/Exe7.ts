export function soma(){
    let soma: number = 0;
    let contador: number = 1;
    
    while (contador <= 100) {
        soma = soma + contador
    
        contador++
        console.log(soma);
    
    }
}
