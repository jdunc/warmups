// Input: Any string of words with/without punctuation.
// Output: A scrambled form of the same sentence but with the word's first and last
//   letter's positions intact.

var myString = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

// scramble(myString) => "Acrdinocg to a recreash taem at Cirbgmade Uvinsertiy, it deno'st maettr in waht oderr the lterets in a wrod are, the olny intapromt thing is taht the fsrit and last lteetr be in the rgiht palce. The rset can be a taotl mses and you can stlil read it wohtiut a pebrolm. This is beuscae the hmaun mind does not raed erevy ltteer by iteslf, but the wrod as a wolhe. Such a ctoiodnin is atrrpaplopeiy caleld Togplmicyeya."
function scramble(str){
  var strArr = str.split(" ");
  var newStr = '';
  for (var i = 0; i < strArr.length; i++) {
    var needsScrambled = strArr[i].length - 2;
    console.log('this many letters need scrambled: ',needsScrambled);
    var scrambledValues = [];
    for(var j=0; j<needsScrambled; j++){
      scrambledValues[j]=strArr[i][j+1];
    }
    console.log('these letters need scrambled ',scrambledValues);

    for(var k=0; k<needsScrambled; k++){
      if(k===0){
        newStr+= strArr[i][k];
        console.log('remaining values to add: ',scrambledValues);
        var newChar = Math.floor(Math.random() * scrambledValues.length);
        console.log('randomly chosen value ',scrambledValues[newChar]);
        newStr += scrambledValues[newChar];
        // console.log('value to be replaced: ', strArr[i][j+1]);
        // strArr[i][j+1] = scrambledValues[newChar];
        // console.log('replaced values new content', strArr[i][j+1]);
        scrambledValues.splice(newChar,1);
        console.log(newStr);
      }
      else if(k<(needsScrambled-1)){
        console.log('remaining values to add: ',scrambledValues);
        var newChar = Math.floor(Math.random() * scrambledValues.length);
        console.log('randomly chosen value ',scrambledValues[newChar]);
        newStr += scrambledValues[newChar];
        scrambledValues.splice(newChar,1);
        console.log(newStr);
      }else{
        console.log('last letter of word being added to:',newStr);
console.log('remaining scramblers',scrambledValues," where are they?");
console.log('last letter is', strArr[i][(k+2)]);
        newStr += scrambledValues[0];
        newStr += strArr[i][(k+2)];
        newStr += ' ';
      }
    }
    // console.log(strArr);
    // console.log(scrambledValues);
  }
console.log(newStr);
}

scramble('Hello Jordan');
