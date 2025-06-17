let student= {
    name: "prakash",
    Rollno: 22,
    percentage: 75.20,
    isPassed: true,
    samir: function() {
        console.log("hellow I am Samir");
    }
};
console.log(student);
student.samir();
let arr= [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
let yrr  = new Array (1,"samir",true,5.2);
yrr.push("Hellow");
yrr.pop();
yrr.shift();
yrr.unshift("say hellow");
yrr.push(100);
yrr.push(2000);
yrr.push(5000);
yrr.push(10000);
yrr.splice(2,0,"hey i am included");
console.log(yrr);
let arr2= [10,30,50];
let ans= arr2.map((number) => {
    return number*number;
})
console.log(ans);
let arr3= [22,33,44];
let ans2= arr3.map((number,index) => {
    console.log(number);
    console.log(index);
} )
console.log(ans2);
let arr4= ['ssb','llb',22,33,44,'samir',66,44,234];
let ans4=arr4.filter((value) => {
    return typeof (value) === 'string';
})
console.log(ans4);
let arr5=[111,222,333,'ssaadd','yyuutt',223344];
let ans5= arr5.filter((value) => {
    if (typeof(value) === 'number'){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans5);
let arr6= [50,50,50,50,50,50];
let ans6 = arr6.reduce((acc,curr) => {
    return acc+curr;
},0);
console.log(ans6);
console.log('this is the sum of ans6');
let arr7= [87,55,99,22,98,12,88,65,52];
arr7.sort();
console.log(arr7.indexOf(52));
console.log(arr7);
let arr8= [2222,333,4444];
let ans8=arr8.forEach((value,index) => {
    console.log("Number:",value, "Index:",index);
})
console.log(ans8);
for(let key in student) {
    console.log(key,":",student[key]);
}
let arr9= [21,31,41,51,61];
for(let value of arr9) {
    console.log(value);
}
let name10= "Samir Mansuri";
for(let val of name10) {
    console.log(val);
} 
let arr11= [20,30,40,50,60];
function allSum(arr11) {
    let sum =0;
    arr11.forEach((value) => {
        sum = sum+value;
    })
    return sum;
}
let ans11= allSum(arr11);
console.log(ans11);