const placeOrder = () => {
    alert("place order Successfully")
}

const inputFields = document.querySelectorAll("input[type ='radio']");

const totalAmount = document.getElementById("total-amount")

const findSelectedList = () => {
    let selected = document.querySelector("input[name='cart-list']:checked");

    if (selected.id == "cart-list1") {
        let cartList1 = document.getElementById("color-and-size-pair1");
        let cartList2 = document.getElementById("color-and-size-pair2");
        let cartList3 = document.getElementById("color-and-size-pair3");

        cartList1.classList.remove("display-none");
        cartList2.classList.add("display-none");
        cartList3.classList.add("display-none");
    }

    if (selected.id == "cart-list2") {
        let cartList1 = document.getElementById("color-and-size-pair1");
        let cartList2 = document.getElementById("color-and-size-pair2");
        let cartList3 = document.getElementById("color-and-size-pair3");

        cartList1.classList.add("display-none");
        cartList2.classList.remove("display-none");
        cartList3.classList.add("display-none");
    }

    if (selected.id == "cart-list3") {
        let cartList1 = document.getElementById("color-and-size-pair1");
        let cartList2 = document.getElementById("color-and-size-pair2");
        let cartList3 = document.getElementById("color-and-size-pair3");

        cartList1.classList.add("display-none");
        cartList2.classList.add("display-none");
        cartList3.classList.remove("display-none");
    }

    totalAmount.innerHTML = `Total: <b>DKK: ${selected.value}</b>`
}

inputFields.forEach(item => {
    item.addEventListener("change", findSelectedList);
})

findSelectedList();
