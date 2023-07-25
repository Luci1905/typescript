import PromptSync from "prompt-sync";

import { numerosPares } from "../Aula2/ResoluçãoFor/Exe2";
import { Fibonacci } from "../Aula2/ResoluçãoFor/Exe5";
import { numLoopwhile } from "../Aula2/ResoluçãoWhile/Exe6";
import { soma } from "../Aula2/ResoluçãoWhile/Exe7";
import { contagemRegressiva } from "../Aula2/ResoluçãoWhile/Exe9";
import { tabuada } from "../Aula2/ResoluçãoFor/Exe4";

const prompt = PromptSync();

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite um numero de exercicio de 1 a 6: "));

    switch (exercicio) {
        case 1:
            numerosPares()
            
            break;
        case 2:
            Fibonacci()
            
            break;
        case 3:
            numLoopwhile();
            
            break;
        case 4:
            soma();
            break;
        case 5:
            contagemRegressiva();
            break;
        case 6:
            tabuada();
            break;

        default:
            break;
    }
    continuar = prompt("Deseja continuar com a lista de exercício?Digite s para sim e n para não: ").toLocaleLowerCase();

} while (continuar === "s");