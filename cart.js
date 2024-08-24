//// JavaScript source code
function checktoAddCart(productID){
    let cur = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [];
    if (cur.length >0){ //Kiểm tra người dùng
        let userID = cur[0].id
            ? cur[0].id
            : 0;
        if (userID>0){
            addToCart(userID,productID); // Lấy ID người dùng và ID sản phẩm
        } else {
            alert("Lỗi thêm giỏ hàng! Bạn cần đăng nhập lại!");
            console.log("cur" + cur.length)
            console.log("cur[] " +cur)
            console.log(userID);
        }
    } else {
        alert("Bạn cần đăng nhập để thêm giỏ hàng!");
    }
    
}
function addToCart(userID,productID) {
    let cart = localStorage.getItem("giohang") //Khai báo biến cart = định nghĩa dữ liệu giỏ hàng
        ? JSON.parse(localStorage.getItem("giohang")) //Nếu giỏ hàng tồn tại thì trả về mảng cart với kiểu object
        : []; // Nếu giỏ hàng không có thì trả về mảng rỗng
    let dem = 0;
    if (cart.length == 0) { //Nếu mảng giỏ hàng có 0 phần tử thì
        cart.push({// Thêm mới 1 object (thêm mới 1 phần tử)
            userID: userID,
            id: productID, // ID phần tử
            quantity: 1, // Số lượng phần tử
        });
    }
    else { //nếu không (giỏ hàng đã có phần tử) thì
        for (let item of cart) { // Kiểm tra xem giỏ hàng có phần tử nào có mã giống phần tử mới thêm vào hay không
            if (item.id == productID && item.userID == userID) { // Nếu thêm trùng phần tử, sẽ báo đếm = 1
                dem = 1;
                alert("trùng");
            }   
        }
        if (dem == 1) { // nếu đếm = 1 (phần tử mới thêm trùng với phần tử đã có)
            for (let item of cart) { // tìm trong giỏ hàng
                if (item.id == productID && item.userID == userID) {// Xem phần tử trùng có mã là gì
                    item.quantity++;    // Tăng số lượng của phần tử đó lên 1 đơn vị
                }
            }
        }
        else { // Nếu không (chưa có phần tử nào trùng trong giỏ hàng)
            cart.push({ // Thì thêm mới mã và số lượng 1
                userID: userID,
                id: productID,
                quantity: 1,
            });
        }       
    }   
    localStorage.setItem("giohang", JSON.stringify(cart)); // Lưu lại dữ liệu vừa thêm mới
    update_noti_cart(); // Gọi hàm cập nhật số lượng giỏ hàng
}
function update_noti_cart() { // Khai sinh hàm cập nhật số lượng
    
    if (localStorage.getItem("giohang")) { // Nếu tồn tại dữ liệu giỏ hàng thì
        let cart = JSON.parse(localStorage.getItem("giohang")); // Ép kiểu giỏ hàng về kiểu object
        let sl = 0;
        let cur = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : [];
        let userID = 0;
        if (cur.length >0){
            let userIdCheck = cur[0].id
                ? cur[0].id
                : 0;
            userID = userIdCheck;
            
            for(let item of cart){
                if(item.userID ==userID){
                    sl++;
                }
            }
            let dem_phantu = document.getElementById("cart_count").innerText; // khai báo biến đếm phần tử bằng nội dung bên trong thẻ có ID là cart_count
            dem_phantu = sl; // Gán số lượng các phần tử trong giỏ hàng vào thẻ cart_count
            document.getElementById("cart_count").innerText = sl; // Gán trực tiếp
        } else {
            document.getElementById("cart_count").innerText = "";
        }
    }
 
}
update_noti_cart() //Gọi hàm cập nhật số lượng
