// // const arr= ["A", "R", "M"];
// // console.log(arr.join(""));

// const arry = ["A", "R", "M"];
// // const text= "";
// // arry.forEach((element) => {
// //     text += element;
// // });
// // console.log(text);
// console.log(arry.reduce((a , b)=> a + b));

// arr = [2, 4, 3];
// console.log(arr.reduce((a , b)=> a * b**3, 1));

const arr = [null, 2, 3, 4, "cat", {num: 25}, undefined, 2];

const newArr = arr.filter((item) => typeof item === "number" && item);
 
console.log(newArr.reduce((acc, num) => acc + num ));