// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function (parameter = "*") {
    return function (word = "special") {
        return `You are ${parameter}${word}${parameter}!`
    }

}