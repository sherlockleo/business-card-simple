﻿"use strict";

var app = {


    init: function() {

        app.initPage();
        // Listen hash change for user only
        /* Add following codes in Order onCreateOrderSucceeded()
        window.location = "#" + os.Pending;
        (event.preventDefault) ? event.preventDefault() : (event.returnValue = false);//event.returnValue support IE
        */
        window.onhashchange = function() {
            var hash = window.location.hash;
            var replacedHash = hash.replace("#", "");
            order.changeUserOrderView(replacedHash);
        }
    },


    initPage: function() {
        var hash = window.location.hash;
        //console.log(hash);
        if (hash) {
            var replacedHash = hash.replace("#", "");
            if (replacedHash === "Home") {
                // Product.init();
            } else {
                Order.changeUserOrderView(replacedHash);
                // Product.bindUIActions();
            }
        } else {
            // $("#orderStatusHidden").val("New");
            // Product.init(); // mark favorite red after favoriteId loaded
        }
    },
};

$(function() {
    app.init();
});