const express = require('express');
const morgan = require('morgan');
var cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/image', express.static('image'));
const PORT = 5001

app.get('/', (req, res) => {

})

//Đường dẫn API
app.use('/api/food', require('./controllers/FoodController'))
app.use('/api/drink', require('./controllers/DrinkController'))
app.use('/api/login', require('./controllers/LoginController'))
app.use('/api/register', require('./controllers/RegisterController'))
app.use('/api/managerproduct', require('./controllers/ManagerProductController'))
app.use('/api/headbar', require('./controllers/HeadBarController'))
app.use('/api/cart', require('./controllers/CartController'))
app.listen(PORT, () => {
    console.log(`API is running in Port ${PORT}`)
})
