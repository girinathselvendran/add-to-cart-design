const placeOrder = () => {
    alert("place order")
}

const inputCategory = document.querySelectorAll("input[type ='radio']");

const totalAmount = document.getElementById("total-amount")

const findSelectedList = () => {
    let selected = document.querySelector("input[name='cart-list']:checked");
    console.log("selected Id", selected.id)

    if (selected.id == "cart-list1") {
        let cartList = document.getElementById("color-and-size-pair1");
        cartList.className = "color-and-size"
        let cartList2 = document.getElementById("color-and-size-pair2");
        let cartList3 = document.getElementById("color-and-size-pair3");
        cartList2.className = "color-and-size display-none"
        cartList3.className = "color-and-size display-none"
    }

    if (selected.id == "cart-list2") {
        let cartList = document.getElementById("color-and-size-pair2");
        cartList.className = "color-and-size"

        let cartList1 = document.getElementById("color-and-size-pair1");
        let cartList3 = document.getElementById("color-and-size-pair3");
        cartList1.className = "color-and-size display-none"
        cartList3.className = "color-and-size display-none"
    }
    if (selected.id == "cart-list3") {
        let cartList = document.getElementById("color-and-size-pair3");
        cartList.className = "color-and-size"
        let cartList1 = document.getElementById("color-and-size-pair1");
        let cartList2 = document.getElementById("color-and-size-pair2");
        cartList1.className = "color-and-size display-none"
        cartList2.className = "color-and-size display-none"
    }
    
    totalAmount.innerHTML = `Total: <b>DKK: ${selected.value}</b>`
}

inputCategory.forEach(item => {
    console.log("item", item)
    item.addEventListener("change", findSelectedList);
})

findSelectedList();