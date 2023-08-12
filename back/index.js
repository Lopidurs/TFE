const awsServerlessExpress = require('aws-serverless-express');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3001
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const db = require('./models')

// Routers
const GameRouter = require('./routes/Games');
app.use('/API/games', GameRouter);

const TypeRouter = require('./routes/Types');
app.use('/API/types', TypeRouter);

const KeyWordsRouter = require('./routes/KeyWords');
app.use('/API/keyWords', KeyWordsRouter);

const AwardsRouter = require('./routes/Awards');
app.use('/API/awards', AwardsRouter);

const UsersRouter = require('./routes/Users');
app.use('/API/users', UsersRouter);

const RentalsRouter = require('./routes/Rentals');
app.use('/API/rentals', RentalsRouter);



// if (env === 'development') {
//     db.sequelize.sync().then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server listening on ${PORT}`)
//         });
//     }).catch((err) => {
//         console.log(err)
//     })
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};




module.exports = app;