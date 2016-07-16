$(document).ready(function(){

// Topic Select => Form Entry
	$(".dropdown-menu")
		.on("mouseenter","li",function(){
			$(this).toggleClass("hover")
		})

		.on("mouseleave","li",function(){
			$(this).toggleClass("hover")       
		})

		.on("click","li",function(){
			var transfer = $(this).attr('value');
			$("#businessType span").text(transfer);	
		});

	$(".solo")
	.on('click','button', function(){
		var transfer = $(this).attr('value');
		$("#businessType span").text(transfer);
		
			
	});

// Form Entry => JSON Output
	$("#generateCode").click(function(){
		var businessType = $("#businessType span").text();
		var city = $("#city").val();
		var state = $("#state").val();
		var zip = $("#zip").val();
		var street = $("#streetAddress").val();
		var busName = $("#name").val();
		var url = $("#urlAddress").val();
		var email= $('#emailContact').val();
		var phoneNum = $("#telephone").val();
		var rating = $("#rating").val();
		var reviews =$("#reviews").val();
		var priceRange = $("#price").val();
		var reservation = $("#reservation").hasClass('active');
		var menu = $("#menuAddress").val();
		if ($("#visa").hasClass('active')) {var payment = "Visa, ";}
		if ($("#masterCard").hasClass('active')) {payment += "Master Card, ";}
		if ($("#discover").hasClass('active')) {payment += "Discover, ";}
		if ($("#amex").hasClass('active')) {payment += "Amex, ";}
		if ($("#applePay").hasClass('active')) {payment += "ApplePay, ";}
		if ($("#androidPay").hasClass('active')) {payment += "AndroidPay, ";}
		if ($("#bitcoin").hasClass('active')) {payment += "Bitcoin, ";}

		var outputScript = '<script type="application/ld+json"> { ';
		outputScript += '"@context" : "http://schema.org",';
		outputScript +='"@type" : "' + businessType + '", ';
		outputScript +='"address" : {';
		outputScript +='"@type": "PostalAddress",';
		outputScript +='"addressLocality": "' + city + '", ';
		outputScript +='"addressRegion": "' + state + '", ';
		outputScript +='"postalCode": "' + zip + '", ';
		outputScript +='"streetAddress": "' + street + '" }, ';
		outputScript +='"name":"' + busName + '",';
		outputScript +='"url":"' + url + '",';
		outputScript +='"email":"' + email + '",';
		outputScript +='"telephone":"' + phoneNum + '",';
		outputScript +='"aggregateRating":{ "@type":"AggregateRating", "ratingValue":"' + rating + '",';
		outputScript +='"reviewCount":"' + reviews + '"},';
		outputScript +='"priceRange":"' + priceRange + '",';
		outputScript +='"acceptsReservations":"' + reservation +'",';
		outputScript +='"menu":"' + menu + '",';
		outputScript +='"paymentAccepted":"' + payment + '",';
		outputScript += '} </script>'

		$("#output").text(outputScript);
		
	});

});

