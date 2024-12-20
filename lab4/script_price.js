async function fetchPrices() {
    try {
        const response = await fetch('http://localhost:8000/price');

        if (!response.ok) {
            if (response.status === 404) {
                alert('Сервер не найден (404)');
            } else if (response.status === 500) {
                alert('Ошибка на сервере (500)');
            } else {
                alert(`Произошла ошибка: ${response.statusText}`);
            }
        }

        const data = await response.json();

        if(!data){
            alert('Данные пусты!');
        }

        showPrices(data);

    } catch (error) {
        alert('Произошла ошибка: ' + error);
    }
}

function showPrices(prices) {
    const price_list= document.getElementById('price_list');
    price_list.innerHTML = '';

    prices.data.forEach(price => {
        const price_item = document.createElement('span');
        const price_number = document.createElement('span');

        price_item.classList.add('price_item');
        price_number.classList.add('price_number');

        price_list.appendChild(price_item);
        price_item.innerHTML = price.name;

        price_item.appendChild(price_number);
        price_number.innerHTML = price.price;
    });
}

document.addEventListener("DOMContentLoaded", fetchPrices);