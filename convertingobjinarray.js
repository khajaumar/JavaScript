const obj = {
    name: "khaja",
    city: "Nanded",
    contact: 9856236,
};

// const keys = Object.keys(obj);
// const newArr = keys.map((key) => obj[key]);
// console.log(newArr);

const arr = Object.entries(obj);
const arr1 = Object.keys(obj);
const arr2 = Object.values(obj);
console.log(arr , arr1 , arr2);