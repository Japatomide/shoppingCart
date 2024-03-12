const cartItemsContainer = document.querySelector("#cart__items__container");
const displayCartTotal = document.querySelector('#display_cart_total')
const checkOutButton = document.querySelector('#check_out_btn')


// Cart Items
let cartItems = [
  {
    id: 1,
    name: "Samsung Galaxy",
    images:
      "https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/J/67343_1675784537.jpg",
    qty: 1,
    price: 2000,
  },
  {
    id: 2,
    name: "Iphone XR",
    images:
      "https://rukminim2.flixcart.com/image/416/416/jnj7iq80/mobile/y/q/d/apple-iphone-xr-mry52hn-a-original-imafa6zkfgwpnsgz.jpeg?q=70&crop=false",
    qty: 1,
    price: 2500,
  },
  {
    id: 3,
    name: "Tecno Pop 7",
    images:
      "https://www.3chub.com/cdn/shop/products/pop72023.png?v=1706257107&width=550",
    qty: 1,
    price: 4000,
  },
  {
    id: 4,
    name: "Oppo Reno 7 Pro",
    images: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-pro-r.jpg",
    qty: 1,
    price: 3200,
  },
  {
    id: 5,
    name: "Nokia",
    images:
      "https://www.pricepony.com.ph/blog/wp-content/uploads/2021/09/Nokia-X50-Pro-vs-768x402.jpg",
    qty: 1,
    price: 4500,
  },
];

// function to display cart items
const displayCartItems = () => {

    let productToDisplay = [];

  for (let index = 0; index < cartItems.length; index++) {
    const cartProducts = `
    <div id="cart__items__container" class="max-w-[600px] w-full">
          <!-- single cart product -->
          <div class="flex justify-between items-center shadow-md p-5">
            <div class="flex items-center gap-4">
              <img
                src="${cartItems[index].images}"
                alt="product image"
                class="w-10 rounded-md"
              />
              <div>
                <h2 class="font-bold text-3xl">${cartItems[index].name}</h2>
                <button
                  class="bg-red-500 text-white font-semibold p-2 rounded-md mt-2"
                  onclick="removeItemFromCart(${cartItems[index].id})"
                >
                  Delete
                </button>
              </div>
            </div>

            <div class="text-center">
              <p class="font-bold text-xl">${cartItems[index].price}</p>
              <button
                class="bg-green-500 text-white text-lg font-semibold p-2 rounded-md mt-2"
                onclick="increaseProductQuantity(${cartItems[index].id})"
              >
                +
              </button>
              <span class="font-bold text-lg m-5">${cartItems[index].qty}</span>
              <button
                class="bg-red-500 text-white text-lg font-semibold p-2 rounded-md mt-2"
                onclick="decreaseProductQuantity(${cartItems[index].id})")"
              >
                -
              </button>
            </div>
          </div>
    `;
    productToDisplay.push(cartProducts)
  }

  if(productToDisplay.length == 0) {
    cartItemsContainer.innerHTML = `<h1 class="text-center text-3xl font-semibold">Cart is empty.
    Please add a product 😁</h1>`
    displayCartTotal.textContent = 0;
    return;
  }

  cartItemsContainer.innerHTML = productToDisplay.join("");
}

displayCartItems();

// Function to increase product quantity
const increaseProductQuantity = (product_id) => {
  for (let index = 0; index < cartItems.length; index++) {
    if(cartItems[index].id === product_id) {
      cartItems[index].qty++;
    }
  }
  displayCartItems();
  calculateCartTotal()
};

// function to decrease product quantity
const decreaseProductQuantity = (product_id) => {
  for (let index = 0; index < cartItems.length; index++) {
    if (cartItems[index].id === product_id && cartItems[index].qty != 1) {
      cartItems[index].qty--;
    }
  }
  displayCartItems();
  calculateCartTotal()
};

// function to remove item from cart
const removeItemFromCart = (product_id) => {
  const productLeftInCart = [];
  for (let index = 0; index < cartItems.length; index++) {
    if (cartItems[index].id !== product_id) {
      productLeftInCart.push(cartItems[index])
    }
  }
  cartItems = productLeftInCart;
  displayCartItems()
  calculateCartTotal()
};

// function to calculate cart total
const calculateCartTotal = () => {
    let totalCost = 0;

    for (let index = 0; index < cartItems.length; index++) {
      totalCost += cartItems[index].price * cartItems[index].qty;

      displayCartTotal.textContent = totalCost;
    }
    return totalCost
}

checkOutButton.addEventListener('click', displayItemsToBeCheckedOut)
function displayItemsToBeCheckedOut() {
    console.log(cartItems);
    console.log(calculateCartTotal());
}