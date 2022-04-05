// Q1--->
// function counter(){
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());  // output = 1
// alert(counter());  // output = 2
// alert(counter());  // output = 3
// alert(counter());  // output = 4

// Q2--->



// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged? = 1
//   }
//   console.log(count); // What is logged?  =  0
// })();


  // Q3--->

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); //ouput= 3 (3 times )
//   }, 1000);
// }

// Write a code to calculate area of a rectangle using inner function. In this case outer 
// function should accept parameter length and inner function should accept parameter breadth.


// function outer() {
//     var l=20
//     function inner() {
//         let w=20
//         console.log(l*w)
//     }
//     return inner
// }
// var result=outer()
// result()

// Take a variable in outer function and create an inner function 
// to increase the counter every time it is called

// function outer() {
//     let count=0;
//         function inner() {
//             count++;
//             console.log(count);
//         }
//         return inner
//     }
//     var result=outer()
//     result()
//     result()

// Q--->




// var a = 12;
// (function () {
//   alert(a);
// })();
// //output: 12




// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
// //output: 12





var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg =  "+ outerArg + "\n" +
       " innerArg ="  + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// output:outerArg =  123
// innerArg =456
// outerVar = a
// innerVar = b
// globalVar = xyz