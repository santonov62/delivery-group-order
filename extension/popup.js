window.onload = async () => {
    showSpinner();
    const orders = await loadOrders();
    renderOrders(orders);
    hideSpinner();
};

const renderOrders = (orders = []) => {
    const ul = document.querySelector('#orders ul');
    orders.forEach((order) => {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `${order.name}`;
    });
};

const loadOrders = () => {
    return fetch('https://delivery-group-order.herokuapp.com/')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                return response.json();
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
};

const showSpinner = () => {
    const spinner = document.querySelector(`.loader`);
    spinner.classList.add(`show`);
};

const hideSpinner = () => {
    const spinner = document.querySelector(`.loader`);
    spinner.classList.add(`hide`);
};