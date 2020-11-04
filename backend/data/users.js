import bcrypt from 'bcrypjs'

const users = [
    {
        name: 'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },

    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456',10)
    }
]