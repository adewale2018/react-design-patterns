const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
  id: '876',
  name: 'Adewale Shittu',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicyclying', 'video games'],
};

let users = [
  {
    id: '24434',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicyclying', 'video games'],
  },
  {
    id: '2094',
    name: 'Micheal Chindwin',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    id: '20012',
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
];

let products = [
  {
    id: '24434',
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD Screen, a great deal',
    rating: 4.5,
  },
  {
    id: '24094',
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pro use',
    rating: 3.8,
  },
  {
    id: '20984',
    name: 'Running Shoes',
    price: '$10',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  },
];

app.get('/current-user', (req, res) => {
  res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === id));
});

app.post('users/:id', (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id === id ? updatedUser : user));
  res.json(users.find((user) => user.id === id));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id === id));
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log('THE SERVER IS RUNNING @ 8080...')
})