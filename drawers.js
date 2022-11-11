/* 
Définition générale du problème : écrire un programme qui fait des opérations sur un tableau d'entiers positifs (input), au moins un, sans doublon, sans ordre particulier. Le programme doit fonctionner que le tableau ne contienne que des nombres pairs, que des nombres impairs ou un mélange des deux.

A. Tiroir 1
- Le programme compte le nombre d'entiers pairs et le nombre d'entiers impairs (l'opérateur % vous donne cette information)
- Exemples
    - Input: [1,5,2,10,7]
    - Output:
    Nombres pairs : 2, nombres impairs : 3
    
    - Input: [1,5,27,3,11,9]
    - Output:
    Nombres pairs : 0, nombres impairs : 6

B. Tiroir 2
- Le programme isole maintenant en plus les nombres pairs des nombres impairs dans des tableaux séparés puis les imprime
- Exemples
    - Input: [1,5,2,10,7]
    - Output:
    Nombres pairs : [2,10] (2), nombres impairs : [1,5,7] (3)
    
    - Input: [1,5,27,3,11,9]
    - Output:
    Nombres pairs : [] (0), nombres impairs : [1,5,27,3,11,9] (6)

C. Tiroir 3
- Le programme identifie maintenant en plus quel nombre pair est le plus grand parmi les nombres pairs et quel nombre impair est le plus grand parmi les nombres impairs
- Exemples
    - Input: [1,5,2,10,7]
    - Output:
    Nombres pairs : [2,10] (2, le plus grand est 10), nombres impairs : [1,5,7] (3, le plus grand est 7)
    
    - Input: [1,5,27,3,11,9]
    - Output:
    Nombres pairs : [] (0, pas de plus grand), nombres impairs : [1,5,27,3,11,9] (6, le plus grand est 27)
    
D. Tiroir 4
- Prendre du recul sur son algo une fois que ça fonctionne et vérifier qu'il est optimal sur les critères nombre d'itérations et nombre de comparaison. S'il est possible d'obtenir le même résultat avec moins d'itérations et moins de comparaisons, alors revoir son pseudo-code et son implémentation.
*/

const input = process.argv[2];

const array = input.split(",");

const numbers = []; 

for (let i = 0; i < array.length; i++) { 
    const candidate = array[i]; 
    const number =parseInt(candidate, 10);
    numbers.push(number);
};

let countEven = 0;
let countOdd = 0;
const evenNumbers =[];
const oddNumbers =[];
let maxEven =-1;
let maxOdd =-1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        countEven++;
        evenNumbers.push(numbers[i]);
        if (numbers[i] > maxEven) {
            maxEven = numbers[i];
        }
    } else {
        countOdd++;
        oddNumbers.push(numbers[i]);
        if (numbers[i] > maxOdd) {
            maxOdd = numbers[i];
        }
    }
};

console.log(`Even numbers : ${evenNumbers} (${countEven}, ${maxEven!=-1 ? "the greater number is "+ maxEven : "there is no greater number"}), odd numbers : ${oddNumbers} (${countOdd}, ${maxOdd != 0 ? "the greater number is " + maxOdd : "there is no greater number"})`)
