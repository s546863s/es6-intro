//    console.log(add (22, 4))


// function Declaration 

function add (num1, num2){
    return num1 + num2
}

   const result = add(22, 4)
   console.log(result)



//    console.log(add2(22, 4))


//    function expression 

const add2 = function(num1, num2){
    return num1 + num2;
}

const result2 = add(22, 4)
   console.log(result2)



//    Arrow Function

const add3 = (num1,num2) => num1 + num2;



const result3 = add3(22, 4)
   console.log(result3)


   const add4 = (num, num2) => num + num2;


   console.log(add4(3, 2))


   const multiply = (a, b , c) => a + b * c;

   console.log(multiply(1,3,5))

   const isEven = num => num % 2 === 0;

   console.log(isEven(98));

   const divide = (p, q) => p / q;

   console.log(divide(87, 99))

   const substection = (a, b) => a - b;

   console.log(substection(33, 3))



//    document.getElementById('btn').addEventListener('click', (event) => {
//     // console.log(event)
//    })


