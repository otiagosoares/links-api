const express =  require('express');
const db = require('./models')
const authController = require('./conttrollers/auth');
const { urlencoded } = require('express');
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/auth', authController)

app.get('/', (req, res) => {
    return res.json('Api is runnibg...');
})


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Listen on port 3001')
    });
}).catch(err => {
    console.log('err', err)
});