const { connectToDB, disconnectDB } = require('../../../mongoose');
const errors = require('./user.errors');
const User = require('./user.model');
const UserService = require('./user.services');


describe('User service', () => {
    describe('Create new user', () => {
        beforeEach(async () => { 
            await connectToDB();
            await User.deleteMany({});
            await disconnectDB();
        });
        it('should create if all attrs are provided', async () => {
            let context = {
                user: {
                    name: 'My Name',
                    email: 'myname@mydomain.com',
                    password: '123'
                }
            };
            let user = await new UserService().create(context);
            expect(user._id).toBeDefined();
            expect(user.name).toBe(context.user.name);
            expect(user.email).toBe(context.user.email);
            expect(user.hashed_password).toBeDefined();
        });
        it('should not create if no name provided', async () => {
            let context = {
                user: {
                    name: '',
                    email: 'myname@domain.com',
                    password: '123'
                }
            }
            try {
                await new UserService().create(context);
            } catch (err) {
                expect(err.message).toMatch(errors.invalidName.description);
            }
        });
        it('should not create if no email provided', async () => {
            let context = {
                user: {
                    name: 'My Name',
                    email: '',
                    password: '123'
                }
            }
            try {
                await new UserService().create(context);
            } catch (err) {
                expect(err.message).toMatch(errors.invalidEmail.description);
            }
        });
        it('should not create if no password provided', async () => {
            let context = {
                user: {
                    name: 'My Name',
                    email: 'myname@domain.com',
                    password: ''
                }
            }
            try {
                await new UserService().create(context);
            } catch (err) {
                expect(err.message).toMatch(errors.invalidPassword.description);
            }
        });
    });
});