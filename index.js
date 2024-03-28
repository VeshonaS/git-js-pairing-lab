//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) { console.log(i) }
}

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++)
        if (i % 3 === 0) {
            console.log(i)
        }
}

// multiplesOfThree()

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++)
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
}
//multiplesOfThreeOrFive()

const untilNum = (int) => {
    for (let i = 1; i <= int; i++) {
        console.log(i)
    }
}
//untilNum()

const multiply = (num1, num2) => {
    return num1 * num2
}
//console.log(multiply(4, 5))





const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }
}
//console.log(add(5, 5))

const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}

//console.log(isNegative(1))
const triangleArea = (height , base )=>{
return (height * base ) / 2

}
// console.log (triangleArea(6 ,8))

const betweenTwentyAndFourty = (num) =>{
if (num > 20 && num < 40) {
    return true 
} else {
    return false 
}

}

//console.log(betweenTwentyAndFourty( 300))

const largest = (num1 , num2 , num3 ) => {
if (num1 > num2 && num2 > num3 ){
    return num1
} else if (num2 > num1 && num2 > num3){
    return num2 
} else if (num3 > num1 && num3 > num2 ) {
    return  num3
}
}

console.log(largest(5 , 9 , 4))