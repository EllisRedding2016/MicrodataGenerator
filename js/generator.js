$(document).ready(function(){

	$("#businessType span").text($('h1').text());
// Topic Select => Form Entry
	$(".dropdown-menu")
		.on("mouseenter","li",function(){
			$(this).toggleClass("hover")
		})

		.on("mouseleave","li",function(){
			$(this).toggleClass("hover")       
		});

		// .on("click","#selectRestaurant",function(){
		// 	$('#restaurant').css("display","block");
		// });

		// .on("click","li",function(){
		// 	var transfer = $(this).attr('value');
		// 	$("#businessType span").text(transfer);	
		//});

	$(".solo")
	.on('click','button', function(){
		var transfer = $(this).attr('value');
		$("#businessType span").text(transfer);			
	});

	var automotive =["AutoBodyShop", "AutoDealer", "AutoPartsStore", "AutoRental", "AutoRepair", "AutoWash", "GasStation", "MotorcycleDealer", "MotorcycleRepair"]
	var emergencyService =["FireStation", "Hospital", "PoliceStation"]
	var entertainment =["AmusementPark", "ArtGallery", "Casino", "ComedyClub", "MovieTheater", "NightClub"]
	var financialServices =["AccountingService", "AutomatedTeller", "BankOrCreditUnion", "InsuranceAgency"]
	var restaurantFoodservice=["Bakery", "BarOrPub", "Brewery", "CafeOrCoffeeShop", "FastFoodRestaurant", "IceCreamShop", "Restaurant", "Winery"]
	var healthBeauty =["BeautySalon", "DaySpa", "HairSalon", "HealthClub", "NailSalon", "TattooParlor"]
	var homeConstruction =["Electrician", "GeneralContractor", "HVACBusiness", "HousePainter", "Locksmith", "MovingCompany", "Plumber", "RoofingContractor"]
	var lodging =["BedAndBreakfast", "Hostel", "Hotel", "Motel"]
	var sports =["BowlingAlley", "ExerciseGym", "GolfCourse", "HealthClub", "PublicSwimmingPool", "SkiResort", "SportsClub", "StadiumOrArena", "TennisComplex"]
	var store =["AutoPartsStore", "BikeStore", "BookStore", "ClothingStore", "ComputerStore", "ConvenienceStore", "DepartmentStore", "ElectronicsStore", "Florist", "FurnitureStore", "GardenStore", "GroceryStore", "HardwareStore", "HobbyShop", "HomeGoodsStore", "JewelryStore", "LiquorStore", "MensClothingStore", "MobilePhoneStore", "MovieRentalStore", "MusicStore", "OfficeEquipmentStore", "OutletStore", "PawnShop", "PetStore", "ShoeStore", "SportingGoodsStore", "TireShop", "ToyStore", "WholesaleStore"]
	
	createListItems(automotive,"automotive");
	createListItems(emergencyService,"emergencyService");
	createListItems(entertainment,"entertainment");
	createListItems(financialServices,"financialServices");
	createListItems(restaurantFoodservice,"restaurantFoodservice");
	createListItems(healthBeauty,"healthBeauty");
	createListItems(homeConstruction,"homeConstruction");
	createListItems(lodging,"lodging");
	createListItems(sports,"sports");
	createListItems(store,"store");



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
		var hours = "";
		if($('#hours1').val() != "") { hours = ('"' + $('#hours1').val() + '"' );}
		if($('#hours2').val() != "") { hours = hours + ', "' + $('#hours2').val() + '"';}
		if($('#hours3').val() != "") { hours = hours + ', "' + $('#hours3').val() + '"';}
		if($('#hours4').val() != "") { hours = hours + ', "' + $('#hours4').val() + '"';}
		if($('#hours5').val() != "") { hours = hours + ', "' + $('#hours5').val() + '"';}
		if($('#hours6').val() != "") { hours = hours + ', "' + $('#hours6').val() + '"';} 
		if($('#hours7').val() != "") { hours = hours + ', "' + $('#hours7').val() + '"';} 

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
		if(city != "" && state != "" && zip != "" && street != "")
		{
			outputScript +='"address" : {<br>';
			outputScript +='   "@type": "PostalAddress",<br>';
			outputScript +='   "addressLocality": "' + city + '", <br>';
			outputScript +='   "addressRegion": "' + state + '", <br>';
			outputScript +='   "postalCode": "' + zip + '", <br>';
			outputScript +='   "streetAddress": "' + street + '" }, <br>';
		}		
		if(busName != ""){ outputScript +='"name":"' + busName + '",<br>';}
		if(url != "") {outputScript +='"url":"' + url + '",<br>';}
		if(email != "") {outputScript +='"email":"' + email + '",<br>';}
		if(phoneNum != "") {outputScript +='"telephone":"' + phoneNum + '",<br>';}
		if(hours != "") {outputScript += '"openingHours": [ <br> ' + hours +'], <br>'}
		if( rating != "" && reviews != "")
		{
			outputScript +='"aggregateRating":{<br>   "@type":"AggregateRating",<br>'
			outputScript +='   "ratingValue":"' + rating + '",<br>';
			outputScript +='   "reviewCount":"' + reviews + '"},<br>';
		}		
		if(priceRange !="") {outputScript +='"priceRange":"' + priceRange + '",<br>';}		
		if(businessType === 'Restaurant')
		{
			outputScript +='"servesCuisine": ["' + cuisine + '"],'
			outputScript +='"acceptsReservations":"' + reservation +'",<br>';
			outputScript +='"menu":"' + menu + '",<br>';
		}		
		if(payment !="" ) {outputScript +='"paymentAccepted":"' + payment + '"<br>';}

		if(outputScript.substring(outputScript.length-5,outputScript.length-4)===","){outputScript=outputScript.substring(0,outputScript.length-5) + "<br>";}
		outputScript += '} &lt;/script>'

		$("#output").html(outputScript);
		
	});

});

function createListItems (array, destination){
	var pasteString = ""

	for (var i = 0; i<array.length; i++){
		pasteString += '<li><a href= "/MicrodataGenerator/' + array[i] + '.html">' + array[i] + '</a></li>';
	}

	document.getElementById(destination).innerHTML = pasteString;
}

// <!DOCTYPE html>
// <html>
// <body>

// <p id="demo"></p>

// <script>
// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;
// </script>

// </body>
// </html>
