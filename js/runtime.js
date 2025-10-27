class S2Runtime {
	constructor(canvas){
		this.Project = {
			"name": "",
			"sprites": {
				"_stage_": {
					"scripts": [],
					"costumes": [
						{
							"name": "backdrop1",
							"data": "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"
						}
					],
					"sounds": [
						{
							"name": "pop",
							"data": "UklGRigCAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQCAADVAAMDvQdyDe8VUx08I5sk4iCrFnMGVfFf2mDEjbNpqZKo5bFHxUHh8wLtJtFHSmF9byNwCmHOROodKvMPyWqn/ZElje6YObXo3eIMnTpEYHB2tXmiaNhFZxdK5Gy1epLegWuGcZ+OyCH84jB9Xd955H83calNthyp50+4jJYDiWmRT6712VwMADxQX+9vF2lWTgokcfJZxWejtpN4mfiyaNqjCY42a1cpZqJfvEb1H8jyA8r1rc6iH6syxPHqwBSrOShR8VY0SU4rAwQs27667KgOqdG8jN28BjwugEsUWSdSXTmsExzqccWtrSmnurMb0LD2pR56P8hRylFrP30f5/nT1oG+H7ZVvqzVvPUqGIIz9UGEQCwvDBNX8p/Vs8P1v3TLnON6AnogiTaGP9I4OiTDBpLnG86GvwjAFc9R6WsIfiUgOghBtTiWI1MGL+hWzyrC6sJa0QXqSQeUItc10DzsNUojWglH7hvYd8sNy2bWb+qxApIZMyp4MKorPB30CGTzv+G41/bWrN8Q780BKRNcH6gjSB+rE68DUvNw5rrf2+Az6cz2JAbbE/IcSh+EGskPfAHk8jXnDeGG4XroZ/ShAiwQXxoQH4wdXhY9C3T+5/LK6pbnhOng7/n41AIIC0oQkhHZDjcJGQJ5+532lvTd9df5H/+OBJcIFwqKCFUEYf4="
						}
					],
					"variables": {},
					"lists": {}
				}
			},
			"messages": [
				"message1"
			]
		}
		this.updateSprites()
	}
	newSprite(name, data=""){
		this.Project.sprites[name] = data == "" ? {
			"scripts": [],
			"costumes": [
				{
					"name": "costume1",
					"data": "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAADklEQVR42mNhgAIWGAMAAH4ACYwGaSAAAAAtdEVYdFNvZnR3YXJlAGJ5LmJsb29kZHkuY3J5cHRvLmltYWdlLlBORzI0RW5jb2RlcqgGf+4AAAAASUVORK5CYII="
				}
			],
			"sounds": [],
			"info": {
				"x": 0,
				"y": 0,
				"direction": 90,
				"dirmode": "all",
				"size": 100,
				"show": true,
				"draggable": false
			},
			"variables": {},
			"lists": {}
		} : data;
		this.updateSprites()
		document.querySelector(`div.library div.item#${name}`).click();
		document.querySelector("button#costumes_t").click();
		costumes_t
	}
	setScript(spritename, scriptdata){
		this.Project.sprites[spritename].scripts = scriptdata
	}
	addCostume(spritename, name, data){
		this.Project.sprites[spritename].costumes.push({"name":name,"data":data})
	}
	addSound(spritename, name, data){
		this.Project.sprites[spritename].sounds.push({"name":name,"data":data})
	}
	removeCostume(spritename, name){
		this.Project.sprites[spritename].costumes = this.Project.sprites[spritename].costumes
														.filter(item => item["name"] !== name);
	}
	removeSound(spritename, name){
		this.Project.sprites[spritename].sounds = this.Project.sprites[spritename].sounds
													  .filter(item => item["name"] !== name);
	}
	generateHTMLitem(spritename){
		const item = document.createElement("div");
		item.classList.add("item");
		item.id = spritename;
		item.addEventListener("click", ()=>{
			this.setScript(document.querySelector("div.item.selected").id, Blockly.serialization.workspaces.save(workspace)) 
			document.querySelectorAll("div.library div.item").forEach(function(i){
				i.classList.remove("selected");
			});
			document.querySelector(`div.library div.item#${spritename}`).classList.add("selected");
			Blockly.serialization.workspaces.load(this.Project.sprites[spritename].scripts, workspace);
			stageBlockChange.forEach(function(item){
				workspace.getToolbox().getToolboxItemById(item + (spritename == "_stage_" ? "_stage1" : "_stage0")).show();
				try {
					if(workspace.getToolbox().getSelectedItem().id_.includes(item+"_stage0")){
						workspace.getToolbox().setSelectedItem(workspace.getToolbox().getToolboxItems().find(obj => obj.id_ === item+"_stage1"));
					}else if(workspace.getToolbox().getSelectedItem().id_.includes(item+"_stage1")){
						workspace.getToolbox().setSelectedItem(workspace.getToolbox().getToolboxItems().find(obj => obj.id_ === item+"_stage0"));
					}
				}catch(e){
					workspace.getToolbox().setSelectedItem(workspace.getToolbox().getToolboxItems().find(obj => obj.id_ === item+"_stage0"));
				}
				workspace.getToolbox().getToolboxItemById(item + (spritename == "_stage_" ? "_stage0" : "_stage1")).hide();

			});
		});	
		const preview = document.createElement("img");
		preview.src = `data:image/png;base64,${this.Project.sprites[spritename].costumes[0].data}`;
		const name = document.createElement("span");
		name.innerText = spritename == "_stage_" ? "Stage" : spritename;
		const infobtn = createIconBtn("infobtn", "images/486_assets.Resources_spriteInfoOff.png", "images/556_assets.Resources_spriteInfoOn.png", 18, 18);
		item.appendChild(preview);
		item.appendChild(name);
		if (spritename == "_stage_") {
			const backdrops = document.createElement("span");
			backdrops.innerText = `${this.Project.sprites[spritename].costumes.length} backdrop${this.Project.sprites[spritename].costumes.length > 1 ? "s" : ""}`;
			item.appendChild(backdrops);
		} else {
			item.appendChild(infobtn);
			item.addEventListener('contextmenu', (e) => {
				e.preventDefault();
				createContextMenu("spritecm",[
					{"name":"info","func":unimplementedDialog},
					{"name":"duplicate","func":unimplementedDialog},
					{"name":"delete","func":unimplementedDialog},
					{"name":"save to local file","func":unimplementedDialog},
					{"name":"hide","func":unimplementedDialog},
				], e.clientX, e.clientY);
			});
		}
		return item;
	}
	generateCode(workspace){
		var code = javascript.javascriptGenerator.workspaceToCode(workspace);
		code = extractMultipleFunctionBlocks(code, hatBlocks);
		return code;
	}
	updateSprites(){
		try {
			var selected = document.querySelector("div.library div.item.selected").id;
		} catch {
			var selected = "_stage_"
		}
		document.querySelectorAll("div.library div.item").forEach(function(i){
			i.remove();
		});
		Object.keys(this.Project.sprites).forEach((i)=>{
			var item = this.generateHTMLitem(i)
			if (i == selected) {
				item.classList.add("selected")
			}
 			document.querySelector("div.library " + (i == "_stage_" ? "div.stage" : "div.sprites div.list"))
				.appendChild(item);
		});
	}
}