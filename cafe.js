"use strict";

$(document).ready(function() {
    var total = 0.00;     //total price
    
    $("#rollover img").each(function() {
        var oldPic = $(this).attr("src"); 
        var newPic = $(this).attr("id");
        
        var rollImg = new Image();   
        rollImg.src = newPic;
        
        $(this).hover(
        function() {
            $(this).attr("src", newPic);
        },
        function() {
            $(this).attr("src", oldPic);
        }
        ); 
    }); 
    
    /* img click */                 
    $("#rollover img").click(function(evt) {
        var product = $(this).attr("id");  
        setVars(product);
        evt.preventDefault();
    });  
    
    /* set variables for price and item clicked on*/                 
    var setVars = function(product) {                 
        var price;
        var item;
     
        if (product == "images/espresso_info.jpg") {
            price = 1.95;
            item = "Espresso";
        } else if (product == "images/latte_info.jpg") {
            price = 2.95;
            item = "Latte";
        } else if (product == "images/cappuccino_info.jpg") {
            price = 3.45;
            item = "Cappuccino";
        } else if (product == "images/coffee_info.jpg") {
            price = 1.75;
            item = "Drip Coffee";
        } else if (product == "images/biscotti_info.jpg") {
            price = 1.95;
            item = "Biscotti";
        } else if (product == "images/scone_info.jpg") {
            price = 2.95;
            item = "Scone";
        }
     
        displayItems(price, item);
        displayTotalPrice(price); 
    } 

    /* display order Items */  
    var displayItems = function(price, item) {
        // combine string
        var sale = "$" + price + " - " + item + "\n ";
        
        // display
        var option = $("<option>").val(item).text("$" + price + " - " + item); 
        $("#order").append(option);
    } 

    /* display total price*/    
    var displayTotalPrice = function(price) {
        // calculate
        total = total + price;

        // display the string
	    $("#total").html("Total: $" + total.toFixed(2));
    }

    /* place order */                 
    $("#place_order").click(function(evt) {  
        if (total == 0.00)
            alert("Click on a menu item");
        else      
            location.href = "checkout.html";
    });
 
    /* clear order */                 
    $("#clear_order").click(function(evt) {
        // reset total
        total = 0.00;
    
        // clear display
        $("#total").html("");
        $("#order").empty();
    });     
       
});