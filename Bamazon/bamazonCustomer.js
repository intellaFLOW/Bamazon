var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: '',
     database: "bamazon"
});

connection.connect(function(err) {
     if (err) throw err;
     //console.log("connected as id " + connection.threadId);
     //console.log("connected to PORT 3306");
});

//create showProducts method connected to mysql db "bamazon"
function showProducts() {
     connection.query('SELECT * FROM products', function(err, products) {
     	if (err) throw err;
               console.log("Bamazon's products");
               for(var i = 0; i < products.length; i++) {
          	console.log("Item ID: " + products[i].item_id + " | Product: " + products[i].product_name + " | Department: " + products[i].dept_name + " | Price: " +  products[i].price + " | Quantity: " + products[i].available);
          }

          inquirer.prompt([

// Asks the user questions.
          	{
          		type: "input",
          		message: "Enter the Item ID of the product you would like to buy?",
          		name: "item_id"
          	},

               {
          		type: "input",
          		message: "How many do you want?",
          		name: "quantity"
          	}

//store all of the answers into an "order" object that inquirer makes for us.
          ]).then(function (order) {
                    var quantity = order.quantity;
                    var itemId = order.item_id;
                    connection.query('SELECT * FROM products WHERE item_id=' + itemId, function(err, selectedItem) {
                    	if (err) throw err;
                         if (selectedItem[0].available - quantity >= 0) {
                              console.log("Bamazon can complete your order of " + selectedItem[0].product_name + " for you!!");
                              console.log("We have " + selectedItem[0].available + " in stock.  You will recieve " + quantity + " of " + selectedItem[0].available + ".");
                              console.log("Bamazon Shine Members get 15% off your purchases, EVERYDAY! Your purchase total today is $" + (selectedItem[0].price * order.quantity) +  ". Thank you for your order!");
//  This is the code to remove the item from inventory.
                              connection.query('UPDATE products SET available=? WHERE item_id=?', [selectedItem[0].available - quantity, itemId],
                              function(err, products) {
                              	if (err) throw err;
// Runs the prompt again, so the user can keep shopping.
                                   showProducts();
// Ends the code to remove item from inventory.                                   
                              });  
                         }
                         else {
                              console.log("Sorry, Bamazon has " + selectedItem[0].available + " " + selectedItem[0].product_name + " in stock right now.  Please order a smaller amount");
                              showProducts();
                         }
                    });
          });
     });
}

showProducts();