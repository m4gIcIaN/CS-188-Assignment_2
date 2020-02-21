// Class for Item.
class Item {
	constructor(itemID, name, description, price){
		this._itemId = itemID;
		this._name = name;
		this._description = description;
		this._price = price;
	}

	set itemId(ID){
		if (typeof ' ' === typeof ID){
			this._itemId = ID;
		} else {
			console.log('An Item\'s ID must be a string.');
		}
	}

	get itemId(){
		return `${this._itemId}`;
	}

	set name(name){
		if (typeof ' ' === typeof name){
			this._name = name;
		} else {
			console.log('An Item\'s name must be a string.');
		}
	}

	get name(){
		return `${this._name}`;
	}

	set description(description){
		if (typeof ' ' === typeof description){
			this._description = description;
		} else {
			console.log('An Item\'s description must be a string.');
		}
	}

	get description(){
		return this._description;
	}

	set price(price){
		if (typeof 9.99 === typeof price || typeof 5 === typeof price){
			this._price = price;
		} else {
			console.log("An Item\'s price must be a number.");
		}
	}

	get price(){
		if (typeof 9.99 === typeof this._price){
			return `$${this._price}`;
		} else {
			return `$${this._price}.00`;
		}
	}

	printValues(){
		console.log(`${this.itemID}\n${this.name}\n${this.desccription}\n${this.price}`);
	}
}

// Item Example.

const firstItem = new Item('<ID of ITEM>', 'Drake Sweatshirt', 'A sweatshirt', 59.99);
firstItem.printValues();
firstItem.itemId = '5555555';
firstItem.printValues();

const secondItem = new Item('53b', 'Drake Necklace', 'A necklace', 78.99);
secondItem.printValues();

// Items Array Class

class Items {
	constructor(){
		this._array = [];
	}

	add(itemObject){
		if (typeof new Item === typeof itemObject){
			this._array.push(itemObject);
		} else {
			console.log('The object that you are trying to add is not an Item.');
		}
	}

	removeByIndex(index){
		try {
			this._array = this._array.filter(function(element, index){
				return element != this._array[index];
			});
		} catch (error){
			console.log('Something went wrong, Inputted Index possibly does not exist.');
		}
	}

	removeByItemID(itemID){
		try {
			this._array = this._array.filer(function(element, itemID){
				return element.itemId != itemID;
			});
		} catch (error){
			console.log('Something went wrong, Inputted Item ID possibly does not exist.');
		}
	}

	get array (){
		return `${this._array}`;
	}
}

// Items Array Example.

const firstItems = new Items();
firstItems.add(firstItem);
firstItems.add(secondItem);
console.log(firstItems.array);
firstItems.removeByIndex(0);
firstItems.removeByItemID(secondItem.itemId);
console.log(firstItems.array);

// Error Class.

class Error {
	constructor(statusCode, error, message){
                this._statusCode = statusCode;
                this._error = error;
                this._message = message;
        }

	set statusCode(code){
                if (typeof 5 == typeof code){
                        this._statusCode = code;
                } else {
                        console.log('The status code must be an integer value.');
                }
        }

	get statusCode(){
                return `${this._statusCode}`;
        }

	set error(err){
                if (typeof ' ' == typeof err){
                        this._error = err;
                } else {
                        console.log('The error code must be a string value.');
                }
        }

	get error(){
                return `${this._error}`;
        }

	set message(msg){
                if (typeof ' ' == typeof msg){
                        this._message = msg;
                } else {
                        console.log('The message must be a string value.');
                }
        }

	get message(){
                return `${this._message}`;
        }

	printError(){
                console.log(`Status Code: ${this.statusCode}\nError: ${this.error}\nMessage: ${this.message}`);
        }
}

// Error Example.

const error = new Error(500, 'Unexpected Error', 'An unexpected error occurred while processing your request.');
error.printError();

// ItemNotFound Class.

