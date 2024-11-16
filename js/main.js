(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
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
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



// let cart = [];
// let total = 0;

// function addToCart(name, price) {
//     const cartItem = cart.find(item => item.name === name);
//     if (cartItem) {
//         cartItem.quantity++;
//     } else {
//         cart.push({ name, price, quantity: 1 });
//     }
//     updateCart();
// }

// function updateCart() {
//     const cartContainer = document.getElementById("cart");
//     cartContainer.innerHTML = ""; 

//     if (cart.length === 0) {
//         cartContainer.innerHTML = "<p>Your cart is empty.</p>";
//     } else {
//         cart.forEach(item => {
//             const itemElement = document.createElement("p");
//             itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
//             cartContainer.appendChild(itemElement);
//         });
//     }

    
//     total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     document.getElementById("total").textContent = total.toFixed(2);
// }



// function updateCartDisplay() {
//     const cartItems = document.getElementById("cartItems");
//     cartItems.innerHTML = ""; 

//     if (cart.length === 0) {
        
//         cartItems.innerHTML = "<li>Your cart is empty.</li>";
//     } else {
        
//         cart.forEach((item, index) => {
//             const li = document.createElement("li");
//             li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Xóa</button>`;
//             cartItems.appendChild(li);
//         });
//     }

    
//     document.getElementById("total").innerText = total;
// }


// function addToCart(name, price) {
//     cart.push({ name, price });
//     total += price;
//     updateCartDisplay();
// }


// function removeFromCart(index) {
//     total -= cart[index].price; 
//     cart.splice(index, 1); 
//     updateCartDisplay();
// }