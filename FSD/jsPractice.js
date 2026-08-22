// ---------------------------- ques1-------------------------------------
//Convert names to uppercase["alice", "bob", "charlie"] → ["ALICE", "BOB", "CHARLIE"] 

const names =["alice" , "bob","charlie"];
const result = names.map(name => name.toUpperCase());
console.log(result);

// ---------------------------- ques2-------------------------------------
// Get names of people older than 18
// const users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 17 },
//   { name: "Alex", age: 32 },
//   { name: "Mia", age: 15 }];
// → ["John", "Alex"]

const users=[
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alex", age: 32 },
  { name: "Mia", age: 15 }
];

const ans = users.filter(str => str.age >18).map(str=>str.name);
console.log(ans);


//---------------------------- ques3-------------------------------------
//Calculate total price of products in cart
// const cart = [
//   { name: "Laptop", price: 1200 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 80 }];
// → 1305

const cart = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 }
];

const total = cart.reduce((accumulator,product) => {
  return accumulator + product.price;
}, 0);
console.log(total);

//---------------------------- ques4-------------------------------------
// Get full names
// const people = [
//   { first: "John", last: "Doe" },
//   { first: "Anna", last: "Smith" }];
// → ["John Doe", "Anna Smith"]

const people = [
  { first: "John", last: "Doe" },
  { first: "Anna", last: "Smith" }
];

const ans1  =people.map(per =>per.first +" "+ per.last);
console.log(ans1);

//---------------------------- ques5-------------------------------------
//Get expensive in-stock products names (price > 1000 and inStock)
// const products = [
//   { name: "iPhone 14", price: 1200, inStock: true },
//   { name: "MacBook", price: 1800, inStock: false },
//   { name: "AirPods", price: 250, inStock: true },
//   { name: "iPad Pro", price: 1100, inStock: true }];
// → ["iPhone 14", "iPad Pro"]

const products = [
  { name: "iPhone 14", price: 1200, inStock: true },
  { name: "MacBook", price: 1800, inStock: false },
  { name: "AirPods", price: 250, inStock: true },
  { name: "iPad Pro", price: 1100, inStock: true }
];

const result1 = products.filter(product => product.price >1000 && product.inStock).map(product => product.name);
console.log(result1);

//---------------------------- ques6-------------------------------------
// Get names of students who scored above 80 and calculate their average score
// const students = [
//   { name: "Riya", score: 92 },
//   { name: "Aman", score: 78 },
//   { name: "Sneha", score: 88 },
//   { name: "Karan", score: 65 },
//   { name: "Priya", score: 95 }];→ ["Riya", "Sneha", "Priya"] and average = 91.67

const students = [
  { name: "Riya", score: 92 },
  { name: "Aman", score: 78 },
  { name: "Sneha", score: 88 },
    { name: "Karan", score: 65 },
    { name: "Priya", score: 95 }];

const avg = students.filter(student => student.score >80);
const scores = avg.map(student => student.score);
const average = scores.reduce((accumulator,score) => accumulator +score ,0)/scores.length;
console.log(average);
console.log(average.toFixed(2));


//---------------------------- ques7-------------------------------------
// Calculate total cost after applying 20% discount on all items that cost more than 1500
// const items = [
//   { name: "Smartphone", price: 32000 },
//   { name: "Charger", price: 1200 },
//   { name: "Headphones", price: 4500 },
//   { name: "Power Bank", price: 1800 }
// ];
// → totalAfterDiscount = 30640


const items =[
  { name: "Smartphone", price: 32000 },
  { name: "Charger", price: 1200 },
  { name: "Headphones", price: 4500 },
  { name: "Power Bank", price: 1800 }
];

const totalAfterDiscount = items.filter(item => item.price >1500).reduce((accumulator,item)=>accumulator + item.price *0.8,0);
console.log(totalAfterDiscount);

//---------------------------- ques8-------------------------------------
// Get full product names with brand and calculate total stock value (price × quantity)
// const products = [
//   { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
//   { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
//   { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
// ]; 
// → ["Samsung S23", "Apple iPhone 14", "OnePlus Nord 3"] and totalValue = 794000

