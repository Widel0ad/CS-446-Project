$(document).ready(function(){
	$("#deviceInput").hide();

	$("#findMyDevice").click(function(){
		$("#deviceInput").show();
	});

	$("#findItButton").click(function(){
		$("#deviceInput").hide();
		$("#UserID").text($("input[name=deviceID]"));
		$("#UserMake").html("ooo");
		$("#UserModel").html("asdasfasdfasdf");
		$("#UserSerial").html("asdasfasdfasdf");
	});
});

