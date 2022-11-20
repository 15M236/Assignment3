arr = ["a","b","c","d","e"]

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
}
for(let index in arr){
    console.log(arr[index])
}
for(let index of arr){
    console.log(index)
}

arr.forEach(element => {
    console.log(element)
});