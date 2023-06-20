(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Header slider
    $('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    

    // Product Detail Slider
    $('.product-slider-single').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });
    
    
    // Brand Slider
    $('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Widget slider
    $('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });
    
    
    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);




    

    //add to cart
let carts = document.querySelectorAll('.product-action');
let cartss = document.querySelectorAll('.product-action1');
let cartsss = document.querySelectorAll('.product-action2');
let cartssss = document.querySelectorAll('.product-action3');
let products = [
    {
        name: 'Basic race suit',
        tag: 'product-1',
        price: 500,
        inCart: 0
    },
    {
        name: 'Female basic race suit',
        tag: 'product-2',
        price: 500,
        inCart: 0
    },
    {
        name: 'Fireproof race suit',
        tag: 'product-3',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Female fireproof race suit',
        tag: 'product-4',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Extreme race suit',
        tag: 'product-5',
        price: 5000,
        inCart: 0
    },
    {
        name: 'Extreme female race suit',
        tag: 'product-6',
        price: 5000,
        inCart: 0
    },
];

let products1 = [
    {
        name: 'Light Ferrari shoes',
        tag: '1.webp',
        price: 500,
        inCart: 0
    },
    {
        name: 'Basic puma motorsport shoes',
        tag: '2.jpg',
        price: 500,
        inCart: 0
    },
    {
        name: 'Heavy puma Ferrari shoes',
        tag: '3.webp',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Red Ferrari motorsport shoes',
        tag: '4.webp',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Black Ferrari motorsport shoes',
        tag: '5.jpg',
        price: 5000,
        inCart: 0
    },
    {
        name: 'Ultra lightweight Ferrari shoes',
        tag: '6.webp',
        price: 5000,
        inCart: 0
    },
];

let products2 = [
    {
        name: 'Yellow gloves',
        tag: '11.jpg',
        price: 500,
        inCart: 0
    },
    {
        name: 'Fireproof gloves',
        tag: '22.jpg',
        price: 500,
        inCart: 0
    },
    {
        name: 'F1 Ferrari gloves',
        tag: '33.jpg',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Pink gloves',
        tag: '44.jpg',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Sparco red gloves',
        tag: '55.jpg',
        price: 5000,
        inCart: 0
    },
    {
        name: 'Sparco blue gloves',
        tag: '66.jpg',
        price: 5000,
        inCart: 0
    },
];

let products3 = [
    {
        name: 'Traditional helmet',
        tag: '111.jpg',
        price: 500,
        inCart: 0
    },
    {
        name: 'Kimi Raikkonen helmet',
        tag: '222.jpg',
        price: 500,
        inCart: 0
    },
    {
        name: 'Max Verstappen helmet',
        tag: '333.jpg',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Fernando Alonso helmet',
        tag: '444.jpg',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Pierre Gasly helmet',
        tag: '555.jpg',
        price: 5000,
        inCart: 0
    },
    {
        name: 'Green helmet',
        tag: '666.jpg',
        price: 5000,
        inCart: 0
    },
];

for (let i = 0; i < carts.length;i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
         document.querySelector('.user span').textContent = productNumbers;
    }
}
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.user span').textContent = productNumbers+1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.user span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
			cartItems = {
                ...cartItems,
                [product.tag]: product
            };
		}
		cartItems[product.tag].inCart += 1;
	}else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost",cartCost + product.price);
	}else{
        localStorage.setItem("totalCost",product.price);
    }
}

