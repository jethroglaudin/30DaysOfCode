function processData(input) {
    let inputCopy = input.split('\n').splice(1);
    

    inputCopy.forEach((str) => {
        let evenStr = "";
        let oddStr = "";
        for (var i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i]
        };
        console.log(`${evenStr} ${oddStr}`);
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
