// Do the operations needed
// expressed cleaned
function Do(op, first, second){
    switch (op){
        case "+":
            return Number(first) + Number(second)
        case "-":
            return Number(first) - Number(second)
        case "*":
            return Number(first) * Number(second)
        case "/":
            return Number(first) / Number(second)
        default:
            return 0
    }
}
export default Do;
