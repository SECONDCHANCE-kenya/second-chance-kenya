const phoneNumber = "254XXXXXXXXX"; // 🔥 PUT YOUR NUMBER HERE

fetch('bags.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');

    data.forEach(bag => {
      const card = document.createElement('div');
      card.className = 'card';

      const isSold = bag.sold === true;

      const message = `Hello, I want to buy: ${bag.name} for KSh ${bag.price}`;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      card.innerHTML = `
        ${isSold ? '<div class="sold">SOLD</div>' : ''}
        <img src="${bag.image}" alt="${bag.name}">
        <div class="card-content">
          <h3>${bag.name}</h3>
          <p class="price">KSh ${bag.price}</p>
          ${
            isSold
              ? '<button class="buy-btn" disabled>Sold Out</button>'
              : `<a href="${whatsappLink}" target="_blank">
                   <button class="buy-btn">Buy via WhatsApp</button>
                 </a>`
          }
        </div>
      `;

      container.appendChild(card);
    });
  });
