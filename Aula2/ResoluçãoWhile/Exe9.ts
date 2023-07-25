import PromptSync from "prompt-sync";
let prompt = PromptSync();

export function contagemRegressiva(){
    let numero: number = parseInt(prompt('Digite um numero do usuário: '))

    while (numero >= 0) {
        console.log(numero--);
        
    }
}

