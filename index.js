// code your solution here
function superbowlWin(array){
   let something = array.find(element => element.result === 'W')
    console.log(something)
    if(!something){
        return undefined
    } else {
        return something.year
    }
    
}
