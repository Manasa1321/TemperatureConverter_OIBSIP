function fun() {
	var cel = document.getElementById('cel').value;
	var fah = document.getElementById('fah').value;
	r1.innerHTML="";
	r2.innerHTML="";
	r3.innerHTML="";
	
	if(cel.length==0 && fah.length!=0){
		var c=((fah-32)*5)/9;
		c=Math.floor(c*100)/100;
		document.getElementById('cel').value=c;
		r1.innerHTML="= "+fah+"°F";
		r2.innerHTML="";
		r3.innerHTML="";
	}
	else if(fah.length==0&&cel.length!=0){
		var f=cel*(9/5)+32;
		f=Math.floor(f*100)/100;
		document.getElementById('fah').value=f;
		r2.innerHTML="= "+cel+"°C";
		r1.innerHTML="";
		r3.innerHTML="";
	}
	else if(cel.length!=0 && fah.length!=0){
		var f=cel*(9/5)+32;
		var c=((fah-32)*5)/9;
		c=Math.floor(c*100)/100;
		f=Math.floor(f*100)/100;
		document.getElementById('cel').value=c;
		document.getElementById('fah').value=f;
		r1.innerHTML=fah+"°F = "+c+"°C";
		r2.innerHTML=cel+"°C = "+f+"°F";
	}
	else{
		r1.innerHTML="";
		r2.innerHTML="";
		r3.innerHTML="*Please Give an Input";
	}
}