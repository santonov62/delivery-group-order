const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

const data = [{
    name: "1111111111",
    product_id: 304117807,
    quantity: 1,
    s_id: 28451
}, {
    name: "2222222222",
    product_id: 303576260,
    quantity: 1,
    s_id: 28451
}];

app.get('/', function (req, res) {
    res.json(data);
});

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});