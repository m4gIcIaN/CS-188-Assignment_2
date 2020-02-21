const Hapi = require('hapi');
const uuid = require('uuid');
const Customer = require('./index.js');

const init = async () => {

	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	});

	const customerNihad = new Customer(uuid.v4(), 'Nihad', 'Dedic', 'nihad.dedic@drake.edu', '515-555-5555');
	const customerBint = new Customer(uuid.v4(), 'Bint', 'Baylor', 'bint.baylor@drake.edu', '515-777-7777');
	const customerWilly = new Customer(uuid.v4(), 'Willy', 'Wally', 'willy.wally@drake.edu', '515-999-9999');

	let customers = [customerNihad, customerBint, customerWilly];

	server.route({
		method: 'GET',
		path: '/customers',
		handler: (request, h) => {
			return customers;
		}
	});

	server.route({
		method: 'GET',
		path: '/customers/{customerId}',
		handler: (request, h) => {
			const {customerId} = request.params;
			const customer = customers.find(cust) => (cust.customerId === customerId);

			if(!customer){
				return h.response().code(404);
			}

			return customer;
		}
	});

	server.route({
		method: 'GET',
		path: '/customers',
		handler: (request, h) => {
			const customer = request.payload;
			const ifCustomerExists = customers.find(cust) => (cust.customerId === customer.customerId);

			if (ifCustomerExists) {
				return h.response(ifCustomerExists).code(303);
			} else {
				customers.push(customer);
				return h.response(customer).code(201)
			}
		}
	});

	server.route({
		method: 'DELETE',
		path: '/customers/{customerId}',
		handler: (request, h) => {
			const {customerId} = request.params;
			const customer = customers.find(cust) => (cust.customerId === customerId);

			if (!customer){
				return h.response().code(404);
			}

			let newCustomers = [];

			customers.forEach((cust) => {
				if (cust.customerId !== customerId){
					newCustomers.push(cust);
				}
			});

			customers = newCustomers;

			return '';
		}
	});

	server.route({
		method: 'PUT',
		path: '/customers/{customerId}',
		handler: (request, h) => {
			const {customerId} =  request.params;
			const updatedCustomer = request.payload;

			if (customerId !== updatedCustomer.customerId){
				return h.response().code(409);
			}

			let newCustomers = [];

			customers.forEach((croc) => {
				if (cust.customerId === customerId){
					newCustomers.push(updatedCustomer);
				} else {
					newCustomers.push(cust);
				}
			});

			customers = newCustomers;

			return '';
		}
	});

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();