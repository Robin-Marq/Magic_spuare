$(document).ready(function() {
	

	$("#button").on("mouseup",function() {
	
		if($("#a").val() < 21 ) {
			alert("Bitte geben Sie eine Zahl größer als 21 ein!");
			return;
		}
	let mzahl = $("#a").val()*1;

	let a = Math.floor(mzahl/21);
	let b = mzahl%21;
	
	$("#div1").html(a+b);
	$("#div2").html(a);
	$("#div3").html(12*a);
	$("#div4").html(7*a);
	$("#div5").html(11*a);
	$("#div6").html(8*a);
	$("#div7").html(b);
	$("#div8").html(2*a);
	$("#div9").html(5*a);
	$("#div10").html(10*a);
	$("#div11").html(3*a);
	$("#div12").html(3*a+b);
	$("#div13").html(4*a);
	$("#div14").html(2*a+b);
	$("#div15").html(6*a);
	$("#div16").html(9*a);

	alert("Addieren Sie jeweils die ganzen Reihen und Spalten. Es kommt jeweils ihre Zahl dann heraus!");
});

});

