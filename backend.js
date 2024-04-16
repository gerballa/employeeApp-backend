const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const {allEmployees} = require("./database");
const cors = require('cors')

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// enabling CORS for some specific origins only.
let corsOptions = {
    origin: ['http://localhost:4200', 'https://employee-management-app-1.web.app'],
}

app.use(cors(corsOptions))

// Define Swagger specification options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Employee API',
            version: '1.0.0',
            description: 'API for managing employees',
        },
    },
    apis: ['backend.js'], // Path to the API file(s)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Employee list kept in memory
let employees = allEmployees;

/**
 * @openapi
 * /employees:
 *   get:
 *     summary: Get all employees
 *     responses:
 *       200:
 *         description: Returns a list of employees
 */
app.get('/employees', (req, res) => {
    res.json(employees);
});

/**
 * @openapi
 * /employees/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Returns an employee
 *       404:
 *         description: Employee not found
 */
app.get('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (!employee) {
        return res.status(404).json({message: 'Employee not found'});
    }
    res.json(employee);
});

/**
 * @openapi
 * /employees:
 *   post:
 *     summary: Add a new employee / edit an existing employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: New employee created / updated
 *       404:
 *         description: Employee not found
 */
app.post('/employees', (req, res) => {
    const employee = req.body;
    // if (!name || !position body|| !department || !email || !phone || !hire_date || !salary || !address || !skills || !projects || !manager) {
    //     return res.status(400).json({ message: 'Incomplete employee information' });
    // }

    if (!!employee.id) {
        const oldEmployee = employees.find(old => old.id === employee.id)
        if (oldEmployee == null) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        oldEmployee.name = employee.name;
        oldEmployee.position = employee.position;
        oldEmployee.department = employee.department;
        oldEmployee.email = employee.email;
        oldEmployee.phone = employee.phone;
        oldEmployee.salary = employee.salary;

    } else {
        employee.id = employees.length + 1;
        employees.push(employee);
    }

    res.status(201).json(employee);
});

/**
 * @openapi
 * /managers:
 *   get:
 *     summary: Get all managers
 *     responses:
 *       200:
 *         description: Returns a list of managers
 */
app.get('/managers', (req, res) => {
    const managers = employees.filter(emp => emp.position.toLowerCase().includes('manager'));
    res.json(managers);
});

/**
 * @openapi
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 */
app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) {
        return res.status(404).json({message: 'Employee not found'});
    }
    employees.splice(index, 1);
    res.status(200).json({message: 'Employee deleted successfully'});
});


// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
