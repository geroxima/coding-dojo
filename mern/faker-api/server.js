const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

class User {
    constructor(){
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

app.get('/api/users/new', (req, res) => {
    const newUser = new User();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({ user: newUser, company: newCompany });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});