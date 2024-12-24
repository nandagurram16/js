

const radius = [3,1,2,4,6,3]

const calculatearea = function (radius){
    return Math.PI *radius *radius
}

const circumfarance = function (radius){
    return Math.PI *radius
}

const diameter = function (radius){
    return 2 *radius
}

const calculate = function (radius,logic){
    const output = [];
    for ( let i=0; i<radius.length;i++){
    output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius,calculatearea))
console.log(calculate(radius,circumfarance))
console.log(calculate(radius,diameter))
