// Owl carousel 

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    // autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1025: {
            items: 3,
        },
    },
});

// Html element scripting

// Anchor tag selection using queryselector and use of get set attribute

const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.google.com/")
// console.log(link.getAttribute("href"));


// calling element by id
const head = document.getElementById("tst1");
head.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";


const para1 = document.getElementById("parasub");
para1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante.Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse plate a dictumst.";


//using InnerHTML

const innerh = document.getElementById("innerh");
innerh.innerHTML = "Lorem ipsum dolor sit amet,consectetur adipiscing elit.";


//color changing of navbar items

const classNav = document.getElementsByTagName("a");
// console.log(classNav);
for (let i = 0; i < classNav.length; i++) {
    const classNavItem = classNav[i];
    classNavItem.style.color = "black";
    // classNavItem.style.backgroundColor = "black";
}

//queryselector button text color changed

const buttonf = document.querySelector("div.buttonf a");
buttonf.textContent = "Checking Pricing";
buttonf.style.color = "white";