class ItemNotFound extends Error{
	constructor(statusCode, error, message){
		super(statusCode, error, message);
	}
}

// ItemNotFound Example.

const itemError404 = new ItemNotFound(404, 'Item not Found', 'The Item could not be found.');
itemError404.printError();

// Customer Class.

class Customer {
	constructor(customerId, firstName, lastName, email, phoneNumber){
		this._customerId = customerId;
		this._firstName = firstName;
		this._lastName = lastName;
		this._email = email;
		this._phoneNumber = phoneNumber;
	}

	set customerId(custID){
		if (typeof ' ' == typeof custID){
			this._customerId = custID;
		} else {
			console.log('Customer ID must be a string value.');
		}
	}

	get customerId(){
		return `${this._customerId}`;
	}

        set firstName(firstN){
                if (typeof ' ' == typeof firstN){
                        this._firstName = firstN;
                } else {
                        console.log('First Name must be a string value.');
                }
        }

        get firstName(){
                return `${this._firstName}`;
        }

        set lastName(lastN){
                if (typeof ' ' == typeof lastN){
                        this._lastName = lastName;
                } else {
                        console.log('Last Name must be a string value.');
                }
        }

        get lastName(){
                return `${this._lastName}`;
        }

        set email(em){
                if (typeof ' ' == typeof em){
                        this._email = em;
                } else {
                        console.log('Email must be a string value.');
                }
        }

        get email(){
                return `${this._email}`;
        }

        set phoneNumber(phoneN){
                if (typeof ' ' == typeof phoneN){
                        this._phoneNumber = phoneN;
                } else {
                        console.log('Phone Number must be a string value.');
                }
        }

        get phoneNumber(){
                return `${this._customerId}`;
        }

	printValues(){
		console.log(`Customer ID: ${this.customerId}\nFirst Name: ${this.firstName}\nLast Name: ${this.lastName}\nEmail: ${this.email}\nPhone Number: ${this.phoneNumber}`);
	}
}

// Customer Example.

const customer = new Customer('55667', 'John', 'Jack', 'joja@gmail.com', '5153333333');
customer.printValues();

const customer2 = new Customer('76655', 'Jack', 'John', 'jajo@gmail.com', '5154444444');
customer2.printValues();

// Customers Class.

class Customers {
	constructor(){
                this._array = [];
        }

	add(itemObject){
                if (typeof new Customer === typeof customerObject){
                        this._array.push(customerObject);
                } else {
                        console.log('The object that you are trying to add is not a Customer.');
                }
        }

	removeByIndex(index){
                try {
                     	this._array = this._array.filter(function(element, index){
                                return element != this._array[index];
                        });
                } catch (error){
                        console.log('Something went wrong, Inputted Index possibly does not exist.');
                }
        }

	removeByCustomerID(customerID){
                try {
                     	this._array = this._array.filer(function(element, customerID){
                                return element.itemId != customerID;
                        });
                } catch (error){
                        console.log('Something went wrong, Inputted Customer ID possibly does not exist.');
                }
        }

	get array (){
                return `${this._array}`;
        }

}

// Customers Example.

const customers = new Customers();
customers.add(customer);
customers.add(customer2);
console.log(customers.array);

// CustomerNotFound Class.

class CustomerNotFound extends Error{
	constructor(statusCode, error, message){
		super(statusCode, error, message);
	}
}

// CustomerNotFound Example.

const customerNotFound = new CustomerNotFound('404', 'Customer Not Found', 'The Customer could not be found.');
customerNotFound.printError();

// Cart Class.

class Cart {
	constructor(ownedBy, dateCreated, datePurchased){
		this._ownedBy = ownedBy;
		this._dateCreated = dateCreated;
		this._datePurchased = datePurchased;
	}

	set ownedBy(owner){
		if (typeof new Customer == owner){
			this._ownedBy = owner;
		} else {
			console.log('Owner must be set to a Customer.');
		}
	}

