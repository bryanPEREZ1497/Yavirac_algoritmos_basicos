//input: hola,hola, gente
//output: hola 2, gente 1

// let array = ['chao', 'chao', 'hola', 'hola', 'chao'];
let array = ['chao','chao','chao']
function CountWords(array) {
    let j = 0;
    let times = 0;
    let listWords = {};
    let word = array[j];
    //if array is not empty
    while (array.length != 0) {
        for (let i = 0; i < array.length; i++) {
            if (word === array[i]) {
                times++;
                listWords[array[j]] = times;
                if (i != j) {
                    array.splice(i, 1);
                }
            }
        }
        array.splice(j, 1);
        j++;
        times = 0;
    }
    return listWords;
}

function deleteWords(value, array) {

}

console.log(CountWords(array));
