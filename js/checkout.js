(function ($) {
    'use strict';

    var cart_data = window.localStorage.cart_data;

    // Payment mode selection check/uncheck operation
    $(".card-header").click(function () {   
        $(".card-header").find("i").removeClass("fa-check-circle");
        $(".card-header").find("i").addClass("fa-circle-o");
        $(this).find("i").toggleClass("fa-circle-o");
        $(this).find("i").toggleClass("fa-check-circle")
    });

    if (cart_data) {
        // Obtaining cart data from localstorage
        cart_data = JSON.parse(cart_data);

        // Building DOM content based on cart data
        var orderDetails = '<li><span>Product</span> <span>Total</span></li>';
        Object.keys(cart_data).forEach(function (i) {
            var cartObject = cart_data[i];
            orderDetails += '<li><span>' + cartObject.productName + '(' + cartObject.brandName + ') - ' + cartObject.color + ' - ' + cartObject.size + '</span> <span>₹' + cartObject.price + '</span></li>';
        });

        orderDetails += '<li><span>Subtotal</span> <span>₹' + globalCartData.cartValue + '</span></li>';
        orderDetails += '<li><span>Shipping</span> <span id="shippingCharge">Free</span></li>';
        orderDetails += '<li><span>Total</span> <span>₹' + globalCartData.cartValue + '</span></li>';

        // Rendering order details to DOM
        $(".order-details-form").html(orderDetails);
    } else {
        window.location.href = "/";
    }
})(jQuery);