	get ownedBy(){
		return `${this._ownedBy.firstName} ${this._ownedBy.lastName}`;
	}

	set dateCreated(date){
		if (typeof ' ' == typeof date){
			this._dateCreated = date;
		} else {
			console.log("Date must be a string.");
		}
	}

	get dateCreated(){
		return `${this._dateCreated}`;
	}

	set datePurchased(date){
		if (typeof ' ' == typeof date){
			this._datePurchased = date;
		} else {
			console.log("Date must be a string.")
		}
	}

	get datePurchased(){
		return `${this._datePurchased}`;
	}

	printCart(){
		console.log(`Owned By: ${this.ownedBy}\nDate Created: ${this.dateCreated}\nDate Purchased: ${this.datePurchased}`);
	}
}

// Cart Example.

const firstCart = new Cart(customer, '01/01/2020', '01/03/2020');
firstCart.printCart();

const secondCart = new Cart(customer2, '01/02/2020', '01/04/2020');
secondCart.printCart();

// Carts Class.

class Carts {
        constructor(){
                this._array = [];
        }

	add(cartObject){
                if (typeof new Cart === typeof cartObject){
                        this._array.push(cartObject);
                } else {
                        console.log('The object that you are trying to add is not a Cart.');
                }
        }

	removeByIndex(index){
                try {
                     	this._array = this._array.filter(function(element, index){
                                return element != this._array[index];
                        });
                } catch (error){
                        console.log('Something went wrong, Inputted Index possibly does not exist.');
                }
        }

	get array (){
                return `${this._array}`;
        }
}

// Carts Example.

const aMegaCart = new Carts();
aMegaCart.add(firstCart);
aMegaCart.add(secondCart);
console.log(aMegaCart.array);

// CartNotFound Class.

class CartNotFound extends Error {
	constructor(statusCode, error, message){
		super(statusCode, error, message);
	}
}

// CartNotFound Example.

const cartNotFound = new CartNotFound(404, 'Cart not Found', 'The cart could not be found.');
cartNotFound.printError();

// CartItems Class.

class CartItems {
	constructor(belongsTo){
		this._belongsTo = belongsTo;
		this._items = [];
		this._quantities = [];
	}

	set belongsTo(cart){
		if (typeof new Cart == typeof cart){
			this._belongsTo = cart;
		} else {
			console.log('Owner must be a Cart.');
		}
	}

	get belongsTo(){
		return `${this._belongsTo.ownedBy}`;
	}

        add(itemObject, quantity){
                if (typeof new Item === typeof itemObject && typeof 5 === typeof quantity){
                        this._items.push(itemObject);
			this._quantities.push(quantity);
                } else {
                        console.log('The object that you are trying to add is not an item or a valid quantity.');
                }
        }

        removeByIndex(index){
                try {
                        this._items = this._items.filter(function(element, index){
                                return element != this._items[index];
                        });
			this._quantities = this._quantities.filter(function(element, index){
				return element != this._quantities[index];
			});
                } catch (error){
                        console.log('Something went wrong, Inputted Index possibly does not exist.');
                }
        }

        get array (){
		let stringToReturn = `${this.belongsTo}:`;
		for (let i = 0; i <= this._items.length; i++){
			stringToReturn = stringToReturn + `Item: ${this._items[i]}, Quantity: ${this._quantities[i]}\n`;
		}
                return stringToReturn;
        }
}

// CartItems Example.

const cartItem = new CartItems(firstCart);
cartItem.add(firstItem, 50);
cartItem.add(secondItem, 100);
console.log(cartItem.array);

// CartItemsNotFound Class.

class CartItemsNotFound extends Error {
	constructor(statusCode, error, message){
		super(statusCode, error, message);
	}
}

// CartItemsNotFound Example.

const cartItemsNotFound = new CartItemsNotFound(404, 'Cart Items not Found', 'The items in the cart could not be found.');
cartItemsNotFound.printError();

module.exports = Customer;
