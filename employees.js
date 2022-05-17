function getEmployees(employees, salaries) {

    var employeesArr = [];

    employees.forEach(item_1 => {
        salaries.forEach(item_2 => {
            if (item_1.id === item_2.employeeId) {
                employeesArr.push({
                    name: item_1.name,
                    id: item_1.id,
                    salary: item_2.salary
                });
            }
        })
    });

    return employeesArr;
}

function Get(yourUrl) {
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function renderResults(employees) {
    for (let key of employees) {
        document.getElementById("demo").innerHTML +=
            "<span>Employee " + key.name + " ID " + key.id + " have salary " + key.salary + "." + "</span><br>"
    }
}

function abRmnSal(isASC) {

    this.salariesJSON = JSON.parse(Get("./fake-server/salaries.json"));
    this.employeesJSON = JSON.parse(Get("./fake-server/employees.json"));

    this.employees = getEmployees(this.employeesJSON, this.salariesJSON);

    if (isASC) {
        this.employees.sort((a, b) => a.salary - b.salary)
        renderResults(this.employees)
    } else {
        this.employees.sort((a, b) => b.salary - a.salary)
        renderResults(this.employees)
    }
}

// abRmnSal(true)      //uncomment for testing

module.exports.abRmnSal = abRmnSal