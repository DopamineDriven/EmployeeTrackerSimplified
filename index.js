const inquirer = require("inquirer");
const mysql = require("mysql");
let cTable = require("console.table");
let dbConstructor = require("./db");
//figlet utility


//connecting to database
const connection = new dbConstructor({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wordpass3!!!992",
    database: "employee_tracker_simplifieddb",
    multipleStatements: true
});

//getting all employees, querying employee
async function obtainAllEmployees () {
    console.log('\n');
    const query = `SELECT * FROM employee`;
    const populate = await connection.query(query);
    console.table(populate);
}















async function uiPrompt() {
    console.log('\n')
    return inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            //"View All Employees By Manager",
            "View All Departments",
            "View All Roles",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            //"Update Employee Manager",
            "Add Department",
            //"Remove Department",
            "Add Role",
            //"Remove Role",
            //"View Total Budget",
            //"View Total Utilized Budget By Department",
            "Exit"
        ]
    }
    )
};
  async function init () {
      let terminateCircuito = false
      while(!terminateCircuito) {
          const answer = await uiPrompt();
          switch(answer.action.toLowerCase()) {
              case "view all employees": {
                  await obtainAllEmployees();
                  break;
              }
              case "view all employees by department": {
                  await obtainEmployeesByDepartment();
                  break;
              }
              case "view all departments": {
                  await obtainAllDepartments();
                  break;
              }
              case "view all roles": {
                  await obtainAllRoles();
                  break;
              }
              case "add employee": {
                  const newHire = await obtainNewEmployeeInfo();
                  console.log(newHire);
                  await addEmployee(newHire);
                  break;
              }
              case "remove employee": {
                  const slashHire = await obtainRemoveEmployeeInfo();
                  await deleteEmployee(slashHire);
              }
              case "update employee role": {
                  const updateRole = await obtainUpdateEmployeeRole();
                  await obtainUpdateEmployeeRole(updateRole);
              }
              case "add department": {
                  const departmentAdd = await obtainDepartmentInfo();
                  await addDepartment(departmentAdd);
                  break;
              }
              case "add role": {
                  const roleAdd = await obtainRoleInfo();
                  await addRole(roleAdd);
                  break;
              }
              case "exit": {
                  terminateCircuito = true;
                  console.log("thank you for using employee tracker")
                  process.exit(0);
              }
          }
      }
  }

  //closing database connection upon exiting node CLI
  process.on("exit", async (x) => {
      await connection.close();
      return console.log(`exiting with ${x}`)
  });

  init();