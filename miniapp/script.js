const catalog = [
    {
        "name": "Кроссовки Supreme",
        "price": "120$",
        "img": "https://i.imgur.com/пример.jpg",
        "link": "https://t.me/Avenue07Avenue07Bot"
    },
    {
        "name": "Футболка Gucci",
        "price": "90$",
        "img": "https://i.imgur.com/пример2.jpg",
        "link": "https://t.me/Avenue07Avenue07Bot"
    }
];

const catalogDiv = document.getElementById('catalog');

catalog.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Цена: ${item.price}</p>
        <button onclick="window.open('${item.link}', '_blank')">Заказать</button>
    `;
    catalogDiv.appendChild(card);
});