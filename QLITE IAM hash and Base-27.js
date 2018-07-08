
/////////////////// VARIBALES ///////////////////////

var restOfIndex = '999999999999999999999999999999999999999999999999999'; // Display the remaining char's
var base27 = ['9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Q','Y','Z'];
var real27ToNew27 = {
    '0' : '9',
    '1' : 'A',
    '2' : 'B',
    '3' : 'C',
    '4' : 'D',
    '5' : 'E',
    '6' : 'F',
    '7' : 'G',
    '8' : 'H',
    '9' : 'I',
    'a' : 'J',
    'b' : 'K',
    'c' : 'L',
    'd' : 'M',
    'e' : 'N',
    'f' : 'O',
    'g' : 'P',
    'h' : 'Q',
    'i' : 'R',
    'j' : 'S',
    'k' : 'T',
    'l' : 'U',
    'm' : 'V',
    'n' : 'W',
    'o' : 'X',
    'p' : 'Y',
    'q' : 'Z',
};
////////////////////// VARIABLES END ////////////////////////


////////////////////////////// FUNCTIONS //////////////////////////////////
/////////////////// FROM BASE 27 TO BASE 10 NUMBER ////////////////////////
document.querySelector('.btn-base27').addEventListener('click', convertBase10InBase27)// When clicking "Convert to Base-10!" Button

function convertBase27InNumbers() {
    var userInputBase27 = document.getElementById("base27").value; // USER INPUT (QLITE BASE-27)
    var from27ToNumbers = [];
    var userResultArr = [];
    var userInputBase27New = userInputBase27.split(''); // From string to an array (IE; 'AO' => [A,O])
    for (var k = 0; k < userInputBase27New.length; k++){ // Make it from [A,O] => [15,1]
        from27ToNumbers.unshift(base27.indexOf(userInputBase27New[k]));
    }
    // Convert Base27 Numbers Into Base10
    for (var j = 0; j < from27ToNumbers.length; j++) {
        var base27To10Res = (from27ToNumbers[j] * (27**j)); // From [15 => 15*27^0 => 27) and (1 => 1*27^1 => 27)
        userResultArr.push(base27To10Res); // Goes from [15,27] => [27,15]
    }
    // sum up the end result
    var base27InNumbersResult = userResultArr.reduce((a, b) => a + b, 0);// Sums up 15 + 27 => 42 
    document.getElementById("outputBase10").innerHTML = base27InNumbersResult; // Outputs result; 42
};


/////////////// FROM HASH AND INDEX TO IAM Identification ////////////////////
document.querySelector('.btn-base10').addEventListener('click', convertBase10InBase27)// When clicking "MAKE NEW HASH!" Button

function convertBase10InBase27(){
    var fullHash = document.getElementById("hash").value; // Get user's HASH-input
    var slicedHash = fullHash.slice(0,-51); // Remove the last 51 characters from "fullHash"
    var userIndexRaw = document.getElementById("index").value; // Get user's INDEX-input
    var userIndexString = userIndexRaw.toString(27); // Converts INDEX from Base-10 to Base-27
    var indexArrNum = [];
    var indexArrChar = [];
    for (var i = 0; i < userIndexString.length; i++){
        indexArrNum.push(userIndexString[i]); // Pushes the INDEX into an array ('12' => [1,2])
    }
    for (var z = 0; z < indexArrNum.length; z++){ // Goes trough the real Base-27 and replaces it with our custom base-27 (var: real27ToNew27)
        indexArrChar.push(real27ToNew27[indexArrNum[z]]) // Example: [1,2] => [A,B]
    }
    var indexStr = indexArrChar.join(''); // Goes from [A,B] => 'AB' (from array to string)

    // Setting it all together
    var fullIAMID = slicedHash + restOfIndex.slice(0, (51-indexStr.length)) + indexStr; // first part of hash + rest of the index(minus the length of INDEX) + INDEX
    document.getElementById("fullIAMID").innerHTML = fullIAMID; // Send it to HTML
};

//////////////////////////// FUNCTIONS END ////////////////////////////////

// Donate <3
// IOTA: GCZOLCYBKBDNHYGIFQJHYKSDTDWRTOFYTJQLHP9H9JZKJHHXHYOEWIUILTP9LTNP9WMDB9DCHLIDRIVG9KRMS9JJFD