const products1 = [
  { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
  { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
  { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
];

const fullNames = products1.map(product => product.brand + " " + product.model);
const totalValue = products1.reduce((accumulator,product) => accumulator + product.price * product.quantity,0);
console.log(fullNames);
console.log(totalValue);

//---------------------------- ques9-------------------------------------
// Get names of employees who work in "Engineering" department and have salary > 1200000, then find total salary
// const employees = [
//   { name: "Vikram", department: "Engineering", salary: 1800000 },
//   { name: "Neha", department: "Marketing", salary: 950000 },
//   { name: "Arjun", department: "Engineering", salary: 1350000 },
//   { name: "Pooja", department: "Engineering", salary: 980000 }
// ];

const employees =[
  { name: "Vikram", department: "Engineering", salary: 1800000 },
  { name: "Neha", department: "Marketing", salary: 950000 },
  { name: "Arjun", department: "Engineering", salary: 1350000 },
  { name: "Pooja", department: "Engineering", salary: 980000 }
];

const engineeringEmployees = employees.filter(employee => employee.department === "Engineering" && employee.salary > 1200000);
const employeeNames = engineeringEmployees.map(employee => employee.name);
const totalSalary = engineeringEmployees.reduce((accumulator,employee) => accumulator + employee.salary,0);
console.log(employeeNames);
console.log(totalSalary);

//---------------------------- ques10-------------------------------------
// Get titles of completed high-priority tasks and create one comma-separated string
// const tasks = [
//   { title: "Database Migration", priority: "high", completed: true },
//   { title: "UI Redesign", priority: "medium", completed: true },
//   { title: "API Testing", priority: "high", completed: false },
//   { title: "Security Audit", priority: "high", completed: true }
// ];
// → "Database Migration, Security Audit"
const tasks = [
  { title: "Database Migration", priority: "high", completed: true },
  { title: "UI Redesign", priority: "medium", completed: true },
  { title: "API Testing", priority: "high", completed: false },
  { title: "Security Audit", priority: "high", completed: true }
];
const completedHighPriorityTasks = tasks.filter(task => task.priority === "high" && task.completed);
const taskTitles = completedHighPriorityTasks.map(task => task.title).join(", ");
console.log(taskTitles);

//---------------------------- ques11-------------------------------------
// Filter products that are in stock, apply 15% discount, then calculate final cart total
// const cart = [
//   { name: "Monitor", price: 14500, inStock: true },
//   { name: "Keyboard", price: 3200, inStock: false },
//   { name: "Mouse", price: 1800, inStock: true },
//   { name: "Webcam", price: 4200, inStock: true }
// ];
// → totalAfterDiscount = 19240

const cart1 = [
  { name: "Monitor", price: 14500, inStock: true },
  { name: "Keyboard", price: 3200, inStock: false },
  { name: "Mouse", price: 1800, inStock: true },
  { name: "Webcam", price: 4200, inStock: true }
];

const totalAfterDiscount1 = cart1.filter(item => item.inStock).reduce((accumulator,item) => accumulator + item.price * 0.85,0);
console.log(totalAfterDiscount1);

//---------------------------- ques12-------------------------------------
// Get names (in uppercase) of users who are active and above 21 years old, then count them
// const users = [
//   { name: "rahul", age: 19, active: true },
//   { name: "simran", age: 24, active: true },
//   { name: "aditya", age: 32, active: false },
//   { name: "kavya", age: 22, active: true }
// ];
// → ["SIMRAN", "KAVYA"] and count = 2

const users1 = [
  { name: "rahul", age: 19, active: true },
  { name: "simran", age: 24, active: true },
  { name: "aditya", age: 32, active: false },
  { name: "kavya", age: 22, active: true }
];
const activeUsersAbove21 = users1.filter(user => user.active && user.age > 21);
const activeUserNames = activeUsersAbove21.map(user => user.name.toUpperCase());
const count = activeUserNames.length;
console.log(activeUserNames);
console.log(count);

//---------------------------- ques13-------------------------------------
// Get names of winning players (score > 150) with their score in format "Name (score)", and calculate total winning score
// const players = [
//   { name: "Rohit", score: 168 },
//   { name: "Virat", score: 142 },
//   { name: "Shubman", score: 185 },
//   { name: "Ishan", score: 134 }
// ];
// → ["Rohit (168)", "Shubman (185)"] and totalWinningScore = 353

const players = [
  { name: "Rohit", score: 168 },
  { name: "Virat", score: 142 },
  { name: "Shubman", score: 185 },
  { name: "Ishan", score: 134 }
];
const winningPlayers = players.filter(player => player.score > 150);
const winningPlayerNames = winningPlayers.map(player => `${player.name} (${player.score})`);
const totalWinningScore = winningPlayers.reduce((accumulator, player) => accumulator + player.score, 0);
console.log(winningPlayerNames);
console.log(totalWinningScore);


