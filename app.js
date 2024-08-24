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
    //Link mũ: https://www.adidas.com.vn/vi/mu_luoi_trai
    {// trong mảng data gồm các object, mỗi obj có 3 thuộc tính name, price, image
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eea3771cbcbe40b096b89326764b08df_9366/Mu_adidas_golf_x_Jay3lle_DJen_JF4006_01_standard.jpg", //Chính là src của ảnh. <img src="image/matrix-1999-1.jpg">
        id:1
    },
    {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/34463996419042dc91cd29a87a46b441_9366/Mu_Luoi_Trai_Vanh_Kep_DJen_IW8626_01_standard.jpg",
        id:2
    },
    {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b23e275101c4646931e878507c60a84_9366/Mu_Luoi_Trai_Code_Chaos_DJen_IS6578_01_standard.jpg",
        id: 3
    },
    {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23462e6258a0424c85d3e2c8284b41a1_9366/Mu_Luoi_Trai_Code_Chaos_trang_IS6577_01_standard.jpg",
        id: 4
    },
    {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa6c69e5f9a74d4b8413a7570c67c772_9366/Mu_Bong_Chay_Sieu_Nhe_Theu_Logo_Be_IY7766_01_standard.jpg",
        id: 5
    },
    {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/76eee5dd0abe4eee95e4550f5c94469f_9366/Mu_Snapback_Hoa_Tiet_Tour_Mau_xanh_da_troi_IW6734_01_standard.jpg",
        id: 6
    },
    {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6cbc7ddf0884eecb0a4df21014a1fdc_9366/Mu_Bong_Chay_San_Nha_Arsenal_DJo_IZ4387_01_standard.jpg",
        id: 7
    },
    {
        name: "ORANAGE LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b392f15dbe544b996427321c2e57861_9366/Mu_Luoi_Trai_Must_Haves_Be_IM5231_01_standard.jpg",
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


