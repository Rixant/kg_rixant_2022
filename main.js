

/***
 * 
 *  This program intends to convert an array of integers into
 *  an array of strings representing the phonetic equivalent of
 *  the integer
 * 
 *  For example:
 *  Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
 *  Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.
 ***/


// Create a dictionary of numbers and its phonetic equivalent
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


// Create an empty array to store result
const phonetic_list = [];

/** Create a function to convert numbers into its phonetic equivalent */
function numbersToString(test_array){  

    //iterate through each number in an array
    for (i = 0; i < test_array.length; i++){

        let number_in_words = "";

       //iterate through each digit in numbers
        for (j = 0; j < test_array[i].toString().length; j++){

            //concat the digits phonetic equivalent 
            number_in_words += numbers[test_array[i].toString().charAt(j)];

        }//end for loop

        //store results in an array
        phonetic_list[i] = number_in_words;

    }//end for loop

    //return an array of phonetic equivalent
    return phonetic_list;

}//end function numbersToString


    /***
     * Testing Section
     ***/

// Create an empty array for test_array
test_array = [];

// Determine the length of array from input
m = process.argv.length - 2 ;
 
// Retrive numbers from terminal input and store them in an array
 for (i = 0; i < m; i++){

    test_array[i] = process.argv[i+2];

 }//end for loop


//print result
 console.log(numbersToString(test_array).toString())


 /***
 * Author : Rishant Rokaha
 * Caldwell University
 * Computer Science and Mathematics
 * Class of 2022
 ***/
