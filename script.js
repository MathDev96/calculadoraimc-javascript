var calcular = document.getElementById("calcular");
		
		calcular.addEventListener("click", () => {
			
			//Obter altura
				var altura = +document.getElementById("altura").value;
			
			//Obter peso
				var peso = +document.getElementById("peso").value;	
			
			//calcular o IMC, Usando a altura e o peso informados
				var imc = peso / (altura * altura);
			
			//com o IMC calculado, encontrar a situação na tabela. Se o resultado for:
				var situacao = "";
			
			// abaixo de 17 então a situação é Muito abaixo do peso
			if (imc < 17)
				situacao = "IMC Menor do que 17 : Muito abaixo do peso";
			
			//entre 17 e 18,49 então a situação é abaixo do peso
			else if (imc >= 17 && imc <= 18.49)
				situacao = "IMC Entre 17 e 18,49 : Abaixo do peso";
			
			//entre 18,50 e 24,99 então situação é Peso normal
			else if (imc >=  18.5 && imc <= 24.99)
				situacao = "IMC Entre 18,50 e 24,99 : Peso normal";
			
			//entre 25 e 29,99 então a situação é Sobrepeso
			else if (imc >= 25 && imc <= 29.99)
				situacao = "IMC Entre 25 e 29,99 : Sobrepeso";
			
			//entre 30 e 34,99 então a situação é Obesidade 1
			else if (imc >= 30 && imc <= 34.99)
				situacao = "IMC Entre 30 e 34,99 : Obesidade 1";
			
			//entre 35 e 39,99 então a situação é Obesidade 2
			else if (imc >= 35 && imc <= 39.99)
				situacao = "IMC Entre 35 e 39,99 : Obesidade 2";	
			
			//acima de 40 então a situação é Obesidade 3
			else if (imc >= 40)
				situacao = "IMC Acima ou igual a 40 : Obesidade 3";
			
			//exibir situação
				alert(situacao);

		});