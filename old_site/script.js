function HoverGames()
{
	var element = document.getElementById("games_button");
	element.src = "img/Games Hover.png";

}
function OutGames()
{
	var element = document.getElementById("games_button");
	element.src = "img/Games Idle.png";
}



function HoverModels()
{
	var element = document.getElementById("3d_models_button");
	element.src = "img/3D Models Hover.png";
}
function OutModels()
{
	var element = document.getElementById("3d_models_button");
	element.src = "img/3D Models Idle.png";
}

function HoverArts()
{
	var element = document.getElementById("arts_button");
	element.src = "img/ARTS Hover.png";
}
function OutArts()
{
	var element = document.getElementById("arts_button");
	element.src = "img/Arts Idle.png";
}


function HoverPlayMarket()
{
	var element = document.getElementById("play_market_button");
	element.src = "img/Play Market Hover.png";
}
function OutPlayMarket()
{
	var element = document.getElementById("play_market_button");
	element.src = "img/Play Market Idle.png";
}


function HoverPlayDemo()
{
	var element = document.getElementById("play_demo_button");
	element.src = "img/Play Demo Hover.png";
}
function OutPlayDemo()
{
	var element = document.getElementById("play_demo_button");
	element.src = "img/Play Demo Idle.png";
}








function Button_click_sound()
{
	var audio = new Audio('sfx/gem.mp3');
audio.play();
}