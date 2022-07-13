function clickButton1() {
    // B1: lấy dữ liệu trong thẻ input
    let value1 = document.getElementById("view").value;
    // B2: Cộng dữ liệu đã lấy với chuỗi tương  ứng + 1
    value1 = value1+"1";
    // B3: Gán lại dữ liệu vào ô input
    document.getElementById("view").value = value1;
}
function clickButton2() {
    // B1: lấy dữ liệu trong thẻ input
    let value1 = document.getElementById("view").value;
    // B2: Cộng dữ liệu đã lấy với chuỗi tương  ứng + 1
    value1 = value1+"2";
    // B3: Gán lại dữ liệu vào ô input
    document.getElementById("view").value = value1;
}
function clickButton(number){
    // // B1: lấy dữ liệu trong thẻ input
    // let value1 = document.getElementById("view").value;
    // // B2: Cộng dữ liệu đã lấy với chuỗi tương  ứng + 1
    // value1 = value1+number;
    // // B3: Gán lại dữ liệu vào ô input
    // document.getElementById("view").value = value1;
    document.getElementById("view").value += number;
}

function getResult() {
    // b1: Lấy dữ liệu ở thẻ input
    let value1 = document.getElementById("view").value;
    // B2: gọi hàm eval để tính toán
    let result = eval(value1);
    // B3: Gán kết quả vào input
    document.getElementById("view").value = result;
}