function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    let cartPage = document.querySelector(".align-middle");
    let totalCostDisplay = document.querySelector(".cart-content")
    if (cartItems && cartPage) {
        cartPage.innerHTML = '';
        Object.values(cartItems).map(item =>{
            cartPage.innerHTML +=`
                <tr>
                    <td>
                        <div class="img">
                            <a href="#"><img src="img/${item.tag}.jpg" alt="Image"></a>
                            <p>${item.name}</p>
                        </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <div class="qty">
                            <input type="text" value="${item.inCart}">
                        </div>
                    </td>
                    <td>$${item.inCart * item.price}</td>
                    <td>
                        <div class = "remove-button">
                            <button><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });

        totalCostDisplay.innerHTML = `
            <h1>Cart Summary</h1>
            <h2>Grand Total<span>$${cartCost}</span></h2>
        `;
	}
}




function removeCartItem() {
	let removeCartItemButton = document.getElementsByClassName('remove-button');
    for (let i = 0; i < removeCartItemButton.length; i++) {
        let button = removeCartItemButton[i];
        button.addEventListener('click', function(event){
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.parentElement.remove();
            localStorage.removeItem('productsInCart');
            localStorage.removeItem('cartNumbers');
            localStorage.removeItem('totalCost');
            location.reload(true);
        });
    }
}

onLoadCartNumbers();
displayCart();
removeCartItem();
//product-list2////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < cartss.length;i++) {
    cartss[i].addEventListener('click',() => {
        cartNumbers1(products1[i]);
        totalCost1(products1[i]);
    });
}
function onLoadCartNumbers1() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let productNumbers1 = localStorage.getItem('cartNumbers1');
    productNumbers1 = parseInt(productNumbers1);
    if (productNumbers1) {
         document.querySelector('.user span').textContent = productNumbers + productNumbers1;
    }
}
function cartNumbers1(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let productNumbers1 = localStorage.getItem('cartNumbers1');
    productNumbers1 = parseInt(productNumbers1);
    if (productNumbers1) {
        localStorage.setItem('cartNumbers1',productNumbers1+1);
        document.querySelector('.user span').textContent = productNumbers + productNumbers1+1;
    }else{
        localStorage.setItem('cartNumbers1',1);
        document.querySelector('.user span').textContent = 1;
    }
    setItems1(product);
}

function setItems1(product) {
    let cartItems1 = localStorage.getItem('productsInCart1');
    cartItems1 = JSON.parse(cartItems1);
    if (cartItems1 != null) {
        if (cartItems1[product.tag] == undefined) {
			cartItems1 = {
                ...cartItems1,
                [product.tag]: product
            };
		}
		cartItems1[product.tag].inCart += 1;
	}else{
        product.inCart = 1;
        cartItems1 = {
            [product.tag]: product
        };
    }
    localStorage.setItem("productsInCart1", JSON.stringify(cartItems1));
}

function totalCost1(product) {
    let cartCost1 = localStorage.getItem('totalCost1');
    if (cartCost1 != null) {
        cartCost1 = parseInt(cartCost1);
		localStorage.setItem("totalCost1",cartCost1 + product.price);
	}else{
        localStorage.setItem("totalCost1",product.price);
    }
}

function displayCart1() {
	let cartItems1 = localStorage.getItem("productsInCart1");
    cartItems1 = JSON.parse(cartItems1);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    let cartCost1 = localStorage.getItem('totalCost1');
    cartCost1 = parseInt(cartCost1);
    let cartPage = document.querySelector(".align-middle");
    let totalCostDisplay = document.querySelector(".cart-content")
    if (cartItems1 && cartPage) {
        
        Object.values(cartItems1).map(item =>{
            cartPage.innerHTML +=`
                <tr>
                    <td>
                        <div class="img">
                            <a href="#"><img src="img/${item.tag}" alt="Image"></a>
                            <p>${item.name}</p>
                        </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <div class="qty">
                            <input type="text" value="${item.inCart}">
                        </div>
                    </td>
                    <td>$${item.inCart * item.price}</td>
                    <td>
                        <div class = "remove-button1">
                            <button><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });

        totalCostDisplay.innerHTML = `
            <h1>Cart Summary</h1>
            <h2>Grand Total<span>$${cartCost1 + cartCost}</span></h2>
        `;
	}
}




