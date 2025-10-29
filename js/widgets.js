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
		menuitems.innerText = i.name;
		menuitems.addEventListener("click", ()=>{document.querySelector("button#"+id).blur();i.func()});
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
		menuitems.innerText = i.name;
		menuitems.addEventListener("click", ()=>{document.querySelector("button#"+id).blur();i.func()});
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
function createContextMenu(id, option, x, y) {
	document.querySelectorAll("ul.contextmenu").forEach(function(i){
		i.remove();
	});
	const menu = document.createElement("ul");
	menu.id = id;
	menu.classList.add("contextmenu")
	option.forEach(function(i){
		var menuitems = document.createElement("li");
		menuitems.innerText = i.name;
		menuitems.addEventListener("click", ()=>{document.querySelector("ul.contextmenu#"+id).remove();i.func()});
		menu.appendChild(menuitems);
	})
	menu.style.top = y + "px";
	menu.style.left = x + "px";
	document.querySelector("div#app").appendChild(menu);
}
function createDialog(id, title, content, buttons=null, html=false, w=null, h=null){
	const dialog = document.createElement('div');
	dialog.classList.add('dialog');
	dialog.id = id;
	dialog.style.width = w+"px";
	dialog.style.height = h+"px";
	const titletext = document.createElement('span');
	titletext.textContent = title;
	const contentdiv = document.createElement('div');
	if (!html) {
		const text = document.createElement('span');
		text.innerHTML = content.replace(/\n/g, "<br>");
		contentdiv.appendChild(text);
	} else {
		contentdiv.appendChild(content);
	}
	const footer = document.createElement('footer');
	if(buttons){
		Object.keys(buttons).forEach((item)=>{
			button = document.createElement('button');
			button.type = 'button';
			button.textContent = buttons[item].text;
			button.addEventListener("click", function(){typeof(buttons[item].func) == "undefined" ? null : buttons[item].func(); dialog.remove()} )
			footer.appendChild(button);
		});
	} else {
		button = document.createElement('button');
		button.type = 'button';
		button.textContent = "OK";
		button.addEventListener("click", function(){dialog.remove()})
		footer.appendChild(button);
	}
	dialog.appendChild(titletext);
	dialog.appendChild(contentdiv);
	dialog.appendChild(footer);
	document.querySelector("div#app").appendChild(dialog);
}

document.addEventListener('click', function(event) {
	document.querySelectorAll("ul.contextmenu").forEach((i)=>{
	    if (i && !i.contains(event.target)) {
	        i.remove();
	    }
    });
});