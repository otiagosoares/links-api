const express =  require('express');
const app = express();
const db = require('./models');
const authController = require('./conttrollers/auth');
const linkController = require('./conttrollers/link');
const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

app.use(response);
app.use(checkJwt);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);
app.use('/links', linkController);

app.get('/', (req, res) => {
    return res.json('Api is running...');
})


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Listen on port 3001')
    });
}).catch(err => {
    console.log('err', err)
});