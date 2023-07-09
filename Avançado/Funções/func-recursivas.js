// funções recursivas são funções que se chamam de volta. Ex:

function recursiva(max){
    if(max > 10) return;
    console.log(max);
    max++;
    recursiva(max)
}

recursiva(0)

console.log('PAUSA')

function recursiva2(min){
    if(min < 0) return;
    console.log(min);
    min--;
    recursiva2(min)
}

recursiva2(5)