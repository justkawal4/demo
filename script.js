window.addEventListener("scroll", function () {
    let header = document.querySelector(".navbar");
    if(window.scrollY > 100){
        console.log("At the top");
        header.classList.add("active");
    } else {
        console.log("Not at the top");
        header.classList.remove("active");
    }
})

$(document).ready(function(){
    $("#btn2").click(function(){
        alert("We will get back to you soon");
    })

    $('ul li a').removeClass('active')
            $('ul li a').click(function(){
                $('ul li a').removeClass('active')
                $(this).addClass('active')
            })
})


