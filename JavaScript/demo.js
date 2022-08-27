// pictures slider
var slider = document.getElementById("imgSlided");
var counter = 0;
var arrOfImgs = [
	"../styling/imgs/product01.jpg",
	"../styling/imgs/product02.jpg",
	"../styling/imgs/product03.jpg",
	"../styling/imgs/product04.jpg",
	"../styling/imgs/product05.jpg",
	"../styling/imgs/product06.jpg",
	"../styling/imgs/product07.jpg",
];
function next() {
	if (counter < arrOfImgs.length) {
		counter++;
	}
	if (counter == arrOfImgs.length) {
		counter = 0;
	}
	slider.setAttribute("src", arrOfImgs[counter]);
}
function pre() {
	if (counter == 0) {
		counter = arrOfImgs.length;
	}
	if (counter > 0) {
		counter--;
	}
	slider.setAttribute("src", arrOfImgs[counter]);
}
document.getElementById("next").addEventListener("click", next);
document.getElementById("pre").addEventListener("click", pre);
setInterval(next, 3000);
document.getElementById("slided").addEventListener("click", function () {
	document.location = "#cat";
});

// categories;

var cat = [
	[document.getElementById("elecCat"), document.getElementById("elecCard")],
	[document.getElementById("bookCat"), document.getElementById("bookCard")],
	[document.getElementById("grocCat"), document.getElementById("grocCard")],
	[document.getElementById("makeCat"), document.getElementById("makeCard")],
];

cat[0][0].addEventListener("click", cats);
cat[0][0].addEventListener("click", function () {
	cat[0][1].style.display = "flex";
});

cat[1][0].addEventListener("click", cats);
cat[1][0].addEventListener("click", function () {
	cat[1][1].style.display = "flex";
});

cat[2][0].addEventListener("click", cats);
cat[2][0].addEventListener("click", function () {
	cat[2][1].style.display = "flex";
});

cat[3][0].addEventListener("click", cats);
cat[3][0].addEventListener("click", function () {
	cat[3][1].style.display = "flex";
});

function cats() {
	for (var x in cat) {
		cat[x][0].removeAttribute("class", "activated");
		cat[x][1].style.display = "none";
	}
	this.setAttribute("class", "activated");
}

// add to cart
var cart = document.querySelector(".fa-cart-shopping span");
var numOfItems = cart.textContent;
var toCart = document.querySelectorAll(".toCart");
console.log(toCart);
for (var i = 0; i < toCart.length; i++) {
	toCart[i].addEventListener("click", function () {
		numOfItems++;
		cart.textContent = numOfItems;
	});
}

// back to top
document.getElementById("topHome").addEventListener("click", function () {
	document.location = "#navHome";
});
