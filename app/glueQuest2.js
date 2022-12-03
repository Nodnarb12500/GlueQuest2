let helptext = document.getElementById('helptext');
let gamearea = document.getElementById('gamearea');

var drippy = 0;
var vanilla = 0;
var red = 0;
var banana = 0;
var grape = 0;
var blue = 0;

var puzzle1 = 0;
var greenbnt = 0;
var lightbluebnt = 0;
var darkBluebnt = 0;
var redbnt = 0;

var rockscleared = 0;
var buttonfixed = 0;

// this should get defined in the farm house but that doesnt exist yet
var wd40 = 1;

if (!localStorage.getItem('score')) {
	var weirdthingy = 0;
	var score = 0;
	var housechest = 0;
	var strip = 0;
	var glueShelfH1 = 0;
	var crowbar = 0;
	var emptybottle = 0;
	var gluevat = 0;
	updateScore();
}
else {
	var score = parseFloat(localStorage.getItem('score'));
	var weirdthingy = parseFloat(localStorage.getItem('weirdthingy'));
	var housechest = parseFloat(localStorage.getItem('housechest'));
	var strip = parseFloat(localStorage.getItem('strip'));
	var glueShelfH1 = parseFloat(localStorage.getItem('glueShelfH1'));
	var crowbar = parseFloat(localStorage.getItem('crowbar'));
	var emptybottle = parseFloat(localStorage.getItem('emptybottle'));
	var gluevat = parseFloat(localStorage.getItem('gluevat'));
	var puzzle1 = localStorage.setItem('puzzle1', puzzle1.toString());
	updateScore();
}

