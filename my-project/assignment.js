const readline = require("readline");

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const productList = [];

/******************************************************** */
function addProduct() {
  readInterface.question(
    "กรุณาใส่รหัสสินค้า (ต้องไม่ซ้ำกัน) : ",
    (idProduct) => {
      if (productList.find((id) => id.id === idProduct)) {
        console.log("สินค้านี้มีอยู่ในระบบแล้ว กรุณากรอกรหัสใหม่");
        ask();
      } else {
        readInterface.question("กรุณาใส่ชื่อสินค้า : ", (nameProduct) => {
          readInterface.question("กรุณาใส่ราคาสินค้า : ", (priceProduct) => {
            if (priceProduct != Number(priceProduct)) {
              console.log("ใส่ราคาสินค้าไม่ถูกต้อง กรุณาใส่ราคาสินค้าเป็นตัวเลข");
            } else {
              console.log("สินค้าเพิ่มสำเร็จ!");
              productList.push({
                id: idProduct,
                name: nameProduct,
                price: Number(priceProduct),
              });
              showProduct();
            }
            ask();
          });
        });
      }
    }
  );
}
/******************************************************** */
function deleteProduct() {
  readInterface.question("กรุณาใส่ชื่อสินค้า : ", (nameProduct) => {
    if (productList.find((name) => name.name === nameProduct)) {
      const index = productList.findIndex((name) => name.name === nameProduct);
      productList.splice(index, 1);
      console.log("ลบสินค้าเรียบร้อย!");
      showProduct();
    } else {
      console.log("ลบสินค้าไม่สำเร็จ : ไม่พบชื่อสินค้านี้ในระบบ");
    }
    ask();
  });
}
/*********************************************************/
function showProduct() {
  if (productList.length === 0) {
    const productList = [{ id: null, name: null, price: null }];
    console.table(productList);
  } else {
    console.table(productList);
  }
}
/*********************************************************/
function ask(question) {
  readInterface.question(
    "กรุณาพิมพ์คำสั่ง ( add / delete / close ) : ",
    (answer) => {
      if (answer === "add") {
        addProduct();
      } else if (answer === "delete") {
        deleteProduct();
      } else if (answer === "close") {
        console.log("จบการทำงาน");
        readInterface.close();
        process.exit(0);
      } else {
        console.log("พิมพ์คำสั่งไม่ถูกต้อง กรุณาพิมพ์ใหม่");
      }
      ask(question);
    }
  );
}
ask();
