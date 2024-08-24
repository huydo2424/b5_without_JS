//localStorage.removeItem('userAccount_key');
//localStorage.removeItem('giohang');
let tk = localStorage.getItem('userAccount_key');
if (!tk) {
    alert("Xin lổi!")
    let userAccount = { //Tạo object lưu trữ tài khoản
        acc: [ //trong thuộc tính acc là một mảng
            {
                id: 1,
                name: "hee", //có các obj với các thuộc tính là name và pwd
                pwd: "hee",

         
            },
            {
                id: 2,
                name: "hii",
                pwd: "hii"
            },
        ]
    }
    localStorage.setItem('userAccount_key', JSON.stringify(userAccount));
}

let products = [ // Gồm thuộc tính data, thuộc tính này có kiểu "mảng"
    {// trong mảng data gồm các object, mỗi obj có 3 thuộc tính name, price, image
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/matrix-1999-1.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:1
    },
    {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Raeda-Deck.jpg",
        id:2
    },
    {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Musty-Deck.jpg",
        id: 3
    },
    {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Tristique-deck.jpg",
        id: 4
    },
    {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Fied-Trip-deck.jpg",
        id: 5
    },
    {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-5.jpg",
        id: 6
    },
    {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-1.jpg",
        id: 7
    },
    {
        name: "ORANAGE LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-2.jpg",
        id: 8
    },
];

console.log(products)

for (let product of products) { // cú pháp chèn biến ${biến}
    let card = /*html*/ `
  <div class="card">
    <div class="image-container">
      <img src="${product.image}" /> 
    </div> 
    <div class="container">
      <div class="product-name">
        <h5>${product.name}</h5> 
        <h6>Price: ${product.price}</h6>
      </div>
      <button onclick="checktoAddCart(${product.id})">Add to cart</button> 
    </div>
  </div>
  `; // function addToCart (ID) {}
    document.getElementById("products").innerHTML += card;
}


