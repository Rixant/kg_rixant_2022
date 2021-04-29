
const array1 = [3, 25, 209];
const array2 = [10, 300, 5];

const numbers = {
    "0" : "Zero",
    "1" : "One",
    "2" : "Two",
    "3" : "Three",
    "4" : "Four",
    "5" : "Five",
    "6" : "Six",
    "7" : "Seven",
    "8" : "Eight",
    "9" : "Nine"
}


const phonetic_list = [];

for (i = 0; i < array1.length; i++){

    let number_in_words = "";

    for (j = 0; j < array1[i].toString().length; j++){

        number_in_words += numbers[array1[i].toString().charAt(j)];

    }

    phonetic_list[i] = number_in_words;

}

console.log(phonetic_list)