function goplace(a) {
  	switch (a) {

case 0:
	gamearea.innerHTML = `<img src="res/map1.png" alt="gamearea" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="83,110,126,165" title="Home" onclick="goplace(1)">
		<area shape="rect" coords="226,6,434,158" title="Glue Factory" onclick="goplace(2)">
		<area shape="rect" coords="89,336,203,454" title="Glue Strip Club" onclick="goplace(4)">
		<area shape="rect" coords="69,234,161,297" title="Glue Force Armory" onclick="goplace(3)">
		<area shape="rect" class="none" coords="520,228,625,283" title="Glue Farm House" onclick="goplace(5)">
		<area shape="rect" class="help" coords="546,397,600,451" title="Harvest Ready Glue Field" onclick="helpthing(5)"></map>`;
	helptext.innerHTML = 'Main Map';
	break;

case 1:
	gamearea.innerHTML = `<img src="res/house.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="224,433,413,475" title="Main Map" onclick="goplace(0)">
		<area shape="rect" coords="146,152,261,336" title="Kitchen" onclick="goplace(11)">
		<area shape="rect" coords="523,113,639,336" title="Stairs" onclick="goplace(12)">
		<area shape="rect" class="help" coords="43,195,117,310" title="Sexy Poster" onclick="helpthing(11)">
		<area shape="rect" class="help" coords="294,200,481,239" title="Glue Shelf" onclick="helpthing(12)"</map>`;
	helptext.innerHTML = 'you\'ve entered your house';
	break;

case 11:
	gamearea.innerHTML = `<img src="res/Kitchen.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="224,433,413,475" title="Main Room" onclick="goplace(1)">
		<area shape="circle" class="help" coords="280,355,163" title="Summoning Thingy" onclick="helpthing(13)">
		<area shape="rect" class="help" coords="227,127,530,195" title="weird glue shelf" onclick="helpthing(14)"></map>`;
	helptext.innerHTML = 'Kitchen';
	break;

case 12:
	gamearea.innerHTML = `<img src="res/UpStairsRoom-House.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="224,433,413,475" title="Main Room" onclick="goplace(1)">
		<area shape="rect" class="help" coords="232,213,361,284" title="Chest" onclick="helpthing(15)">
		<area shape="rect" class="help" coords="271,334,586,437" title="Glue Rug" onclick="helpthing(18)">
		<area shape="rect" class="help" coords="34,133,97,164" title="Novelty Glue" onclick="helpthing(16)">
		<area shape="rect" class="help" coords="527,138,600,269" title="wardrobe" onclick="helpthing(17)">
		<area shape="rect" coords="1,232,106,359" title="Save?" onclick="helpthing(19)"></map>`;
	helptext.innerHTML = 'Upstairs Room';
	break;

case 20:
	gamearea.innerHTML = `<img src="res/FactoryB1.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="441,159,510,270" title="Floor 1" onclick="goplace(2)">
		<area shape="rect" coords="466,397,536,463" title="Vanilla" onclick="helpthing(201)">
		<area shape="rect" coords="372,399,441,466" title="red flavor" onclick="helpthing(202)">
		<area shape="rect" coords="271,396,336,461" title="banana" onclick="helpthing(203)">
		<area shape="rect" coords="173,395,241,459" title="grape" onclick="helpthing(204)">
		<area shape="rect" coords="75,396,140,460" title="blue flavor" onclick="helpthing(205)"></map>`;
	helptext.innerHTML = 'Factory Basement';
	break;

case 2:
	gamearea.innerHTML = `<img src="res/Factory1.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="224,433,413,475" title="Main Map" onclick="goplace(0)">
		<area shape="rect" coords="60,140,132,255" title="Room" onclick="goplace(21)">
		<area shape="rect" coords="370,141,443,256" title="Basement" onclick="goplace(20)">
		<area shape="rect" coords="479,140,551,255" title="Up Stairs" onclick="goplace(22)">
		<area shape="rect" class="help" coords="247,282,310,335" title="Glue Vat Thing" onclick="helpthing(22)">
		<area shape="rect" class="help" coords="155,275,220,337" title="Glue Vat Thing" onclick="helpthing(21)"></map>`;
	helptext.innerHTML = 'You have Entered the Factory, the Factory seems to be fully autonomus';
	break;

case 21:
	gamearea.innerHTML = `<img src="res/FactorypuzzleRoom1.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="255,410,345,480" title="Back" onclick="goplace(2)">
		<area shape="circle" coords="48,196,14" title="Power Button" onclick=helpthing(210)>
		<area shape="rect" coords="13,358,112,445" title="Massive Green Button" onclick=helpthing(211)>
		<area shape="rect" coords="137,355,238,458" title="Massive Light-blue Button" onclick=helpthing(212)>
		<area shape="rect" coords="390,360,490,460" title="Massive Dark-blue Button" onclick=helpthing(213)>
		<area shape="rect" coords="510,358,615,460" title="Massive Red Button" onclick=helpthing(214)></map>`;
	helptext.innerHTML = 'Factory Room 1';
	break;

case 22:
	gamearea.innerHTML = `<img src="res/Factory2.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="60,140,132,255" title="Room" onclick="goplace(221)">
		<area shape="rect" coords="370,141,443,256" title="Floor 1" onclick="goplace(2)">
		<area shape="rect" coords="479,140,551,255" title="Up Stairs" onclick="goplace(24)"></map>`;
	helptext.innerHTML = 'Floor 2 ';
	break;

case 221:
	if (rockscleared == 1) {
		if (buttonfixed == 1) {
			gamearea.innerHTML = `<img src="res/FactorypuzzleRoom2.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
				<area shape="rect" coords="255,410,345,480" title="Back" onclick="goplace(22)">
				<area shape="circle" coords="48,196,14" title="Power Button" onclick=helpthing()>
				<area shape="rect" coords="13,358,112,445" title="Massive Green Button" onclick=helpthing()>
				<area shape="rect" coords="137,355,238,458" title="Massive Brown Button" onclick=helpthing()>
				<area shape="rect" coords="390,360,490,460" title="Massive Dark-Yellow Button" onclick=helpthing()>
				<area shape="rect" coords="510,358,615,460" title="Massive Red Button" onclick=helpthing()></map>`;
			helptext.innerHTML = 'Factory Room 2';
		}
		else {
			// Show the broken button, but cleared shoot
			gamearea.innerHTML = `<img src="res/FactorypuzzleRoom2.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
				<area shape="rect" coords="255,410,345,480" title="Back" onclick="goplace(22)">
				<area shape="rect" coords="" title="" onclick=helpthing()>
				<area shape="rect" coords="" title="" onclick=helpthing()></map>`;
			helptext.innerHTML = 'Factory Room 2';
		}
	}
	else {
		if (buttonfixed == 1) {
			// Show the filled shoot, but fixed button
			gamearea.innerHTML = `<img src="res/FactorypuzzleRoom2.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
				<area shape="rect" coords="255,410,345,480" title="Back" onclick="goplace(22)">
				<area shape="rect" coords="" title="" onclick=helpthing()>
				<area shape="rect" coords="" title="" onclick=helpthing()></map>`;
			helptext.innerHTML = 'Factory Room 2';
		}
	}
	break;

case 23:
	helptext.innerHTML = 'Doesnt Exist yet';
	break;

case 3:
	gamearea.innerHTML = `<img src="res/crowbarroom.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="224,433,413,475" title="Main Map" onclick="goplace(0)">
		<area shape="rect" coords="415,175,630,210" title="Crowbarf" onclick="helpthing(31)">
		<area shape="rect" coords="25,245,418,390" title="Glue Table" onclick="helpthing(32)">
		<area shape="rect" coords="26,21,350,101" title="Glue assult rifle" onclick="helpthing(33)">
		<area shape="rect" coords="385,26,601,105" title="splattery glue gun" onclick="helpthing(34)"></map>`;
	helptext.innerHTML= 'You\'ve entered the armory'
	break;

case 4:
	gamearea.innerHTML = `<img src="res/StripClub.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
		<area shape="rect" coords="224,433,413,475" title="Main Room" onclick="goplace(0)">
		<area shape="rect" class="hidden" coords="125,300,375,390" onclick="helpthing(4)"></map>`;
	helptext.innerHTML = 'You\'ve entered the sexy sex place';
	break;

case 5:
	helptext.innerHTML = 'Doesnt Exist yet';
	break;

}}

