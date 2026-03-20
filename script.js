const phoneNumber = "2547XXXXXXXX"; // PUT YOUR NUMBER

fetch('bags.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');

    data.forEach(bag => {
      const message = `Hello, I want to buy: ${bag.name} for KSh ${bag.price}`;
      const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      const div = document.createElement('div');
      div.className = 'card';

      div.innerHTML = `
        ${bag.sold ? '<div class="sold">SOLD</div>' : ''}
        <img src="${bag.image}">
        <div class="card-content">
          <h3>${bag.name}</h3>
          <p class="price">KSh ${bag.price}</p>
          ${
            bag.sold
              ? '<button class="buy-btn" disabled>Sold Out</button>'
              : `<a href="${link}" target="_blank">
                   <button class="buy-btn">Buy Now</button>
                 </a>`
          }
        </div>
      `;

      container.appendChild(div);
    });
  });
