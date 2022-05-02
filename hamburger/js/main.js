// 3. * Некая сеть фастфуда предлагает несколько видов гамбургеров: Hamburger
// a. Маленький (50 рублей, 20 калорий).  small
// b. Большой (100 рублей, 40 калорий).  big
// Гамбургер может быть с одним из нескольких видов начинок (обязательно): stuffing
// a. С сыром (+10 рублей, +20 калорий). cheese
// b. С салатом (+20 рублей, +5 калорий). salad
// c. С картофелем (+15 рублей, +10 калорий). potato
// Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить
// майонезом (+20 рублей, +5 калорий). seasoning  mayonnaise
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно
// использовать примерную архитектуру класса со следующей страницы, но можно использовать
// и свою.
var menu = document.querySelectorAll('.menu')
menu.forEach(el => el.addEventListener('click', event => {
  event.target.classList.toggle('checked');
}))



document.querySelector('button').addEventListener('click', () => {
  let price = 0;
  let calories = 0;
  console.log(menu)
  
  for (const val of menu) {
    if(val.classList.contains('checked')) {
      price += +(val.getAttribute('data-price'));
      calories += +(val.getAttribute('data-calories'));
    }
    console.log(val)
  }

  // for(let i = 0;i < menu.length;i++){
  //   if(menu[i].classList.contains('checked')){
  //     price += +(menu[i].getAttribute('data-price'));
  //     calories += +(menu[i].getAttribute('data-calories'));
  //   }
  // }

  // for(let i = 0;i < menu.length;i++){
  //   if(menu[i].checked){
  //     price += parseFloat(menu[i].getAttribute('data-price'));
  //     calories += parseFloat(menu[i].getAttribute('data-calories'));
  //     console.log(price)
  //     console.log(calories)
  //   }
  // }
  document.querySelector('.price').innerHTML = price;
  document.querySelector('.calories').innerHTML = calories;

})