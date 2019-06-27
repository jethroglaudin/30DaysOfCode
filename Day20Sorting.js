/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let numSwaps = 0;
    for (let i = n; i > 0; i--) {
        
        for (let j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            
                numSwaps++;
            }
        }
        if (numSwaps == 0) {
            break;
        }
    }
    console.log("Array is sorted in " + numSwaps + " swaps.")
    console.log("First Element: " + a[0])
    console.log("Last Element: " + a[n - 1])
}
