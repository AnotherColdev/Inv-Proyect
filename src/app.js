require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { engine } = require('express-handlebars');
const path = require('path');

// Registrar el helper "eq"
const Handlebars = require('handlebars');
Handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});

// Rutas
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const { isAuthenticated } = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', authRoutes);
app.use('/users', isAuthenticated, userRoutes);
app.use('/products', isAuthenticated, productRoutes);
app.use('/', dashboardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

