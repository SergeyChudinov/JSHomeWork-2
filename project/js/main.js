class ProductList {
  constructor(container = '.products') {
    this.container = document.querySelector(container);
    this.goods = [];
    this.productObjects = [];

    this.fetchGoods();
    this.render();
    this.getTotalBasketPrice();
    console.log(this.getTotalBasketPrice());
    document.querySelector('.products-span').textContent = this.getTotalBasketPrice();
  }

  fetchGoods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  render() {
    for (const good of this.goods) { // {id: 1, title: 'Notebook', price: 20000}
      const productObject = new ProductItem(good); // ProductItem {id: 1, title: 'Notebook', price: 20000, img: 'https://via.placeholder.com/200x150'}
      console.log(productObject);
      this.productObjects.push(productObject);
      
      this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }
  /**
   * Считает и возвращает суммарную стоимость всех товаров.
   * @returns Суммарную стоимость всех товаров.
   */
  getTotalBasketPrice() {
    return this.goods.reduce((acc, good) => acc + good.price, 0);
    // let price = 0;
    // for (const good of this.goods) {
    //   price += good.price;
    // }
    // return price;
    
  }
}

class ProductItem {
  constructor(product) {  // , img='https://picsum.photos/200/150?random'
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = product.id;
  }

  getHTMLString() { // Тут в img  я добавил рандомные картинки!
    return `
      <div class="product-item" data-id="${this.id}">
        <img src="https://picsum.photos/200/150?random=${this.img}" alt="Some img">   
        <div class="desc">
          <h3>${this.title}</h3>
          <p>${this.price} \u20bd</p>
          <button class="buy-btn">Купить</button>
        </div>
      </div>`;
  }
}

new ProductList();

const basketTotalValueEl = document.querySelector('.basketTotalValue'); //Товаров в корзине на сумму: 0
const basketEl = document.querySelector('.basket'); // наш див с товарами

/**
 * Обработчик открытия корзины при клике на ее значок.
 */
document.querySelector('.btn-cart').addEventListener('click', () => {
  basketEl.classList.toggle('hidden');
});





// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];

// const renderProduct = (item, img='https://via.placeholder.com/200x150') => `
//   <div class="product-item">
//     <img src="${img}" alt="Some img">
//     <div class="desc">
//       <h3>${item.title}</h
//       <p>${item.price} \u20bd</p>
//       <button class="buy-btn">Купить</button>
//     </div>
//   </div>`;

// const renderProducts = list => {
//   document
//       .querySelector('.products')
//       .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };

// renderProducts(products);

