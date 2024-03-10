document.addEventListener("DOMContentLoaded", function() {

    //Getting the HTML elements
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const shoppingCart = document.querySelector(".shopping-cart");

    //For each button it will append a new productInfo as a child in shoppingCart 
    addToCartButtons.forEach(button => {
        let count = 0;
        // creates a productInfo element with class name product-info
        const productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product-info");

        //if a button is clicked then it will create the productInfo and append it to shoppingCart as a child
        button.addEventListener("click", () => {
            count++;
            console.log(count);
            const parentProduct = button.closest(".product");
            const productName = parentProduct.querySelector("h3").textContent;
            const productPrice = parentProduct.querySelector(".price").textContent;
            var removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.setAttribute("class", "removeButton");
            productInfo.style.fontSize = '20px';

            //if removeButton is clicked then the quantity will decrease by 1, if quantity is 0 or less it will remove the productInfo from shoppingCart
            removeButton.addEventListener("click", () => {
                count--;
                console.log(count);
                if (count <= 0){
                    productInfo.remove()
                }
                else{
                    stringCount = count.toString();
                    productInfo.textContent = `${productName} - ${productPrice} - ${stringCount} `;
                    shoppingCart.appendChild(productInfo);
                    productInfo.appendChild(removeButton);
                }
            });

            //parse count into a string and append the button and product info into cart
            stringCount = count.toString();
            productInfo.textContent = `${productName} - ${productPrice} - ${stringCount} `;
            shoppingCart.appendChild(productInfo);
            productInfo.appendChild(removeButton);
            alert(`${productName} Added to Cart`);
        });
    });

});