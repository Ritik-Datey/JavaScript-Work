const symbol=Symbol('age');

let obj={
    name : "Ritik Datey",
    [symbol] : 24,
    city : "Nagpur"
}

console.log(obj);