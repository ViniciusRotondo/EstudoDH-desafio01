const employees = require('./funcionarios')

const department = employees.filter(elemento => (elemento.department == "Financeiro"))

const aumDepartment = department.map(item => (item.salary * 0.5))

const soma = aumDepartment.reduce ((acum, num) => acum + num)