function helpthing(b) {
	switch(b) {

case 11:
	helptext.innerHTML = 'Sexy sex poster for the sexy sex place near by.';
	break;

case 12:
	if (glueShelfH1 == 0) {
		helptext.innerHTML = 'My collection of normal glue bottles, most of them are empty already.<br>(+1 Glue)';
		glueShelfH1 = 1;
		score += 1;
		updateScore();
	}
	else {
		if (emptybottle == 0) {
			helptext.innerHTML = 'My collection of normal glue bottles, all of them are empty now.<br>(empty bottle +1)';
			emptybottle = 1;
		}
		else {
			helptext.innerHTML = 'My collection of normal glue bottles, all of them are empty now.';
		}
	}
	break;

case 13:
	if (weirdthingy == 0) {
		if (housechest == 1) {
			helptext.innerHTML = 'I\'ve already used this but maybe there are more weird thingys around somewhere';
		}
		else {
			helptext.innerHTML = 'My neat glue summoning thingy, unfortunatly I need weird items to use it.';
		}
	}
	if (weirdthingy > 0) {
		gamearea.innerHTML = '<img src="res/Kitchen.png" class="invert" width="640px" height="480px">'
		setTimeout(function(){
			gamearea.innerHTML = `<img src="res/Kitchen.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
			<area shape="rect" coords="224,433,413,475" title="Main Room" onclick="goplace(1)">
			<area shape="circle" class="help" coords="280,355,163" title="Summoning Thingy" onclick="helpthing(13)">
			<area shape="rect" class="help" coords="227,127,530,195" title="weird glue shelf" onclick="helpthing(14)"></map>`;
		helptext.innerHTML = 'Wew I got some Glue to slurp down<br>(-1 weirdthingy)';
		weirdthingy = weirdthingy - 1;
		score += 1;
		updateScore();
		},3000);
	}
	break;

case 14:
	if (drippy > 0) {
		helptext.innerHTML = `continue drinking the glue?<br>
			<a onclick="drippy += 1;helpthing(14);">yes</a>/
			<a onclick="document.getElementById(\'helptext\').innerHTML = \'nah I want fresh glue\';drippy = 0;">no</a>`;
	}
	if (drippy == 0) {
		helptext.innerHTML = `My collection of glues that came out of the portal, some of it is weird and wants to be upside down.
			<br>Stick your head under the dropping glue?
			<a onclick="document.getElementById(\'helptext\').innerHTML = \'you drink some of the glue as it drips out\';drippy += 1;">yes</a>
			/<a onclick="document.getElementById(\'helptext\').innerHTML = \'nah I want fresh glue\';">no</a>`;
	}
	if (drippy == 4){
		helptext.innerHTML = 'You drank a glue bottle worth of glue';
		drippy = 0;
		score += 1;
		updateScore();
	}
	break;

case 15:
	if (housechest == 0) {
		gamearea.innerHTML = '<img src="res/UpStairsRoom-House.png" class="collect" width="640px" height="480px">';
		setTimeout(function(){
			gamearea.innerHTML = `<img src="res/UpStairsRoom-House.png" usemap="#imgmap" width="640px" height="480px"><map name="imgmap">
				<area shape="rect" coords="224,433,413,475" title="Main Room" onclick="goplace(1)">
				<area shape="rect" class="help" coords="232,213,361,284" title="Chest" onclick="helpthing(15)">
				<area shape="rect" class="help" coords="271,334,586,437" title="Glue Rug" onclick="helpthing(18)">
				<area shape="rect" class="help" coords="34,133,97,164" title="Novelty Glue" onclick="helpthing(16)">
				<area shape="rect" class="help" coords="527,138,600,269" title="wardrobe" onclick="helpthing(17)">
				<area shape="rect" coords="1,232,106,359" title="Save?" onclick="helpthing(19)"></map>`;
			weirdthingy += 1;
			housechest = 1;
			helptext.innerHTML = 'A weird chest containing a weird thingy for using the summoning thingy in the kitchen.<br>(+1 Weirdthingy)';
		},1000);
	}
	else {
		helptext.innerHTML = 'A weird empty chest';
	}
	break;

case 16:
	helptext.innerHTML = 'my awesome collection of weird glues. To cool to drink<br>(This deletes your save)';
	localStorage.clear();
	break;

case 17:
	helptext.innerHTML = 'Its just a standing box with warded robes in it, smells like glue though.';
	break;

case 18:
	helptext.innerHTML = 'Its a rug with filled glue bottles printed on it.';
	break;

case 19:
  helptext.innerHTML = 'Game Saved';
  localStorage.setItem('score', score.toString());
  localStorage.setItem('weirdthingy', weirdthingy.toString());
  localStorage.setItem('housechest', housechest.toString());
  localStorage.setItem('strip', strip.toString());
  localStorage.setItem('glueShelfH1', glueShelfH1.toString());
  localStorage.setItem('crowbar', crowbar.toString());
  localStorage.setItem('emptybottle', emptybottle.toString());
  localStorage.setItem('gluevat', gluevat.toString());
	break;

case 201:
	if (vanilla == 1){
		helptext.innerHTML = 'You\'ve drank all the normal glue the factory has made and have to wait for it to make more'
	}
	else {
		helptext.innerHTML = `Normal flavor<br>Drink the glue?
		<a onclick="document.getElementById(\'helptext\').innerHTML = \'You slurp down the normal glue\';vanilla = 1;score += 1;updateScore();">yes</a>
		/<a onclick="document.getElementById(\'helptext\').innerHTML = \'You decide to try out the other glues first\'">no</a>`;
	}
	break;

case 202:
	if (red == 1){
		helptext.innerHTML = 'You\'ve drank all the red glue the factory has made and have to wait for it to make more'
	}
	else {
		helptext.innerHTML = `Red flavor<br>Drink the glue?
		<a onclick="document.getElementById(\'helptext\').innerHTML = \'You slurp down the red glue\';red = 1;score +=1;updateScore();">yes</a>
		/<a onclick="document.getElementById(\'helptext\').innerHTML = \'You decide to try out the other glues first\'">no</a>`;
	}
	break;

case 203:
	if (banana == 1){
		helptext.innerHTML = 'You\'ve drank all the Banana flavored glue the factory has made and have to wait for it to make more'
	}
	else {
		helptext.innerHTML = `banana flavor<br>Drink the glue?
			<a onclick="document.getElementById(\'helptext\').innerHTML = \'You slurp down the banana glue\';banana = 1;score += 1; updateScore();">yes</a>
			/<a onclick="document.getElementById(\'helptext\').innerHTML = \'You decide to try out the other glues first\'">no</a>`;
	}
	break;

case 204:
	if (grape == 1){
		helptext.innerHTML = 'You\'ve drank all the grape flavored glue the factory has made and have to wait for it to make more'
	}
	else {
		helptext.innerHTML = `grape flavor<br>Drink the glue?
			<a onclick="document.getElementById(\'helptext\').innerHTML = \'You slurp down the grape glue\';grape = 1;score += 1;updateScore();">yes</a>
			/<a onclick="document.getElementById(\'helptext\').innerHTML = \'You decide to try out the other glues first\'">no</a>`;
	}
	break;

case 205:
	if (blue == 1){
		helptext.innerHTML = 'You\'ve drank all the blue glue the factory has made and have to wait for it to make more'
	}
	else {
		helptext.innerHTML = `blue flavor<br>Drink the glue?
			<a onclick="document.getElementById(\'helptext\').innerHTML = \'You slurp down the blue glue\';blue = 1;score += 1;updateScore();">yes</a>
			/<a onclick="document.getElementById(\'helptext\').innerHTML = \'You decide to try out the other glues first\'">no</a>`;
	}
	break;

case 21:
	if (gluevat == 0) {
		if (crowbar == 0) {
			if (emptybottle == 1) {
				helptext.innerHTML = 'I need a hard thingy theres probly something in the armory near my house';
			}
			else {
				helptext.innerHTML = `The top layer of glue is dried but the glue underneath is probly fine.
				I\'ll need a glue bottle and a hard thing to bonk the hardness out of the way`;
			}
		}
		if (crowbar == 1) {
			if (emptybottle == 0) {
				helptext.innerHTML = 'I need an empty glue bottle there should be one in my house';
			}
			else {
				helptext.innerHTML = `you filled the glue bottle after bonking the hardness out of the top glue layer
				<br>(+1 Glue)`;
				score += 1;
				gluevat = 1;
				updateScore();
			}
		}
	}
	else {
		helptext.innerHTML = 'No more glue to consume';
	}
	break;

case 22:
	helptext.innerHTML = 'mostly dried glue inside this giant glue container.';
	break;

case 210:
	if (puzzle1 == 0){
		helptext.innerHTML = `the buttons start flashing I probably need to press them in the correct order to get some glue to consume.
			<br>If I fuck up something I should be able to restart the machine and try again`;
	puzzle1 = 1;
	}
	if (puzzle1 == 3){
		helptext.innerHTML = 'The machine is running and doesnt have any materials';
		localStorage.setItem('puzzle1', puzzle1.toString());
	}
	if (puzzle1 == 2) {
		helptext.innerHTML = `Turn the machine off and on again?
		<br><a onclick="puzzle1 = 0;helpthing(210)">yes</a>/
		<a onclick="document.getElementById(\'helptext\').innerHTML = \'This puzzle SUCKS and I HATE IT!!\'">no</a>`;
	}
	break;

case 211:
	if (puzzle1 == 1) {
		if (darkBluebnt == 1) {
			helptext.innerHTML = 'the green button stays lit';
			greenbnt = 1;
		}
		else {
			puzzle1 = 2;
			greenbnt = 0;
			lightbluebnt = 0;
			darkBluebnt = 0;
			redbnt = 0;
			helptext.innerHTML = 'Oops';
		}
	}
	else {
		helptext.innerHTML = 'The button is dim and either unpushable or irresponsive';
	}
	break;

case 212:
	if (puzzle1 == 1) {
		if (greenbnt == 1) {
			helptext.innerHTML = 'Nice i got some glue!<br>(+1 Glue)';
			score += 1;
			updateScore();
			puzzle1 = 3;
		}
		else {
			puzzle1 = 2;
			greenbnt = 0;
			lightbluebnt = 0;
			darkBluebnt = 0;
			redbnt = 0;
			helptext.innerHTML = 'Damnit';
		}
	}
	else {
		helptext.innerHTML = 'The button is dim and either unpushable or irresponsive';
	}
	break;

case 213:
	if (puzzle1 == 1) {
		if (redbnt == 1) {
			darkBluebnt = 1;
			helptext.innerHTML = 'the dark blue button stays lit';
		}
		else {
			puzzle1 = 2;
			helptext.innerHTML = 'Oof';
			greenbnt = 0;
			lightbluebnt = 0;
			darkBluebnt = 0;
			redbnt = 0;
		}
	}
	else {
		helptext.innerHTML = 'The button is dim and either unpushable or irresponsive';
	}
	break;

case 214:
	if (puzzle1 == 1) {
		redbnt = 1;
		helptext.innerHTML = 'the red button stays lit';
	}
	else {
		helptext.innerHTML = 'The button is dim and either unpushable or irresponsive';
	}
	break;

case 221:
	helptext.innerHTML = 'glue';
	break;

case 31:
	if (crowbar == 0){
		helptext.innerHTML = 'whoa a crowbar<br>(+1 hard thingy)';
		crowbar = 1;
	}
	else {
		helptext.innerHTML = 'The magic crowbar says, "No! You can\'t have another."'
	}
	break;

case 32:
	helptext.innerHTML = 'is a table';
	break;

case 33:
	helptext.innerHTML = 'Automatic glue blaster the clip is just a glue bottle';
	break;

case 34:
	helptext.innerHTML = 'Splattery glue guns, extremely weird shotguns with gluebottle pistol clips';
	break;

case 4:
	if (strip == 0) {
		gamearea.innerHTML = '<img src="res/StripClub.png" class="invert" usemap="#imgmap" width="640px" height="480px">'
		setTimeout(function(){
			gamearea.innerHTML = `<img src="res/StripClub.png" usemap="#imgmap" width="640px" height="480px">
				<map name="imgmap"><area shape="rect" coords="224,433,413,475" title="Main Room" onclick="goplace(0)">
				<area shape="rect" class="hidden" coords="125,300,375,390" onclick="helpthing(4)"></map>`;
			helptext.innerHTML = '(+1 Weirdthingy)';
			weirdthingy +=1;
			strip = 1;
		},1000);
	}
	else {
	  // leave this empty
	}
	break;

case 5:
	helptext.innerHTML = 'Whoa thats harvestable glue I have to go in through the main farm house though';
	break;

}}

function updateScore() {
	document.getElementById('score').innerHTML = score;
}
