const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

const data = [{
    address: "Рязань, улица Гоголя, 16",
    shop: {
        name: "Шашлычный дворик"
    },
    product_id: 304117807,
    quantity: 1,
    s_id: 28451,
    url: "https://ryazan.delivery-club.ru/srv/Shashlychnyj_dvorik_rzn/#projezd_Jablochkova8B/"
}, {
    address: "Рязань, улица Гоголя, 16",
    shop: {
        name: "Шашлычный дворик"
    },
    product_id: 304117807,
    quantity: 1,
    s_id: 28451,
    url: "https://ryazan.delivery-club.ru/srv/Shashlychnyj_dvorik_rzn/#projezd_Jablochkova8B/"
}];

app.get('/', function (req, res) {
    res.json(data);
});

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});