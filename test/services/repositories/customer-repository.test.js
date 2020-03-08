const uuid = require('uuid');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let firstCustomerId,
        secondCustomerId,
        expectedCustomerId,
        expectedFirstCustomer,
        expectedSecondCustomer;

    beforeEach(() => {
        firstCustomerId = '44ef41f4-485b-44d6-8635-7418e026be89';
        secondCustomerId = '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3';

        expectedFirstCustomer = {
            'customer_id': firstCustomerId,
        };
        expectedSecondCustomer = {
            'customer_id': secondCustomerId,
        };
    });

    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();
            const [actualFirstCustomer, actualSecondCustomer] = actualCustomers.rows;

            expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
            expect(actualSecondCustomer).toEqual(expectedSecondCustomer);
        });
    });

    describe('selectCustomerByCustomerId', () => {
        it('should return a specific customer by customerId', () => {
            const actualFirstCustomer = selectCustomerByCustomerId(firstCustomerId);

            expect(actualFirstCustomer).toEqual({
                'customer_id': expectedCustomerId
            });

            const actualSecondCustomer = selectCustomerByCustomerId(secondCustomerId);

            expect(actualSecondCustomer).toEqual({
                'customer_id': expectedCustomerId
            });
        });
    });
});
