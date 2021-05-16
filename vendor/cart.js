var button = document.getElementById("cart_button");
var sidebar = document.getElementById("cart_item");

window.addEventListener('click', function(e){   

    
    if (document.getElementById('cart_button').contains(e.target)){
        if(sidebar.style.right == "-550px") {
            sidebar.style.right = "0px";
            button.style.right = "450px";
    
        } else {
            sidebar.style.right = "-550px";
            button.style.right = "40px";
        }
    } else if (document.getElementById('close_card').contains(e.target)) {
        if(sidebar.style.right == "-550px") {
            sidebar.style.right = "0px";
            button.style.right = "450px";
    
        } else {
            sidebar.style.right = "-550px";
            button.style.right = "40px";
        }
    } else if (document.getElementById('cart_item').contains(e.target)) {

    } else {
        if(sidebar.style.right == "0px") {
            sidebar.style.right = "-550px";
            button.style.right = "40px";
        }
    }


});