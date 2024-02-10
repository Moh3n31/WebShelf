function infoChanger(id, index) {
    let onElement = document.getElementById("info-on");
    let offElement = document.getElementById("info-off");
    let infoBoxSum = document.getElementById("info-box-sum");
    let infoBoxThings = document.getElementById("info-box-things");
    
    if(id=="info-off") {
        onElement.id = "info-off";
        offElement.id = "info-on";
        infoBoxSum.style.zIndex = 2;
        infoBoxThings.style.zIndex = -1;

        if (index==1) {
            infoBoxSum.style.zIndex = 1;
            infoBoxThings.style.zIndex = -1;
        }
        else if (index==2) {
            infoBoxSum.style.zIndex = -1;
            infoBoxThings.style.zIndex = 1;
        }
    }

}

function toPurchase () {
    let purchaseBox = document.getElementById ("purchase-section");
    let purchaseButton = document.getElementById ("purchase-button");
    let adjustNumber = document.getElementById ("number-section");
    let numberElement = document.getElementById ("number-box");

    purchaseButton.style.backgroundColor = "rgb(75, 146, 75)";

    setTimeout(() => {
        purchaseBox.style.zIndex = -1;
        adjustNumber.style.zIndex = 1;
        numberElement.innerText = 1;
    }, 100)
}

function priceUpdate (number, action) {
    let discountElement = document.getElementById ("discount-price");
    let fullElement = document.getElementById ("full-price");
    let fullPrice = Number (fullElement.innerHTML);
    let discountPrice = Number (discountElement.innerHTML);

    if ((number > 1) & (action === '+')) {
        number -= 1;

        fullPrice += (fullPrice/number);
        discountPrice += (discountPrice/number);
  
        fullPrice = Number(fullPrice.toFixed(2));
        discountPrice = Number(discountPrice.toFixed(2));

        fullElement.innerText = fullPrice;
        discountElement.innerText = discountPrice;

    }
    else if ((number > 0) & (action === '-')) {
        number += 1; 
        fullPrice -= (fullPrice/number);
        discountPrice -= (discountPrice/number);
  
        fullPrice = Number(fullPrice.toFixed(2));
        discountPrice = Number(discountPrice.toFixed(2));

        fullElement.innerText = fullPrice;
        discountElement.innerText = discountPrice;
    }
    else if (number == 0) {
        let purchaseBox = document.getElementById ("purchase-section");
        let purchaseButton = document.getElementById ("purchase-button");
        let adjustNumber = document.getElementById ("number-section");

        purchaseBox.style.zIndex = 1;
        adjustNumber.style.zIndex = -1;

        purchaseButton.style.backgroundColor = "rgb(88, 172, 88)";
    }
}

function adjustNumber(action) {
    let numberElement = document.getElementById ("number-box");
    let number = Number (numberElement.innerText);

    switch (action) {
        case '+':
            number += 1;
            break;
        case '-':
            if(number == 0)
                return;
            else
                number -= 1;    
                break;
    }

    numberElement.innerText = number;
    priceUpdate (number, action);
}