

/***
 * 
 *  This program intends to convert an array of integers into
 *  an array of strings representing the phonetic equivalent of
 *  the integer
 * 
 ***/


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

function numbersToString(test_array){  

    for (i = 0; i < test_array.length; i++){

        let number_in_words = "";

        for (j = 0; j < test_array[i].toString().length; j++){

            number_in_words += numbers[test_array[i].toString().charAt(j)];

        }

        phonetic_list[i] = number_in_words;

    }

    return phonetic_list;

}

test_array = [];

m = process.argv.length - 2 ;
 
 for (i = 0; i < m; i++){

    test_array[i] = process.argv[i+2];
 }

 console.log(numbersToString(test_array).toString())
