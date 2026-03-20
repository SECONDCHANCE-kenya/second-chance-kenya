let cart = [];

function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(bag) {
  cart.push(bag);
  updateCart();
}

function goToCheckout() {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "checkout.html";
}

const phoneNumber = "2547XXXXXXXX";

fetch('bags.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products');

    data.forEach(bag => {
      const div = document.createElement('div');
      div.className = 'card';

      div.innerHTML = `
        ${bag.sold ? '<div class="sold">SOLD</div>' : ''}
       <img src="${bag.image}" onclick="openImage('${bag.image}')">
        <div class="card-content">
          <h3>${bag.name}</h3>
          <p class="price">KSh ${bag.price}</p>

          ${
            bag.sold
              ? '<button class="buy-btn" disabled>Sold</button>'
              : `<button class="buy-btn" onclick='addToCart(${JSON.stringify(bag)})'>
                   Add to Cart
                 </button>`
          }
        </div>
      `;

      container.appendChild(div);
    });
  });
function openImage(src) {
  const modal = document.createElement('div');
  modal.style.position = "fixed";
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.9)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";

  modal.innerHTML = `<img src="${src}" style="max-width:90%; max-height:90%;">`;

  modal.onclick = () => modal.remove();

  document.body.appendChild(modal);
}
