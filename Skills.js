$(document).ready(function() {
		var SKILLS = localStorage.getItem("skillsApp").split(",");
		//alert("SKILLS[7] HTML ready " + SKILLS[7]);

	$("a").each(function() {
		var linkText = $(this).text().replace(/\//g,"/<wbr>");
		$(this).html(linkText);
	});
	//alert($("#title").attr("video"));
	if($("#title").attr("video")) {
		$("#title #youtubeicon").show(100);
	}
	
	$("#title #youtubeicon").click(function() {
		//alert($("#youtubevideo").css("display"));
		if ($("#youtubevideo").css("display") == "none") {
			$("#youtubevideo").show(1000);
		} else {
			$("#youtubevideo").hide(1000);
		}	
	});
	
	var popup1 = ""
		+ "<div id='popup1'>"
		+ "<h4>Learned?</h4>"
		+ "	<table width='100%' border='0' cellspacing='8px'>" 
		+ "		<tr>"
		+ "			<td class='action' width='50%' id='yes'>Yes</td>"
		+ "			<td class='action' width='50%' id='no'>Not yet</td>"
		+ "		</tr>"
		+ "	</table>"
		+ "</div>";
	
	$("body").append(popup1);
	
	var popup2 = ""
		+ "<div id='popup2'>"
		+ "<h4>Practised at -</h4>"
		+ "	<table width='100%' border='0' cellspacing='8px'>"
		+ "		<tr>"
		+ "			<td class='action' width='50%' id='lab'>Lab</td>"
		+ "			<td class='action' width='50%' id='clinic'>Clinic</td>"
		+ "		</tr>		"
		+ "	</table>"
		+ "</div>";
	
	$("body").append(popup2);	
	var SKILLCur = localStorage.getItem("skillsAppCur").split("|");
	if (SKILLCur[2]*1 > 0) {
		$("#yes").addClass("disable");
	}
	
	$("#yes").click(function() {
		var SKILLS = localStorage.getItem("skillsApp").split(",");
		//alert("SKILLS[7] HTML YES clicked \n" + SKILLS.length + "\n" + SKILLS[7]);	
	//alert("skillsAppCur: " + localStorage.getItem("skillsAppCur"));
	//alert($(this).hasClass("disable"));
		if (!$(this).hasClass("disable")) {	
			var SKILLS = localStorage.getItem("skillsApp").split(",");
			SKILLCur = localStorage.getItem("skillsAppCur").split("|");
			//alert("SKILLS[7]:..." + SKILLS[7]);
			var tmpStr = "";
			for (i=0; i < SKILLS.length; i++) {
				var ATTR = SKILLS[i].split("|");
				if (ATTR[0] == SKILLCur[0]) {
					ATTR[2] = ATTR[1];
					//alert("found: " + ATTR[0] + "/" + ATTR[1] + "/" + ATTR[2]);
				}
				tmpStr += ATTR[0] + "|" + ATTR[1] + "|" + ATTR[2] + "|" + ATTR[3] + "|" + ATTR[4] + ",";
			}
			localStorage.setItem("skillsApp", tmpStr.replace(/,$/,""));
		var SKILLS = localStorage.getItem("skillsApp").split(",");
		//alert("SKILLS[7] HTML YES updated \r" + SKILLS[7]);				
			$(this).addClass("disable");
			$("#popup2").show(1000);
			$("#popup1").hide(1000);
		}
	});
	
	$("#no").click(function() {
		var SKILLS = localStorage.getItem("skillsApp").split(",");
		
		var tmpStr = "";
		for (i=0; i < SKILLS.length; i++) {
			var ATTR = SKILLS[i].split("|");
			if (ATTR[0] == SKILLCur[0]) {
				ATTR[2] = 0;
				ATTR[3] = 0;
				ATTR[4] = 0;
			}
			tmpStr += ATTR[0] + "|" + ATTR[1] + "|" + ATTR[2] + "|" + ATTR[3] + "|" + ATTR[4] + ",";
		}
		localStorage.setItem("skillsApp", tmpStr.replace(/,$/,""));
		$("#popup1").hide(1000);
	});
	
	

	$("#lab").click(function() {
		if (!$(this).hasClass("disable")) {
			var SKILLS = localStorage.getItem("skillsApp").split(",");
			
			var tmpStr = "";
			for (i=0; i < SKILLS.length; i++) {
				var ATTR = SKILLS[i].split("|");
				if (ATTR[0] == SKILLCur[0]) {
					ATTR[3] = ATTR[1];
				}
				tmpStr += ATTR[0] + "|" + ATTR[1] + "|" + ATTR[2] + "|" + ATTR[3] + "|" + ATTR[4] + ",";
			}
			localStorage.setItem("skillsApp", tmpStr.replace(/,$/,""));
			$(this).addClass("disable");
			if ($(this).parent().find(".disable").length > 1) {
				$("#popup2").hide(1000);
			}
		}
	});
	
	$("#clinic").click(function() {
		if (!$(this).hasClass("disable")) {
			var SKILLS = localStorage.getItem("skillsApp").split(",");
			
			var tmpStr = "";
			for (i=0; i < SKILLS.length; i++) {
				var ATTR = SKILLS[i].split("|");
				if (ATTR[0] == SKILLCur[0]) {
					ATTR[4] = ATTR[1];
				}
				tmpStr += ATTR[0] + "|" + ATTR[1] + "|" + ATTR[2] + "|" + ATTR[3] + "|" + ATTR[4] + ",";
			}
			localStorage.setItem("skillsApp", tmpStr.replace(/,$/,""));
			$(this).addClass("disable");
			if ($(this).parent().find(".disable").length > 1) {
				$("#popup2").hide(1000);
			}
		}			
	});	
	

	
});


