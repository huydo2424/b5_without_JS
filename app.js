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
//for (let items of products.data) { //Lặp lại tất cả những item trong object products với thuộc tính data vừa khai báo ở trên
//    let card = document.createElement("div") //sử dụng biến card: Tạo ra 1 thẻ div
//    card.classList.add("card") //Thẻ div đó có class là "card"

//    let imgContainer = document.createElement("div") // sd biến imgContainer để tạo thẻ div bao ngoài thẻ ảnh
//    imgContainer.classList.add("image-container") // Class của imgContainer là "image-container"

//    let image = document.createElement("img") // Tạo biến ảnh, tạo thẻ ảnh
//    image.setAttribute("src", items.image) //Gắn src cho thẻ ảnh là tên ảnh trong mảng data của product
//    imgContainer.appendChild(image) //Gắn image vừa tạo vào imgContainer (vào cuối)
//    card.appendChild(imgContainer) //Gắn imgContainer vừa tạo vào card (vào cuối)

//    let container = document.createElement("div") // Tạo biến container, tạo thẻ div
//    container.classList.add("container") // Class của thẻ là "container"

//    let name = document.createElement("h5"); // Tạo biến name, toạ thẻ h5
//    name.classList.add("product-name"); // Class của thẻ là "product-name"
//    name.innerText = items.name.toUpperCase(); // Gán text cho thẻ name là item.name của mảng data dưới dạng viết hoa
//    container.appendChild(name); //Gán name vào container (ở cuối)

//    let price = document.createElement("h6"); //Tạo biến price, tạo thẻ h6
//    price.innerHTML = "<b>Price:</b> " + items.price; //Tạo text bên trong thẻ là Price in đậm và giá có trong mảng data
//    container.appendChild(price);

//    let btn = document.createElement("button") //Tạo biến btn, tạo thẻ <button>
//    btn.setAttribute("onclick", "addToCart()") //Tạo thuộc tính onlclick="addToCart()" cho thẻ <button>
//    btn.innerHTML = "Thêm vào giỏ hàng" //Tạo text cho thẻ là "...
//    container.appendChild(btn) //Gán btn vào vị trí cuối của container
  
//    card.appendChild(container); //Gán container vào vị trí cuối của card
//    document.getElementById("products").appendChild(card); //gán card vào vị trí cuối của thẻ div có id là products
//}
//let userAccount = { //Tạo object lưu trữ tài khoản
//    acc: [] //trong thuộc tính acc là một mảng
//}
// Lưu vào localStorage với phương thức setItem:
//localStorage.setItem('userAccount_key', JSON.stringify(userAccount));

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
const handleAddToCartClicked = (productId) => {
    if (!localStorage.getItem("currentUser")) {
        alert("Please log in");
    } else {
        addToCart(productId);
    }
};
const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
};


