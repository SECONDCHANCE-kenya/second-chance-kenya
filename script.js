fetch('bags.json')
.then(res => res.json())
.then(data => {
const container = document.getElementById('products');

data.forEach(bag => {
const card = document.createElement('div');
card.className = 'card';

card.innerHTML = `
<img src="${bag.image}">
<div class="card-content">
<h3>${bag.name}</h3>
<p class="price">KSh ${bag.price}</p>
</div>
`;

container.appendChild(card);
});
});
