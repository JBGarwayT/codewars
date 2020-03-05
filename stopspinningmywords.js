function spinWords(words){
    var wordArryay = words.split(" ")
    var reversedArray = []
    wordArryay.forEach(word => {
        if (word.length >= 5) {
            reversedArray.push(word.split("").reverse().join(""))
        }
        else {
            reversedArray.push(word)
        }
    });
    return reversedArray.join(" ")
  }