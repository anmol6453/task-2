const chocolates = [
    { name: 'Milk Chocolate', price: 2.50, image: 'img/MILK.jpg' },
    { name: 'Dark Chocolate', price: 3.00, image: 'img/DARK.jpg' },
    { name: 'White Chocolate', price: 2.75, image: 'img/WHITE.jpg' },
    { name: 'Dairy Milk', price: 3.50, image: 'img/DAIRY MILK.jpg' },
    { name: 'Kit Kat Classic', price: 3.50, image: 'img/KITKAT.jpg' },
    { name: 'Milky Bar', price: 3.50, image: 'img/MILKYBAR.jpg' },
    { name: 'Nestle Classic', price: 3.50, image: 'img/NESTLE.jpg' },
    { name: 'Kit Kat Rich Chocolate', price: 3.50, image: 'img/KITKAT-RC.jpg' },
    { name: 'Cadbary Silk Chocolate', price: 3.50, image: 'img/SILK.jpg' },
    { name: 'Cadbary Nutties', price: 3.50, image: 'img/NUTTIES.jpg' },
    { name: 'Cadbary Silk Bubbly', price: 3.50, image: 'img/SILK-BUBBLY.jpg' },
    { name: 'Cadbary Five Star', price: 3.50, image: 'img/FIVE-STAR.jpg' },
];

let selectedChocolates = [];

function renderChocolates() {
    const chocolatesDiv = document.getElementById('chocolates');
    chocolatesDiv.innerHTML = '';

    chocolates.forEach(chocolate => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = chocolate.price;
        checkbox.id = chocolate.name;
        checkbox.addEventListener('change', updateSummary);

        const label = document.createElement('label');
        label.innerHTML = `<img src="${chocolate.image}" alt="${chocolate.name}" class="chocolate-img"> ${chocolate.name} - $${chocolate.price.toFixed(2)}`;
        label.setAttribute('for', chocolate.name);

        const div = document.createElement('div');
        div.classList.add('chocolate');
        div.appendChild(checkbox);
        div.appendChild(label);

        chocolatesDiv.appendChild(div);
    });
}

function updateSummary() {
    selectedChocolates = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(checkbox => ({ name: checkbox.id, price: parseFloat(checkbox.value) }));

    const totalItemsSpan = document.getElementById('totalItems');
    const totalPriceSpan = document.getElementById('totalPrice');

    const totalItems = selectedChocolates.length;
    const totalPrice = selectedChocolates.reduce((total, chocolate) => total + chocolate.price, 0);

    totalItemsSpan.textContent = totalItems;
    totalPriceSpan.textContent = totalPrice.toFixed(2);

    if (totalItems > 8) {
        alert('Warning: Maximum 8 chocolates allowed in the custom pack.');
        this.checked = false;
        updateSummary();
    }
}

function checkout() {
    alert('Checkout - Total Price: $' + selectedChocolates.reduce((total, chocolate) => total + chocolate.price, 0).toFixed(2));
}

window.onload = function () {
    renderChocolates();
};
