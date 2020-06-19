		var status = 0;
		var vrijeme = 0;
		var sati=0,minute=0,sekunde=0,milisekunde=0;
		var brcp = 0,brsp = 0;
		function brojac(){
			if(status == 1){
					pokreni =setTimeout(function(){
					vrijeme++;
					sati = Math.floor(vrijeme/100/100/60);
					minute = Math.floor(vrijeme/100/60);
					sekunde = Math.floor(vrijeme/100);
					milisekunde = vrijeme % 100;
					
					if(sati < 10) {
						sati = "0" + sati;
					}   
					if(minute < 10) {
						minute = "0" + minute;
					}
					if(sekunde >= 60) {
						sekunde = sekunde % 60;
					}
					if(sekunde < 10) {
						sekunde = "0" + sekunde;
					}
					if(milisekunde < 10) {
						milisekunde = "0" + milisekunde;
					}

					document.getElementById('prikazvremena').innerHTML = sati + ":" +  minute + ":" + sekunde + "." + milisekunde;
					brojac();
				}, 10);
			}
		}

		var status2 = 0;
		var vrijeme2 = 0;
		var sati2=0,minute2=0,sekunde2=0,milisekunde2=0;
		function brojac2(){
			if(status2 == 1){
				pokreni2 =setTimeout(function(){
					vrijeme2++;
					sati2 = Math.floor(vrijeme2/100/100/60);
					minute2 = Math.floor(vrijeme2/100/60);
					sekunde2 = Math.floor(vrijeme2/100);
					milisekunde2 = vrijeme2 % 100;
					if(sati2 < 10) {
						sati2 = "0" + sati2;
					}   
					if(minute2 < 10) {
						minute2 = "0" + minute2;
					}
					if(sekunde2 >= 60) {
						sekunde2 = sekunde2 % 60;
					}
					if(sekunde2 < 10) {
						sekunde2 = "0" + sekunde2;
					}
					if(milisekunde2 < 10) {
						milisekunde2 = "0" + milisekunde2;
					}
					document.getElementById('prikazvremena2').innerHTML = sati2 + ":" +  minute2 + ":" + sekunde2 + "." + milisekunde2;
					brojac2();
				}, 10);
			}
		}

		function start(){
			if(status == 0){
				status = 1;
				brojac();
				document.getElementById("starttekst").innerHTML = "STOP";
				document.getElementById("startdugme").style.backgroundColor = "red"; 
			}
			
			else{
				status = 0;
				document.getElementById("starttekst").innerHTML = "START";
				document.getElementById("startdugme").style.backgroundColor = "forestgreen";  
			}
		}
		function start2(){
			if(status2 == 0){
				status2 = 1;
				brojac2();
			}
			else{
				status2 = 0;
			}
		}

		function reset(){
			status = 0;
			vrijeme = 0;
			clearTimeout(pokreni);
			document.getElementById('prikazvremena').innerHTML = '00:00:00.00';
			document.getElementById("starttekst").innerHTML = "START";
			document.getElementById("startdugme").style.backgroundColor = "forestgreen"; 
		}
		function reset2(){
			status2 = 0;
			vrijeme2 = 0;
			clearTimeout(pokreni2);
			document.getElementById('prikazvremena2').innerHTML = '00:00:00.00';
		}

		function startfn(){
			start();
			start2();
		}
		function resetfn(){
			reset();
			reset2();
		}
		function split(){
			if(status == 1 || status2==1){
				brsp++;
				var splitispis = document.createElement("p");
				var splittext = document.createTextNode("Split " + brsp + ": " + sati2 + ":" +  minute2 + ":" + sekunde2 + "." + milisekunde2);
				splitispis.appendChild(splittext);
				var element = document.getElementById("split1");
				element.appendChild(splitispis);

				reset2();
				clearTimeout(pokreni2);
				vrijeme2 = 0;
				status2 = 0;
				start2();
			}
			
			
		}
		function capture(){
			if(status == 1){
				brcp++;
				var captureispis = document.createElement("p");
				var capturetext = document.createTextNode("Capture " + brcp + ": " + sati + ":" +  minute + ":" + sekunde + "." + milisekunde);
				captureispis.appendChild(capturetext);
				var element = document.getElementById("capture1");
				element.appendChild(captureispis);
			}
		}
