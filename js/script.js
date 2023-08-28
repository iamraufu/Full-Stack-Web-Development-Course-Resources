function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value)
    let newProductCount = productCount
    if (isIncrease == true) {
        newProductCount = productCount + 1
    }
    else {
        newProductCount = productCount - 1
    }

    productInput.value = newProductCount

    let productTotal;
    if (product == 'phone') {
        productTotal = newProductCount * 130000
    }
    else {
        productTotal = newProductCount * 250000
    }
    document.getElementById(product + '-total').innerText = productTotal;
    handleCheckout()
}

function handleCheckout() {
    const phoneCount = getItems('phone')
    const laptopCount = getItems('laptop')

    const totalPrice = phoneCount * 130000 + laptopCount * 250000
    document.getElementById('sub-total').innerText = totalPrice

    const tax = Math.round(totalPrice*0.1)
    document.getElementById('tax-amount').innerText = tax

    const grandTotal = totalPrice + tax
    document.getElementById('grand-total').innerText = grandTotal
}

function getItems(product) {
    const productCount = parseInt(document.getElementById(product+'-count').value)
    return productCount
}
function checkout(){
    alert("Thanks for purchasing with us")
    location.reload()
}