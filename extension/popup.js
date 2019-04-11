let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

window.onload = () => {
  fetch('https://delivery-group-order.herokuapp.com/')
      .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
              return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
              console.log(data);
            });

          }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
};