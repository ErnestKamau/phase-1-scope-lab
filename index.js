// 1. Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// 2. upperCaseCustomerName() - modifies the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. setBestCustomer() - declares bestCustomer in global scope and assigns a value
function setBestCustomer() {
    bestCustomer = 'not bob';  // Note: no `var`, `let`, or `const` makes it global
}

// 4. overwriteBestCustomer() - overwrites the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer with const (can’t be reassigned)
const leastFavoriteCustomer = 'some initial value';

// 6. changeLeastFavoriteCustomer() - tries to reassign leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'a new customer';  // This will throw an error
}
