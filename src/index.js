const express =  require('express');
const authController = require('./conttrollers/auth');
const app = express();

app.use('/auth', authController)

app.get('/', (req, res) => {
    return res.json('Api is runnibg...');
})

app.listen(3001, () => {
    console.log('Listen on port 3001')
});