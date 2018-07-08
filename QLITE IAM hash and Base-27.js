////////////////////////////// FUNCTIONS //////////////////////////////////
/////////////////// FROM BASE 27 TO BASE 10 NUMBER ////////////////////////
document.querySelector('.btn-base27').addEventListener('click', convertBase10InBase27)

function convertBase27InNumbers() {
    // Some variables
    const base27 = ['9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Q','Y','Z'];
    var userInputBase27 = document.getElementById("base27").value;
    var from27ToNumbers = [];
    var userResultArr = [];
    var userInputBase27New = userInputBase27.split(''); 
    //////////////////

    for (var k = 0; k < userInputBase27New.length; k++){ 
        from27ToNumbers.unshift(base27.indexOf(userInputBase27New[k]));
    }
    // Convert Base27 Numbers Into Base10
    for (var j = 0; j < from27ToNumbers.length; j++) {
        var base27To10Res = (from27ToNumbers[j] * (27**j)); 
        userResultArr.push(base27To10Res); 
    }
    // sum up the end result
    var base27InNumbersResult = userResultArr.reduce((a, b) => a + b, 0);
    document.getElementById("outputBase10").innerHTML = base27InNumbersResult; 
};
//////////////////////////////////////////////////////////////////////////////


/////////////// FROM HASH AND INDEX TO IAM Identification ////////////////////
document.querySelector('.btn-base10').addEventListener('click', convertBase10InBase27)

// Converter
function toBase(number, baseAlphabet) {
    const base = baseAlphabet.length;
    var res = [];
    let num = number;

    do {
        res.push(baseAlphabet[num % base]);
        num -= num % base;
        num /= base;
    } while (num > 0);

    return res.reverse().join('');
};


// Setting it all together
function convertBase10InBase27(){

    // Some variables
    var fullHash = document.getElementById("hash").value; 
    var slicedHash = fullHash.slice(0,-51); 
    var userIndex = document.getElementById("index").value; 
    const restOfIndex = '999999999999999999999999999999999999999999999999999'; 
    const b27As = [9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Q','Y','Z'];
    ///////////////////

    var indexres = toBase(userIndex, b27As);
    var fullIAMID = slicedHash + restOfIndex.slice(0, (51-indexres.length)) + indexres;
    document.getElementById("fullIAMID").innerHTML = fullIAMID;
};
//////////////////////////////////////////////////////////////////////////////
///////////////////////////// FUNCTIONS END //////////////////////////////////

// Donate <3
// IOTA: GCZOLCYBKBDNHYGIFQJHYKSDTDWRTOFYTJQLHP9H9JZKJHHXHYOEWIUILTP9LTNP9WMDB9DCHLIDRIVG9KRMS9JJFD