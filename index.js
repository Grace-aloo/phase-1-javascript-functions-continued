// code your solution here
function saturdayFun(activity = "roller-skate"){
    
    return (`This Saturday, I want to ${activity}!`)
}
console.log(saturdayFun("bathe my dog"))
let  mondayWork = function (activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
console.log(mondayWork("work from home"));
function wrapAdjective(we='*'){
    
    return function wrapper(me = "special"){
        
        return`You are ${we}${me}${we}!`
    }
    
}


console.log(wrapAdjective())
