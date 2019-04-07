function processData(input) {
    //Enter your code here
    var array = input.split("\n");
    var entries = array.splice(0, 1);
    var queries = array.splice(entries);

    

    for (var i = 0; i < entries; i++){
        array[i] = array[i].split(" ");
        
    }

    var phoneBookMap = new Map(array);
   

    for (var i = 0; i < queries.length; i++){
        if (phoneBookMap.has(queries[i])) {
            console.log(`${queries[i]}=${phoneBookMap.get(queries[i])}`)
        } else {
            console.log("Not found")
        }

    }
        
    

   
   

    
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