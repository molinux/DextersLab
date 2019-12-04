const arr = [1, 3, 4, 5, 8, 9];

// MAP
// funcao map percorre todo o array
// const newArr = arr.map(function(item) {
const newArr = arr.map(function(item, index) {
    // return item * 2;
    return item + index;
});

console.log(newArr);

// REDUCE
// total começa em zero e vai somando ao next
// next = proximo numero do array
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

// FILTER
// true ou false. Retorna os valores true
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

// FIND
//  retorna true ou false caso tenha o elemento no array
const find = arr.find(function(item){
    // return item === 2;
    return item === 3;
});
console.log("find: " + find);