//## Readline 
//## When you read an entire line (i.e.: readLine()), it reads from the current position until the beginning of the next line. 


//### Declare second integer, double, and String variables.
 
let i2
let d2
let s2
//### Read and save an integer, double, and String to your variables.

i2 = parseInt(readLine())
//  = 12 (with or wo parseInt)

d2 = parseFloat(readLine())
//  console.log(d2)    
//   = 4.0   (with or wo parseFloat)

s2 = readLine(s)                 
//    console.log(s2)    = 'the best place to learn and practice coding!'

//### Print the sum of both integer variables on a new line.

let sumI = i + i2
 console.log(sumI)       


//### Print the sum of the double variables on a new line.
``
let sumD = parseFloat(d + d2).toFixed(1)
 console.log(sumD)        

//### Concatenate and print the String variables on a new line

let concat = s + s2
 console.log(concat)       


//### The 's' variable above should be printed first.

}


//Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), 
//and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

// TIP%*MEAL/100 is how to get the percent of monies owed

let total_cost=meal_cost+(tip_percent*meal_cost/100)+(tax_percent*meal_cost/100)
// console.log(total_cost) = 15.36
let rounded_cost=Math.round(total_cost)
console.log(rounded_cost)
}