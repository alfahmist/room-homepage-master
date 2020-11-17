
$( document ).ready(function() {
    console.log( "ready!" );

const judul = [
    "Discover innovative ways to decorate",
    "Manufactured with the best materials",
    "We are available all across the globe",
]

const content = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
]

const bgImage = [
    "../images/desktop-image-hero-1.jpg",
    "../images/desktop-image-hero-2.jpg",
    "../images/desktop-image-hero-3.jpg",
]

let i = 0;

$(".arrow-left").click(function(e){
    e.preventDefault;
    i--;
    if(i<0) {
        i=2;
    }
    changeSlider(i);
 
})

$(".arrow-right").click(function(e){
    e.preventDefault;
    i++;
    if(i>judul.length-1) {
        i=0;
    }

    changeSlider(i);

})


function changeSlider(index){
    $(".img-banner")
    .fadeOut("slow", function() {
        $(".img-banner").attr("src","" + bgImage[index]+"");
    })
    .fadeIn("slow");

    $(".judul-change")
    .fadeOut("slow", function() {
        $(".judul-change").html(judul[index]);
    })
    .fadeIn("slow");

    $(".content-change")
    .fadeOut("slow", function() {
        $(".content-change ").html(content[index]);
    })
    .fadeIn("slow");

}
 

  
});


$("#my_image").attr("src","second.jpg");

