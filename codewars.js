console.log(reverse('colin'));

function reverse(str) {
    let left = 0;
    let right = str.length-1;

    while (left < right) {

        let temp = str[left];
        
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str
}




// let arr = ['colin'];
// let n = arr.length;




// for(let i=0; i<=n/2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[n-i];
//   arr[n-i] = temp;
// }
// console.log(arr);