function removeCartItem1() {
	let removeCartItemButton = document.getElementsByClassName('remove-button1');
    for (let i = 0; i < removeCartItemButton.length; i++) {
        let button = removeCartItemButton[i];
        button.addEventListener('click', function(event){
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.parentElement.remove();
            localStorage.removeItem('productsInCart1');
            localStorage.removeItem('cartNumbers1');
            localStorage.removeItem('totalCost1');
            location.reload(true);
        });
    }
}
onLoadCartNumbers1();
displayCart1();
removeCartItem1();
//product-list2///////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < cartsss.length;i++) {
    cartsss[i].addEventListener('click',() => {
        cartNumbers2(products2[i]);
        totalCost2(products2[i]);
    });
}
function onLoadCartNumbers2() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let productNumbers1 = localStorage.getItem('cartNumbers1');
    productNumbers1 = parseInt(productNumbers1);
    let productNumbers2 = localStorage.getItem('cartNumbers2');
    productNumbers2 = parseInt(productNumbers2);
    if (productNumbers2) {
         document.querySelector('.user span').textContent = productNumbers + productNumbers1 + productNumbers2;
    }
}
function cartNumbers2(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let productNumbers1 = localStorage.getItem('cartNumbers1');
    productNumbers1 = parseInt(productNumbers1);
    let productNumbers2 = localStorage.getItem('cartNumbers2');
    productNumbers2 = parseInt(productNumbers2);
    if (productNumbers2) {
        localStorage.setItem('cartNumbers2',productNumbers2+1);
        document.querySelector('.user span').textContent = productNumbers + productNumbers1 + productNumbers2+1;
    }else{
        localStorage.setItem('cartNumbers2',1);
        document.querySelector('.user span').textContent = 1;
    }
    setItems2(product);
}

function setItems2(product) {
    let cartItems2 = localStorage.getItem('productsInCart2');
    cartItems2 = JSON.parse(cartItems2);
    if (cartItems2 != null) {
        if (cartItems2[product.tag] == undefined) {
			cartItems2 = {
                ...cartItems2,
                [product.tag]: product
            };
		}
		cartItems2[product.tag].inCart += 1;
	}else{
        product.inCart = 1;
        cartItems2 = {
            [product.tag]: product
        };
    }
    localStorage.setItem("productsInCart2", JSON.stringify(cartItems2));
}

function totalCost2(product) {
    let cartCost2 = localStorage.getItem('totalCost2');
    if (cartCost2 != null) {
        cartCost2 = parseInt(cartCost2);
		localStorage.setItem("totalCost2",cartCost2 + product.price);
	}else{
        localStorage.setItem("totalCost2",product.price);
    }
}

