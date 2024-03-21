import inquirer from "inquirer";
let evenorodd = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter Your Name Then Answer The Question"
    }, {
        name: "num",
        type: "number",
        message: "Enter The Number For Checking Its Even Or Its Odd"
    }]);
// console.log(evenorodd)
if (evenorodd.num % 2 === 0) {
    console.log(evenorodd.name + " Your Number Is Even ");
}
else if (evenorodd.num % 3 === 0) {
    console.log(evenorodd.name + " Your Number Is Odd ");
}
else {
    (evenorodd.num === evenorodd.name);
    console.log(evenorodd.name + " Please Enter Valid Values ");
}
