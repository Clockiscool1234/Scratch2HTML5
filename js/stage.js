function createPlayer(){
	const bg = document.createElement("div");
	bg.classList.add("bg")
	const player = document.createElement("div");
	player.classList.add("player")
	const controls = document.createElement("div");
	controls.classList.add("controls");
	const fullscreen = createIconBtn("fullscreen","images/589_assets.Resources_fullscreenOff.png","images/589_assets.Resources_fullscreenOff.png",25,20);
	fullscreen.addEventListener("click", function(){
		Array.from(document.querySelector("div.player").classList).includes("fullscreen") ? 
		document.querySelector("div.player").classList.remove("fullscreen") : 
		document.querySelector("div.player").classList.add("fullscreen")
	});
	const title = document.createElement("input");
	title.type = "text"
	const greenf = createIconBtn("greenf","images/563_assets.Resources_greenflagOff.png","images/633_assets.Resources_greenflagOn.png",21,21);
	const stop = createIconBtn("stop","images/688_assets.Resources_stopOff.png","images/546_assets.Resources_stopOn.png",21,21);
	controls.appendChild(fullscreen);
	controls.appendChild(title);
	controls.appendChild(greenf);
	controls.appendChild(stop);
	player.appendChild(controls);
	const main = document.createElement("canvas");
	main.classList.add("main");
	main.width = 480;
	main.height = 360;
	player.appendChild(main);
	document.querySelector(".splitter .left").appendChild(player);
	document.querySelector(".splitter .left").appendChild(bg);
}
function createLibrary() {
	const library = document.createElement("div");
	library.classList.add("library");
	const stage = document.createElement("div");
	stage.classList.add("stage");
	const sttp = document.createElement("div");
	sttp.classList.add("topbar");
	stage.appendChild(sttp);
	const sprites = document.createElement("div");
	sprites.classList.add("sprites");
	const sptp = document.createElement("div");
	sptp.classList.add("topbar");
	const spls = document.createElement("div");
	spls.classList.add("list");
	const spritel = createIconBtn("spritelist","images/701_assets.Resources_libraryOff.png","images/580_assets.Resources_libraryOn.png", 19, 19);
	const nsprite = createIconBtn("newsprite","images/591_assets.Resources_paintbrushOff.png","images/529_assets.Resources_paintbrushOn.png", 19, 19);
	const usprite = createIconBtn("uploadsprite","images/687_assets.Resources_importOff.png","images/611_assets.Resources_importOn.png", 19, 19);
	const csprite = createIconBtn("camerasprite","images/639_assets.Resources_cameraOff.png","images/531_assets.Resources_cameraOn.png", 19, 19);
	const label1 = document.createElement("span");
	label1.innerText = "Sprites"
	const label2 = document.createElement("span");
	label2.innerText = "New sprite:"
	sptp.appendChild(label1);
	sptp.appendChild(label2);
	sptp.appendChild(spritel);
	sptp.appendChild(nsprite);
	sptp.appendChild(usprite);
	sptp.appendChild(csprite);
	sprites.appendChild(sptp);
	sprites.appendChild(spls);
	library.appendChild(stage);
	library.appendChild(sprites);
	document.querySelector(".splitter .left").appendChild(library);
}