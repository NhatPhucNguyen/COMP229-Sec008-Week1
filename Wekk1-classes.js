class Employee {
    constructor(id, name, division) {
        this.id = id;
        this.name = name;
        this.division = division;
    }
    login = () => {
        console.log(this.name + " has logged in");
    };
}
let emp = new Employee(1, "jack", "hr");
emp.login();
function add(a,b){
    return a+b;
}
const numbers = [1,2,3,4]
console.log(Math.max(...numbers));