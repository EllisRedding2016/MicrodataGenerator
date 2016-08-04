$(document).ready(function(){

// Topic Select => Form Entry
	$(".dropdown-menu")
		.on("mouseenter","li",function(){
			$(this).toggleClass("hover")
		})

		.on("mouseleave","li",function(){
			$(this).toggleClass("hover")       
		})

		.on("click","#selectRestaurant",function(){
			$('#restaurant').css("display","block");
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

/*	$("#selectRestaurant")
	.on('click','button',function(){
		$('.restaurant').css("display","block");
	});
*/
// Form Entry => JSON Output
	$("#generateCode").click(function(){
		var businessType = $("#businessType span").text();
		var city = $("#city").val();
		var state = $("#state").val();
		var zip = $("#zip").val();
		var street = $("#streetAddress").val();
		var busName = $("#name").val();
		var url = $("#url").val();
		var email= $('#email').val();
		var phoneNum = $("#phoneNumber").val();
		var rating = $("#rating").val();
		var reviews =$("#reviews").val();
		var priceRange = $("#price").val();
		var reservation = $("#reservation").hasClass('active');
		var menu = $("#menuAddress").val();
		var cuisine = $('#cuisine').val();
		var payment = "";
		if ($("#visa").hasClass('active')) {payment = "Visa, ";}
		if ($("#masterCard").hasClass('active')) {payment += "Master Card, ";}
		if ($("#discover").hasClass('active')) {payment += "Discover, ";}
		if ($("#amex").hasClass('active')) {payment += "Amex, ";}
		if ($("#applePay").hasClass('active')) {payment += "ApplePay, ";}
		if ($("#androidPay").hasClass('active')) {payment += "AndroidPay, ";}
		if ($("#bitcoin").hasClass('active')) {payment += "Bitcoin, ";}
		if(payment != null){payment = payment.substring(0,payment.length-2);}

		var outputScript = '&lt;script type="application/ld+json"> { <br>';
		outputScript += '"@context" : "http://schema.org",<br>';
		outputScript +='"@type" : "' + businessType + '", <br>';
		outputScript +='"address" : {<br>';
		outputScript +='   "@type": "PostalAddress",<br>';
		outputScript +='   "addressLocality": "' + city + '", <br>';
		outputScript +='   "addressRegion": "' + state + '", <br>';
		outputScript +='   "postalCode": "' + zip + '", <br>';
		outputScript +='   "streetAddress": "' + street + '" }, <br>';
		outputScript +='"name":"' + busName + '",<br>';
		outputScript +='"url":"' + url + '",<br>';
		outputScript +='"email":"' + email + '",<br>';
		outputScript +='"telephone":"' + phoneNum + '",<br>';
		outputScript +='"aggregateRating":{<br>   "@type":"AggregateRating",<br>'
		outputScript +='   "ratingValue":"' + rating + '",<br>';
		outputScript +='   "reviewCount":"' + reviews + '"},<br>';
		outputScript +='"priceRange":"' + priceRange + '",<br>';
		if(businessType === 'Restaurant'){
			outputScript +='"servesCuisine": ["' + cuisine + '"],'
			outputScript +='"acceptsReservations":"' + reservation +'",<br>';
			outputScript +='"menu":"' + menu + '",<br>';
		}
		outputScript +='"paymentAccepted":"' + payment + '"<br>';
		outputScript += '} &lt;/script>'

		$("#output").html(outputScript);
		
	});

});

