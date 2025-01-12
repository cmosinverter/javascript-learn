
function minMax(arr) {
  
    let min = Infinity;
    let max = -Infinity;

    if (arr.length === 0) {
        return {min: null, max: null};
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return {min: min, max: max};

}

function countWords(words) {
    let result = {};
    for (let i = 0; i < words.length; i++) {
        if (result[words[i]]) {
            result[words[i]]++;
        } else {
            result[words[i]] = 1;
        }
    }
    return result;
}



function findIndex(arr, word) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return i;
        }
    }
    return -1;
}

function removeEgg(foods) {
    let result = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] !== 'egg') {
            result.push(foods[i]);
        }
    }
    return result;
}

function removeTwoEggs(foods) {
    let result = [];
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            if (count >= 2) {
                result.push(foods[i]);
            } else {
                count++;
            }
        } else {
            result.push(foods[i]);
        }
    }
    return result;
}

function removeTwoEggsReversed(foods) {
    let result = [];
    let count = 0;
    foodsCopy = foods.slice().reverse();
    for (let i = 0; i < foodsCopy.length; i++) {
        if (foodsCopy[i] === 'egg') {
            if (count >= 2) {
                result.push(foodsCopy[i]);
            } else {
                count++;
            }
        } else {
            result.push(foodsCopy[i]);
        }
    }
    return result.reverse();
}

function fizzBuzz(num) {
    for (let i = 1; i < num; i ++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

function unique(array){
    let table = {};
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!table[array[i]]) {
            table[array[i]] = 1;
        }
    }
    for (let key in table) {
            result.push(key);
    }
    return result;
}

console.log(unique(['red', 'green', 'green', 'red']))