fetch('bags.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');

    data.forEach(bag => {
      const div = document.createElement('div');
      div.className = 'card';

      div.innerHTML = `
        <img src="${bag.image}">
        <div class="card-content">
          <h3>${bag.name}</h3>
          <p class="price">KSh ${bag.price}</p>
        </div>
      `;

      container.appendChild(div);
    });
  });
