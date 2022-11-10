
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

	
		
