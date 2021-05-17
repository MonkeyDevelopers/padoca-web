var button = document.getElementById("cart_button");
var sidebar = document.getElementById("cart_item");
var left = document.getElementById("icon_open");
var right = document.getElementById("icon_close");



window.addEventListener('click', function(e){   

    
    if (document.getElementById('cart_button').contains(e.target)){
        if(sidebar.style.right == "-340px") {
            sidebar.style.right = "0px";
            button.style.right = "380px";
            // open_bar
            left.style.display = "none";
            right.style.display = "flex";
    
        } else {
            sidebar.style.right = "-340px";
            button.style.right = "40px";
            // open_bar
            left.style.display = "flex";
            right.style.display = "none";
        }
    } else if (document.getElementById('close_card').contains(e.target)) {
        if(sidebar.style.right == "-340px") {
            sidebar.style.right = "0px";
            button.style.right = "380px";
            // open_bar
            left.style.display = "none";
            right.style.display = "flex";
        } else {
            sidebar.style.right = "-340px";
            button.style.right = "40px";
            // open_bar
            left.style.display = "flex";
            right.style.display = "none";
        }
    } else if (document.getElementById('open_cart_bar').contains(e.target)) {
        if(sidebar.style.right == "-340px") {
            sidebar.style.right = "0px";
            button.style.right = "380px";
            // open_bar
            left.style.display = "none";
            right.style.display = "flex";
        } else {
            sidebar.style.right = "-340px";
            button.style.right = "40px";
            // open_bar
            left.style.display = "flex";
            right.style.display = "none";
        }
    } else if (document.getElementById('cart_item').contains(e.target)) {

    } else {
        if(sidebar.style.right == "0px") {
            sidebar.style.right = "-340px";
            button.style.right = "40px";
            // open_bar
            left.style.display = "flex";
            right.style.display = "none";
        }
    }


});