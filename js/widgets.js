function createIconBtn(id, img, secondary_img, w, h){
	const iconbtn = document.createElement("button");
	const style = document.createElement("style");
	iconbtn.id = id
	style.innerText = `
		button#${id} {
			border: none;
			padding: 0;
			background: none;
			background-image: url(${img});
			width: ${w}px;
			height: ${h}px;
			${secondary_img == "" ? "" : "/*"}
			background-repeat: no-repeat;
			background-position: center;
			width: ${w + 8}px;
			height: ${h + 8}px;
			${secondary_img == "" ? "" : "*/"}
		}
		button#${id}:hover {
			background-image: url(${secondary_img == "" ? img : secondary_img});
			${secondary_img == "" ? "" : "/*"}
			background-color: var(--over);
			border-radius: 4px;
			${secondary_img == "" ? "" : "*/"}
		}
	`
	iconbtn.appendChild(style)
	return iconbtn;
};
function createMenu(id, name, option) {
	const menubtn = document.createElement("button");
	menubtn.innerText = name;
	menubtn.id = id
	menubtn.type = "menu"
	const menu = document.createElement("ul");
	option.forEach(function(i){
		var menuitems = document.createElement("li");
		menuitems.innerText = i;
		menu.appendChild(menuitems);
	})
	menubtn.appendChild(menu);
	return menubtn;
}
function createIconMenu(id, img, secondary_img, option, w, h) {
	const menubtn = document.createElement("button");
	const style = document.createElement("style");
	style.innerText = `
		button#${id}[type="menuicon"]{
			background-image: url(${img});
			width: ${w}px;
			height: ${h}px;
		}
		button#${id}[type="menuicon"]:hover{
			background-image: url(${secondary_img});
		}
		button#${id}[type="menuicon"]:focus{
			background-image: url(${img});
		}
	`
	menubtn.id = id
	menubtn.type = "menuicon"
	const menu = document.createElement("ul");
	option.forEach(function(i){
		var menuitems = document.createElement("li");
		menuitems.innerText = i;
		menu.appendChild(menuitems);
	})
	menubtn.appendChild(style);
	menubtn.appendChild(menu);
	return menubtn;
}
function createMenuBtn(id, name) {
	const menubtn = document.createElement("button");
	menubtn.innerText = name;
	menubtn.id = id
	menubtn.type = "menubtn"
	return menubtn;
}