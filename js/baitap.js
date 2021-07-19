// THÊM SỐ
document.getElementById("themSo").addEventListener("click", themSo);
var arr = [];
function themSo() {
    var number = +document.getElementById("number").value;
    arr.push(number);
    var mainArray = document.getElementById("mainArray")
    mainArray.innerHTML = arr.join(",");
    mainArray.style.display = "block"
}

// XOÁ SỐ
document.getElementById("xoaSo").addEventListener("click", xoaSo)
function xoaSo() {
    arr.length = 0
}

// 1.TỔNG SỐ DƯƠNG
document.getElementById("tongSoDuong").addEventListener("click", tongSoDuong)
function tongSoDuong() {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i]
        }
    }
    alert(`Tổng các số dương: ${total}`)
}

// 2. CÓ BAO NHIÊU SỐ DƯƠNG
document.getElementById("soDuong").addEventListener("click", soDuong)
var soDuong = []
function soDuong() {
    var soDuong = arr.filter(function (n) {
        return n > 0;
    });
    alert(`Số dương trong mảng: ${soDuong.length}`)
}

// 3. SỐ NHỎ NHẤT
document.getElementById("soNhoNhat").addEventListener("click", soNhoNhat)
function soNhoNhat() {
    var newArr = arr.sort()
    alert(`Số nhỏ nhất: ${newArr[0]}`)
}

// 4. SỐ DƯƠNG NHỎ NHẤT 
document.getElementById("soDuongNhoNhat").addEventListener("click", soDuongNhoNhat)
function soDuongNhoNhat() {
    var soDuong = arr.filter(function (n) {
        return n > 0;
    });
    var minArr = soDuong.sort()
    alert(`Số dương nhỏ nhất: ${minArr[0]}`)
}

// 5. TÌM SỐ CHẴN CUỐI CÙNG
document.getElementById("soChanCC").addEventListener("click", soChanCC)
function soChanCC() {
    var newArr = arr.filter(function (n) {
        return n % 2 === 0
    })
    if (newArr.length > 0) {
        alert(`Số chẵn cuối cùng: ${newArr[newArr.length - 1]}`)
    } else {
        alert(`Số chẵn cuối cùng: -1`)
    }
}

// 6. ĐỔI CHỖ 2 GIÁ TRỊ THEO VỊ TRÍ
document.getElementById("doiViTri").addEventListener("click", doiViTri)

function doiViTri() {
    var value1 = +document.getElementById("value1").value;
    var value2 = +document.getElementById("value2").value;
    var secondArray = document.getElementById("secondArray")

    var new1 = arr[value2];
    var new2 = arr[value1];
    for (var i = 0; i < arr.length; i++) {
        if (i === value1) {
            arr[i] = new1;
        }
        if (i === value2) {
            arr[i] = new2;
        }
    }
    secondArray.innerHTML = `${arr.join(",")}`;
    secondArray.style.display = "block"
}

// 7. SẮP XẾP MẢNG TĂNG DẦN
document.getElementById("sapXepMang").addEventListener("click", sapXepMang)
function sapXepMang() {
    var sapXepMang = arr.sort()
    alert(`${sapXepMang}`)
}

// 8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
document.getElementById("soNguyenToDT").addEventListener("click", soNguyenToDT)
function soNguyenToDT() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            alert(`Số nguyên tố đầu tiên: 2`);
            return;
        }
        else {
            for (var j = 2; j < Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    return false;
                }
                alert(`Số nguyên tố đầu tiên: ${arr[i]}`);
                return;
            }
        }
    }
}

// 9.TÌM SỐ NGUYÊN TRONG MẢNG
document.getElementById("themSoMoi").addEventListener("click", themSoMoi);
var arrSoThuc = [];
function themSoMoi() {
    var soThuc = +document.getElementById("soThuc").value;
    arrSoThuc.push(soThuc);
    var thirdArray = document.getElementById("thirdArray");
    thirdArray.innerHTML = arrSoThuc.join(",");
    thirdArray.style.display = "block";
}

// XOÁ SỐ
document.getElementById("xoaSoMoi").addEventListener("click", xoaSoMoi)
function xoaSoMoi() {
    arr.length = 0
}

// TÌM SỐ NGUYÊN TRONG MẢNG
document.getElementById("soNguyen").addEventListener("click", soNguyen)
function soNguyen() {
    var timSoNguyen = 0;
    for (var i = 0; i < arrSoThuc.length; i++) {
        if (arrSoThuc[i] % 1 === 0) {
            timSoNguyen += 1;
        }
    }
    alert(`Số nguyên trong mảng: ${timSoNguyen}`)
}

// 10. SO SÁNH SỐ LƯỢNG SỐ DƯƠNG VÀ SỐ ÂM
document.getElementById("soSanh").addEventListener("click", soSanh)
function soSanh() {
    var soDuong = arrSoThuc.filter(function(n){
        return n > 0
    })
    var soAm = arrSoThuc.filter(function(n){
        return n < 0
    })
    if(soDuong.length > soAm.length){
        alert(`Số lượng số dương (${soDuong.length}) nhiều hơn số âm (${soAm.length})`)
    }
    else if(soDuong.length < soAm.length){
        alert(`Số lượng số âm (${soAm.length}) nhiều hơn số dương (${soDuong.length})`)
    }
    else{
        alert(`Số lượng số dương (${soDuong.length}) bằng số âm (${soAm.length})`)
    }
}
