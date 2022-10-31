
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
		let togg1 = document.getElementById("togg1");
	let togg2 = document.getElementById("togg2");
	let d1 = document.getElementById("d1");
	let d2 = document.getElementById("d2");
	togg1.addEventListener("click", () => {
	  if(getComputedStyle(d1).display != "none"){
		d1.style.display = "none";
	  } else {
		d1.style.display = "block";
	  }
	})
	
	function togg(){
	  if(getComputedStyle(d2).display != "none"){
		d2.style.display = "none";
	  } else {
		d2.style.display = "block";
	  }
	};
	togg2.onclick = togg;
		
		
		var P = 0; 
		function add(name,price) {
			var firstDivContent = document.getElementById(name);
			var outDivContent = document.getElementById(price);
			var product = document.getElementById('e');
			var total = document.getElementById('htotal');
		
			let R = document.createElement("tr");
			let A = document.createElement("td");
			let B = document.createElement("td");
		
		
			product.append(R);
			A.innerHTML = firstDivContent.innerHTML;
			B.innerHTML = outDivContent.innerHTML + "$";
		
		
			var Prix =Number(outDivContent.innerHTML);
		
			P = P + Prix;
		
			R.append(A,B);
			total.innerHTML=P+"$";
			}

	
		

// let togg1 = document.getElementById("togg1");
// let togg2 = document.getElementById("togg2");

// let d1 = document.getElementById("d1");
// let d2 = document.getElementById("d2");
// togg1.addEventListener("click", () => {
//   if(getComputedStyle(d1).display != "none"){
//     d1.style.display = "none";
//   } else {
//     d1.style.display = "block";
//   }
// })

// function togg(){
//   if(getComputedStyle(d2).display != "none"){
//     d2.style.display = "none";
//   } else {
//     d2.style.display = "block";
//   }
// };
// togg2.onclick = togg;
// var select = document.getElementById('choix');
// var cards = document.getElementsByClassName('items');
// var itemTitle = document.querySelectorAll('.items h4');

// select.onchange = function () {
//     var selectedValue = select.value;
//     for (let index = 0; index < itemTitle.length; index++) {
//         if (selectedValue == 'Tous') {
//             cards[index].style.display = 'block';
//         } else if (selectedValue != itemTitle[index].textContent) {
//             cards[index].style.display = 'none';
//         } else {
//             cards[index].style.display = 'block';
//         }
//     }
//     };
// let togg1 = document.getElementById("togg1");
// let togg2 = document.getElementById("togg2");
// let d1 = document.getElementById("d1");
// let d2 = document.getElementById("d2");
// togg1.addEventListener("click", () => {
//   if(getComputedStyle(d1).display != "none"){
//     d1.style.display = "none";
//   } else {
//     d1.style.display = "block";
//   }
// })

// function togg(){
//   if(getComputedStyle(d2).display != "none"){
//     d2.style.display = "none";
//   } else {
//     d2.style.display = "block";
//   }
// };
// togg2.onclick = togg;
// document.addEventListener('DOMContentLoaded', function() {
//     let rowElements = document.getElementById('table').querySelectorAll('tr');
//     let total = getTotal(rowElements); // total here
//   }, false);
   
//   getTotal(array) {
//     let total = 0;
       
//     array.forEach((row) => {
//       let value = Number(row.querySelector('.value').innerText);
//       total += value;
//     });
       
//     return total;
//   }
