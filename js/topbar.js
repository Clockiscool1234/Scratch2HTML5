function createTBmenus(){
	const tbmenu = document.createElement("div");
	tbmenu.style.display = "flex"
	tbmenu.style.alignItems = "center"
	tbmenu.style.margin = "0 10px"
	const languageButton = createIconMenu("languageButton", 
		"images/674_assets.Resources_languageButtonOff.png", 
		"images/547_assets.Resources_languageButtonOn.png", 
		[{"name":"English","func":unimplementedDialog}], 
		19, 19);
	const fileMenu = createMenu("fileMenu", "File", [
		{"name":"New","func":unimplementedDialog},
		{"name":"Upload from your computer","func":openProjectFilePicker},
		{"name":"Download to your computer","func":unimplementedDialog}
	]);
	const editMenu = createMenu("editMenu", "Edit", [
		{"name":"Undelete","func":unimplementedDialog},
		{"name":"Small stage layout","func":unimplementedDialog},
		{"name":"Turbo mode","func":unimplementedDialog}
	]);
	const tipsMenuBtn = createMenuBtn("tipsMenuBtn", "Tips");
	const aboutMenuBtn = createMenuBtn("aboutMenubtn", "About");
	tipsMenuBtn.addEventListener("click",unimplementedDialog);
	aboutMenuBtn.addEventListener("click",aboutDialog);
	tbmenu.appendChild(languageButton);
	tbmenu.appendChild(fileMenu);
	tbmenu.appendChild(editMenu);
	tbmenu.appendChild(tipsMenuBtn);
	tbmenu.appendChild(aboutMenuBtn);
	return tbmenu; 
}
function createTBtools(){
	const tbtool = document.createElement("div");
	tbtool.id = "tbtool"
	tbtool.style.display = "flex"
	tbtool.style.alignItems = "center"
	tbtool.style.margin = "0 10px 0 124px"
	const duplicateButton = createIconBtn("duplicateButton", "images/528_assets.Resources_copyTool.png", "", 15, 15)
	const deleteButton = createIconBtn("deleteButton", "images/595_assets.Resources_cutTool.png", "", 15, 15)
	const growButton = createIconBtn("growButton", "images/647_assets.Resources_growTool.png", "", 15, 15)
	const shrinkButton = createIconBtn("shrinkButton", "images/586_assets.Resources_shrinkTool.png", "", 15, 15)
	const helpButton = createIconBtn("helpButton", "images/718_assets.Resources_helpTool.png", "", 15, 15)
	tbtool.appendChild(duplicateButton);
	tbtool.appendChild(deleteButton);
	tbtool.appendChild(growButton);
	tbtool.appendChild(shrinkButton);
	tbtool.appendChild(helpButton);
	return tbtool; 
}
function createTopBar(){
	const topbar = document.createElement("div");
	topbar.classList.add("topbar");
	const scratchlogo = createIconBtn("logo", "images/483_assets.Resources_scratchlogoOff.png", "images/640_assets.Resources_scratchlogoOn.png", 82, 24)
	const tbmenu = createTBmenus();
	const tbtools = createTBtools();
	topbar.appendChild(scratchlogo);
	topbar.appendChild(tbmenu);
	topbar.appendChild(tbtools);
	document.querySelector("#app").appendChild(topbar);
}
