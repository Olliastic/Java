/* 1 ===================================================== */
function max(x, y) {
    if (x > y) {
        console.log("x");
    } else {
        console.log("y");
    }
}


max(3, 4);

/* 2 ===================================================== */

function maxOfThree(a, b, c) {

    var z = Math.max(a, b, c);
    console.log(z);
}


maxOfThree(2, 43, 4);

/* 3 ===================================================== */

function checkVowel(a) {

    switch (a) {

    case "a":
        return console.log("true");
        break;

    case "e":
        return console.log("true");
        break;

    case "i":
        return console.log("true");
        break;

    case "o":
        return console.log("true");
        break;

    case "u":
        return console.log("true");
        break;

    default:
        return console.log("false");
    }
}

console.log(checkVowel("l"));

/* 4 ===================================================== */

//function translate(str) {
//        var pigLatin = "";
//        for (var i = 0; i < str.length; i++) {
//            if (!;



/* 5 ===================================================== */

function sum(array) {
    return array.reduce(function (a, b) {
        return a + b;
    })
}

function multiply(array) {
    return array.reduce(function (a, b) {
        return a * b;
    })
}

console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));


/* 6 ===================================================== */

function reverse(string) {
    var newStr = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;

}

console.log(reverse("video"));


/* 7 ===================================================== */

var randomPrint = function(){

    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    z = Math.floor(Math.random() * 100);

   console.log(x, y, z);

   if(x > y && x > z) {
        var biggest = x;
        console.log("The greatest number is" + " " + x);
   } else if(y > z && y > x) { 
       console.log("The greatest number is" + " " + y);
       var biggest = y;
   } else if(z > y && z > x) {   
       console.log("The greatest number is" + " " + z);
       var biggest = z;
   }
   return biggest;
};

randomPrint();


/* 8 ===================================================== */
var words = ["apple", "oranges", "grapes", "cucumbers"];

function findLongestWord(array) {
    var longestWord = array[0];
    for (var i = 1; i < array.length; i++) {
        if (longestWord.length < array[i].length) {
            longestWord = array[i];
        }
    }
    return longestWord.length;
    //    console.log(array.longestWord);
}

console.log(findLongestWord(words));
console.log(findLongestWord(["one", "two", "three", "four"]));

/* 9 ===================================================== */


var filterLongWords;

function filterLongWords(array, i) {
    var newArray = [];
    array.forEach(function (words) {
        if (words.length > i) {
            newArray.push(words)
        };
    });
    return newArray;
}

console.log(filterLongWords(["Testing", "this", "function", "to", "see", "if", "it", "works"], 3));

/* 10 ===================================================== */


function charFreq(string) {
	var freq = {};
	for (var i = 0; i < string.length; i++) {
		if (freq.hasOwnProperty(string[i])) {
			freq[string[i]] += 1;
		}
		else {
			freq[string[i]] = 1;
		}
	}
	return freq;
}

console.log(charFreq("zyzzyyzy"));

