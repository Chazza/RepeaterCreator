const fs = require("fs");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var minLength = 2;
var maxLength = 6;
for(i = 0; i < alphabet.length; i++) {
    for(length = minLength; length <= maxLength; length++) {
        fs.appendFile(__dirname + '/' + maxLength + '-char-repeater.txt', alphabet[i].repeat(length) + '\n', function (err) {
            if(err) return console.log(err)
        })
        
    }
}

