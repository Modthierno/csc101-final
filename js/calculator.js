var message1 = document.getElementById('message1');
		var message2 = document.getElementById('message2');

		var calcul = document.getElementById('calcul');
		var res = document.getElementById('res');

		calcul.onclick = function(){

			var num1 = Number(document.getElementById('num1').value);
			var num2 = Number(document.getElementById('num2').value);

			if(num1 == ''){
				message1.innerHTML = 'Invalid input';
				message1.style.display = 'block';
			}

			if(num2 == ''){
				message2.innerHTML = 'Invalid input';
				message2.style.display = 'block';
			}

			var add = document.getElementById('add');
			var subtract = document.getElementById('subtract');
			var multiply = document.getElementById('multiply');
			var divide = document.getElementById('divide');

			if(add.checked){
				res.innerHTML = num1 + num2;
			}else if (subtract.checked){
				res.innerHTML = num1 - num2;
			}else if(multiply.checked){
				res.innerHTML = num1 * num2;
			}else if(divide.checked){
				res.innerHTML = num1 / num2;
			}

			console.log('Clicked');
		};