function displayCart2() {
	let cartItems2 = localStorage.getItem("productsInCart2");
    cartItems2 = JSON.parse(cartItems2);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    let cartCost1 = localStorage.getItem('totalCost1');
    cartCost1 = parseInt(cartCost1);
    let cartCost2 = localStorage.getItem('totalCost2');
    cartCost2 = parseInt(cartCost2);
    let cartPage = document.querySelector(".align-middle");
    let totalCostDisplay = document.querySelector(".cart-content")
    if (cartItems2 && cartPage) {
        
        Object.values(cartItems2).map(item =>{
            cartPage.innerHTML +=`
                <tr>
                    <td>
                        <div class="img">
                            <a href="#"><img src="img/${item.tag}" alt="Image"></a>
                            <p>${item.name}</p>
                        </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <div class="qty">
                            <input type="text" value="${item.inCart}">
                        </div>
                    </td>
                    <td>$${item.inCart * item.price}</td>
                    <td>
                        <div class = "remove-button2">
                            <button><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });

        totalCostDisplay.innerHTML = `
            <h1>Cart Summary</h1>
            <h2>Grand Total<span>$${cartCost2 +cartCost1 + cartCost}</span></h2>
        `;
	}
}




function removeCartItem2() {
	let removeCartItemButton = document.getElementsByClassName('remove-button2');
    for (let i = 0; i < removeCartItemButton.length; i++) {
        let button = removeCartItemButton[i];
        button.addEventListener('click', function(event){
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.parentElement.remove();
            localStorage.removeItem('productsInCart2');
            localStorage.removeItem('cartNumbers2');
            localStorage.removeItem('totalCost2');
            location.reload(true);
        });
    }
}



onLoadCartNumbers2();
displayCart2();
removeCartItem2();
//product-list3///////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < cartssss.length;i++) {
    cartssss[i].addEventListener('click',() => {
        cartNumbers3(products3[i]);
        totalCost3(products3[i]);
    });
}
function onLoadCartNumbers3() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let productNumbers1 = localStorage.getItem('cartNumbers1');
    productNumbers1 = parseInt(productNumbers1);
    let productNumbers2 = localStorage.getItem('cartNumbers2');
    productNumbers2 = parseInt(productNumbers2);
    let productNumbers3 = localStorage.getItem('cartNumbers3');
    productNumbers3 = parseInt(productNumbers3);
    if (productNumbers3) {
         document.querySelector('.user span').textContent = productNumbers + productNumbers1 + productNumbers2 + productNumbers3;
    }
}
function cartNumbers3(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let productNumbers1 = localStorage.getItem('cartNumbers1');
    productNumbers1 = parseInt(productNumbers1);
    let productNumbers2 = localStorage.getItem('cartNumbers2');
    productNumbers2 = parseInt(productNumbers2);
    let productNumbers3 = localStorage.getItem('cartNumbers3');
    productNumbers3 = parseInt(productNumbers3);
    if (productNumbers3) {
        localStorage.setItem('cartNumbers3',productNumbers3 + 1);
        document.querySelector('.user span').textContent = productNumbers + productNumbers1 + productNumbers2 + productNumbers3 + 1;
    }else{
        localStorage.setItem('cartNumbers3',1);
        document.querySelector('.user span').textContent = 1;
    }
    setItems3(product);
}

function setItems3(product) {
    let cartItems3 = localStorage.getItem('productsInCart3');
    cartItems3 = JSON.parse(cartItems3);
    if (cartItems3 != null) {
        if (cartItems3[product.tag] == undefined) {
			cartItems3 = {
                ...cartItems3,
                [product.tag]: product
            };
		}
		cartItems3[product.tag].inCart += 1;
	}else{
        product.inCart = 1;
        cartItems3 = {
            [product.tag]: product
        };
    }
    localStorage.setItem("productsInCart3", JSON.stringify(cartItems3));
}

function totalCost3(product) {
    let cartCost3 = localStorage.getItem('totalCost3');
    if (cartCost3 != null) {
        cartCost3 = parseInt(cartCost3);
		localStorage.setItem("totalCost3",cartCost3 + product.price);
	}else{
        localStorage.setItem("totalCost3",product.price);
    }
}

function displayCart3() {
	let cartItems3 = localStorage.getItem("productsInCart3");
    cartItems3 = JSON.parse(cartItems3);
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    let cartCost1 = localStorage.getItem('totalCost1');
    cartCost1 = parseInt(cartCost1);
    let cartCost2 = localStorage.getItem('totalCost2');
    cartCost2 = parseInt(cartCost2);
    let cartCost3 = localStorage.getItem('totalCost3');
    cartCost3 = parseInt(cartCost3);
    let cartPage = document.querySelector(".align-middle");
    let totalCostDisplay = document.querySelector(".cart-content")
    if (cartItems3 && cartPage) {
        
        Object.values(cartItems3).map(item =>{
            cartPage.innerHTML +=`
                <tr>
                    <td>
                        <div class="img">
                            <a href="#"><img src="img/${item.tag}" alt="Image"></a>
                            <p>${item.name}</p>
                        </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                        <div class="qty">
                            <input type="text" value="${item.inCart}">
                        </div>
                    </td>
                    <td>$${item.inCart * item.price}</td>
                    <td>
                        <div class = "remove-button3">
                            <button><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        });

        totalCostDisplay.innerHTML = `
            <h1>Cart Summary</h1>
            <h2>Grand Total<span>$${cartCost3 + cartCost2 + cartCost1 + cartCost}</span></h2>
        `;
	}
}




function removeCartItem3() {
	let removeCartItemButton = document.getElementsByClassName('remove-button3');
    for (let i = 0; i < removeCartItemButton.length; i++) {
        let button = removeCartItemButton[i];
        button.addEventListener('click', function(event){
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.parentElement.remove();
            localStorage.removeItem('productsInCart3');
            localStorage.removeItem('cartNumbers3');
            localStorage.removeItem('totalCost3');
            location.reload(true);
        });
    }
}

function checkoutClearCart() {
	let checkoutbutton = document.getElementsByClassName('cart-btn')[0];
    checkoutbutton.addEventListener('click', function(event){
        localStorage.clear();
        location.reload(true);
    });
}


onLoadCartNumbers3();
displayCart3();
removeCartItem3();
checkoutClearCart();