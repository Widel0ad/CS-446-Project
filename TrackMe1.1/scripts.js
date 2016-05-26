$(document).ready(function(){
	$("#deviceInput").hide();

	$("#findMyDevice").click(function(){
		$("#deviceInput").show();
	});

	$("#findItButton").click(function(){
		$("#deviceInput").hide();
		var input_1 = document.getElementById("deviceID").value;
		document.getElementById('UserID').innerHTML = input_1;
		var input_2 = document.getElementById("make").value;
		document.getElementById('UserMake').innerHTML = input_2;
		var input_3 = document.getElementById("model").value;
		document.getElementById('UserModel').innerHTML = input_3;
		var input_4 = document.getElementById("serial").value;
		document.getElementById('UserSerial').innerHTML = input_4;

		var DeviceMarker = new google.maps.Marker({
				position:{lat:46.9969, lng:-120.5586},
				map: map,
				label: "aoaoaoaoaoa"
			});

		var infoWindow = new google.maps.InfoWindow({
			map:map,
			content: "Your Device"

		});
		infoWindow.setPosition(DeviceMarker.getPosition());
	});
});

