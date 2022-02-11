const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

//será preciso utilizar um outra imagem com
//outra cor de produto para mudança das cores
//you will need to use another image with
//other product color for color change
//Repeated image path because it doesn't have the same product with different color

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [

            {
                code: "black",
                img: "./img/sapato1.jpg"
            },
            {
                code: "darkblue",
                img: "./img/sapato1white.jpg"
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 115,
        colors: [
            {
                code: "black",
                img: "./img/sapato2.jpg"
            },
            {
                code: "gray",
                img: "./img/sapato2gray.jpg"
            },
        ],
    },
    {
        id: 3,
        title: "Air Blazer",
        price: 150,
        colors: [
            {
                code: "black",
                img: "./img/sapato3.jpg"
            },
            {
                code: "white",
                img: "./img/sapato3white.jpg"
            },
        ],
    },
    {
        id: 4,
        title: "Air CRATER",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/sapato4.jpg"
            },
            {
                code: "gray",
                img: "./img/sapato4white.jpg"
            },
        ],
    },
    {
        id: 5,
        title: "Air CRATER",
        price: 299,
        colors: [
            {
                code: "black",
                img: "./img/sapato5.jpg"
            },
            {
                code: "pink",
                img: "./img/sapato5pink.jpg"
            },
        ],
    },

];

//qualquer coisa mudar o colors para color
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`


        //change the choosen product
        choosenProduct = products[index]

        //change text choosen currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //Assing new color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

//get the class size, and set a color on click XD
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })

        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=> {
    payment.style.display="flex"
})

close.addEventListener("click", ()=> {
    payment.style.display="none"
})
