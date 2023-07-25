import PromptSync from "prompt-sync";
let prompt = PromptSync();

export function tabuada() {
   let numero = parseInt(prompt("Digite o numero que deseja ver a tabuada: "))

   for (let contador: number = 1; contador <= 10; contador++) {
      console.log(`${numero} x ${contador} = ${numero * contador}`);
   }
}

