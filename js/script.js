
	let salad1 = document.getElementById("salad1");	
	let salad2 = document.getElementById("salad2");	
	let salad3 = document.getElementById("salad3");	
	let sushi1 = document.getElementById("sushi1");	
	let sushi2 = document.getElementById("sushi2");	
	let sushi3 = document.getElementById("sushi3");	
	function sushi(){
		sushi1.style.display = "block";
		sushi2.style.display = "block";
		sushi3.style.display = "block";
		salad1.style.display = "none";
		salad2.style.display = "none";
		salad3.style.display = "none";
	}
	function salad(){
		sushi1.style.display = "none";
		sushi2.style.display = "none";
		sushi3.style.display = "none";
		salad1.style.display = "block";
		salad2.style.display = "block";
		salad3.style.display = "block";
	}
	function All(){
		sushi1.style.display = "block";
		sushi2.style.display = "block";
		sushi3.style.display = "block";
		salad1.style.display = "block";
		salad2.style.display = "block";
		salad3.style.display = "block";
	}
		
		var P = 0; 
		function add(name,price) {
			var firstDivContent = document.getElementById(name);
			var outDivContent = document.getElementById(price);
			var product = document.getElementById('e');
			var total = document.getElementById('htotal');
		
			let R = document.createElement("tr"); //str wst 2 mno td 
			let A = document.createElement("td");
			let B = document.createElement("td");
		
	
			product.append(R);   //enter in
			A.innerHTML = firstDivContent.innerHTML;
			B.innerHTML = outDivContent.innerHTML + "$";
			// innerHTML dakchi li wst html
		
			var Prix =Number(outDivContent.innerHTML); //nmb of prc
		
			P = P + Prix;
		
			R.append(A,B);
			total.innerHTML=P+"$";
			}
			 function validate(){
			var product = document.getElementById('e');
			var total = document.getElementById('htotal');
			alert("cammande validé");
			P =0;
			
			total.innerHTML=P+"$";
			product.innerHTML="";
		}
