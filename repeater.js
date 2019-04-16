const fs = require("fs");

const optionDefinitions = [
    { name: 'min', defaultValue: 1, type: Number },
    { name: 'max', defaultValue: 6, type: Number },
    { name: 'numbers', defaultValue: false, type: Boolean }
]
const commandLineArgs = require('command-line-args')
const options = commandLineArgs(optionDefinitions)

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var data = [];
if (options.numbers) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.forEach(data.push)
}
for (i = 0; i < alphabet.length; i++) {
    for (length = options.min; length <= options.max; length++) {
        data.push(alphabet[i].repeat(length) + '\r\n');
    }

    if (i+1 == alphabet.length) {
        
        var name = options.max + '-char-repeater.txt';
        fs.appendFile(__dirname + '/' + name, data.join(''), function (err) {
            if (err) return console.log(err)

            console.log("Saved as " + name);
        })
    }
}

