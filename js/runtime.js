class S2Runtime {
	constructor(canvas){
		this.zip = new JSZip();
		this.EmptyProject = {
			"objName": "Stage",
			"variables": [],
			"lists": [],
			"scripts": [],
			"sounds": [],
			"costumes": [{
					"costumeName": "backdrop1",
					"baseLayerID": 1,
					"baseLayerMD5": "739b5e2a2435f6e1ec2993791b423146.png",
					"bitmapResolution": 1,
					"rotationCenterX": 240,
					"rotationCenterY": 180
				}],
			"currentCostumeIndex": 0,
			"penLayerMD5": "5c81a336fab8be57adc039a8a2b33ca9.png",
			"penLayerID": 0,
			"tempoBPM": 60,
			"videoAlpha": 0.5,
			"children": [],
			"info": {
				"userAgent": "Scratch 2.0 HTML5 Editor",
				"videoOn": false,
				"scriptCount": 0,
				"flashVersion": "WIN 32,0,0,182",
				"spriteCount": 0,
				"swfVersion": "v461"
			}
		}
		this.Project = this.EmptyProject;
		this.Images = {"0":"","1":""};
		this.Sounds = {};
		this.scale = 1.8;
		this.updateSprites();
	}
	newSprite(name, data=""){
		this.Project.children.push(data == "" ? {
			"objName": name,
			"variables": [],
			"lists": [],
			"scripts": [],
			"sounds": [],
			"costumes": [],
			"currentCostumeIndex": 0,
			"scratchX": 0,
			"scratchY": 0,
			"scale": 1,
			"direction": 90,
			"rotationStyle": "normal",
			"isDraggable": false,
			"indexInLibrary": 1,
			"visible": true,
			"spriteInfo": {
			}
		} : data);
		this.updateSprites();
		document.querySelector(`div.library div.item#${name}`).click();
		document.querySelector("button#costumes_t").click();
		costumes_t
	}
	getAllSprites(){
		var sprites = this.Project.children.filter(obj => Boolean(obj.objName));
		sprites.unshift(this.Project)
		return sprites;
	}
	getAllSpriteNames(){
		var names = [];
		getAllSprites().forEach((i)=>{
			names.push(i.objName);
		});
		return names;
	}
	getSprite(name = document.querySelector("div.item.selected").id){
		return name === "Stage" ? this.Project : this.Project.children.find(obj => obj.objName === name);
	}
	getCostume(spritename = undefined, name){
		return this.Images[this.getSprite(spritename).costumes.find(obj => obj.costumeName === name).baseLayerID]; 
	}
	setScript(spritename, scriptdata){
		this.getSprite(spritename).scripts = this.convertBlocklyToScratch2(scriptdata);
	}
	addCostume(spritename = undefined, name, data){
		this.getSprite(spritename).push({"name":name,"data":data})
	}
	loadProject(zipdata){
		this.zip.loadAsync(zipdata).then((zip)=>{
			document.querySelectorAll("div.library div.item").forEach(function(i){
				i.classList.remove("selected");
			});
			Blockly.serialization.workspaces.load({},workspace);
			Object.keys(zip.files).filter(obj => obj.endsWith(".png")).forEach((item)=>{
			    zip.file(item).async("base64").then((content)=>{
	        		this.Images[item.replace(".png","")] = content;
	        	});
	        });
            zip.file("project.json").async("text").then((json)=>{
            	Object.assign(this.Project, this.EmptyProject, JSON.parse(json));
	            this.updateSprites();
	            document.querySelector("div.library div.item#Stage").click();
            });
        }).catch(function(error) {
            console.error("Error loading ZIP file:", error);
        });
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
			Blockly.serialization.workspaces.load(this.convertScratch2ToBlockly(this.getSprite(spritename).scripts), workspace);
			document.querySelector("#costumes_t").innerText = spritename == "Stage" ? "Backdrops" : "Costumes";
			stageBlockChange.forEach((item)=>{
				workspace.getToolbox().getToolboxItemById(item + (spritename == "Stage" ? "_stage1" : "_stage0")).show();
				try {
					if(workspace.getToolbox().getSelectedItem().id_.includes(item+"_stage0")){
						workspace.getToolbox().setSelectedItem(workspace.getToolbox().getToolboxItems().find(obj => obj.id_ === item+"_stage1"));
					}else if(workspace.getToolbox().getSelectedItem().id_.includes(item+"_stage1")){
						workspace.getToolbox().setSelectedItem(workspace.getToolbox().getToolboxItems().find(obj => obj.id_ === item+"_stage0"));
					}
				}catch(e){
					workspace.getToolbox().setSelectedItem(workspace.getToolbox().getToolboxItems().find(obj => obj.id_ === item+"_stage0"));
				}
				workspace.getToolbox().getToolboxItemById(item + (spritename == "Stage" ? "_stage0" : "_stage1")).hide();

			});
		});	
		const preview = document.createElement("img");
		preview.src = `data:image/png;base64,${this.getCostume(spritename, this.getSprite(spritename).costumes[0].costumeName)}`;
		const name = document.createElement("span");
		name.innerText = spritename == "Stage" ? "Stage" : spritename;
		const infobtn = createIconBtn("infobtn", "images/486_assets.Resources_spriteInfoOff.png", "images/556_assets.Resources_spriteInfoOn.png", 18, 18);
		item.appendChild(preview);
		item.appendChild(name);
		if (spritename == "Stage") {
			const backdrops = document.createElement("span");
			backdrops.innerText = `${this.getSprite(spritename).costumes.length} backdrop${this.getSprite(spritename).costumes.length > 1 ? "s" : ""}`;
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
	updateSprites(){
		try {
			var selected = document.querySelector("div.library div.item.selected").id;
		} catch {
			var selected = "Stage"
		}
		document.querySelectorAll("div.library div.item").forEach(function(i){
			i.remove();
		});
		this.getAllSprites().forEach((i)=>{
			var item = this.generateHTMLitem(i.objName)
			if (i.objName == selected) {
				item.classList.add("selected")
			}
 			document.querySelector("div.library " + (i.objName == "Stage" ? "div.stage" : "div.sprites div.list"))
				.appendChild(item);
		});
	}
	#findBlockDefinition(type) {
        for (const category of blocks) {
            for (const definition of category) {
                if (definition.type === type) {
                    return definition;
                }
            }
        }
        return null;
    }
    #generateBlocklyId() {
        return Math.random().toString(36).substring(2, 12);
    }
    #createValueInput(value, check = null) {
        if (check === "Boolean" && (value === false || value === null)) {
            return undefined;
        }
        if (value === null) {
            return undefined;
        }
        if (Array.isArray(value) && typeof value[0] === 'string') {
            return { "block": this.#convertScratch2BlockToBlockly(value) };
        }
        if (typeof value === 'number' || (!isNaN(Number(value)) && String(value).trim() !== '')) {
            return {
                "shadow": {
                    "type": "math_number",
                    "id": this.#generateBlocklyId(),
                    "fields": { "NUM": Number(value) }
                }
            };
        }
        return {
            "shadow": {
                "type": "text",
                "id": this.#generateBlocklyId(),
                "fields": { "TEXT": String(value) }
            }
        };
    }
    #convertScratch2ChainToBlockly(scratchBlockChain, isStatement = true) {
        if (!scratchBlockChain || scratchBlockChain.length === 0) return [];
        const actualBlocks = isStatement && Array.isArray(scratchBlockChain[0]) && Array.isArray(scratchBlockChain[0][0]) 
            ? scratchBlockChain[0] : scratchBlockChain;

        const blocklyChain = [];
        let nextBlock = null;
        for (let i = actualBlocks.length - 1; i >= 0; i--) {
            const scratchBlock = actualBlocks[i];
            const effectiveScratchBlock = Array.isArray(scratchBlock[0]) ? scratchBlock[0] : scratchBlock;
            
            const currentBlock = this.#convertScratch2BlockToBlockly(effectiveScratchBlock, nextBlock);
            
            if (currentBlock) {
                nextBlock = currentBlock; 
                blocklyChain.unshift(currentBlock);
            }
        }
        return blocklyChain;
    }
    #convertScratch2BlockToBlockly(scratchBlock, nextBlocklyBlock = null) {
        if (!scratchBlock || scratchBlock.length === 0 || typeof scratchBlock[0] !== 'string') return null;

        const blockType = scratchBlock[0];
        const args = scratchBlock.slice(1);
        const blockDef = this.#findBlockDefinition(blockType);

        if (!blockDef) {
            if (blockType === 'xpos' || blockType === 'answer' || blockType === '*' || blockType === 'timeAndDate') {
                return { "type": blockType, "id": this.#generateBlocklyId() };
            }
            console.warn(`Block definition not found for: ${blockType}`);
            return null;
        }

        const blocklyBlock = { "type": blockType, "id": this.#generateBlocklyId() };

        const inputs = {};
        const fields = {};
        let scratchArgIndex = 0;

        const allArgsDefs = [...(blockDef.args0 || []), ...(blockDef.args1 || [])];

        allArgsDefs.forEach(argDef => {
            const argName = argDef.name;

            if (argDef.type.startsWith("field_") && argDef.type !== "field_dropdown" && argDef.type !== "field_label_serializable" && argDef.type !== "field_variable") {
                return;
            }
            if (scratchArgIndex >= args.length) return;

            const scratchArgValue = args[scratchArgIndex];

            if (argDef.type === "input_value") {
                const inputObj = this.#createValueInput(scratchArgValue, argDef.check);
                if (inputObj) {
                    inputs[argName] = inputObj;
                }

            } else if (argDef.type === "input_statement") {
                if (Array.isArray(scratchArgValue) && scratchArgValue.length > 0) {
                    const statementChain = this.#convertScratch2ChainToBlockly(scratchArgValue);
                    if (statementChain.length > 0) {
                        inputs[argName] = { "block": statementChain[0] };
                    }
                }
            } else if (argDef.type === "field_label_serializable" || argDef.type === "field_dropdown" || argDef.type === "field_variable") {
                fields[argName] = scratchArgValue;
            }

            scratchArgIndex++;
        });

        if (Object.keys(inputs).length > 0) blocklyBlock.inputs = inputs;
        if (Object.keys(fields).length > 0) blocklyBlock.fields = fields;

        if (nextBlocklyBlock) {
            blocklyBlock.next = { "block": nextBlocklyBlock };
        }

        return blocklyBlock;
    }
    convertScratch2ToBlockly(scratch2Script) {
        if (!scratch2Script || scratch2Script.length === 0) {
            return { "blocks": { "languageVersion": 0, "blocks": [] } };
        }

        const topLevelBlocks = [];

        scratch2Script.forEach(script => {
            const x = script[0] * this.scale;
            const y = script[1] * this.scale;
            const blockChain = script[2];

            if (!blockChain || blockChain.length === 0) return;
            
            const convertedChain = this.#convertScratch2ChainToBlockly(blockChain, false); 

            if (convertedChain.length > 0) {
                const firstBlock = convertedChain[0];
                firstBlock.x = x;
                firstBlock.y = y;
                topLevelBlocks.push(firstBlock);
            }
        });

        return {
            "blocks": {
                "languageVersion": 0,
                "blocks": topLevelBlocks
            }
        };
    }


    #extractValueFromInput(blocklyInput, typeCheck) {
        if (!blocklyInput.shadow && !blocklyInput.block) {
        	if (typeCheck === "Boolean") return false; // Rule: empty boolean input is false
            return null;
        }

        const source = blocklyInput.block || blocklyInput.shadow;

        if (source.type === 'math_number' && source.fields && source.fields.NUM !== undefined) {
            return source.fields.NUM;
        }
        if (source.type === 'text' && source.fields && source.fields.TEXT !== undefined) {
            return source.fields.TEXT;
        }

        return this.#convertBlocklyBlockToScratch2(source);
    }
    #convertBlocklyBlockToScratch2(blocklyBlock) {
        const blockType = blocklyBlock.type;
        const scratch2Array = [blockType];
        const blockDef = this.#findBlockDefinition(blockType);

        if (!blockDef) {
            if (blocklyBlock.output) {
                return [blockType];
            }
            console.warn(`Definition not found for block type: ${blockType}`);
            return [blockType];
        }

        const allArgsDefs = [...(blockDef.args0 || []), ...(blockDef.args1 || [])];

        for (const argDef of allArgsDefs) {
            const argName = argDef.name;
            const blocklyInputs = blocklyBlock.inputs || {};
            const blocklyFields = blocklyBlock.fields || {};

            if (argDef.type.startsWith("field_") && argDef.type !== "field_dropdown" && argDef.type !== "field_label_serializable" && argDef.type !== "field_variable") {
                continue;
            }

            if (argDef.type === "input_value") {
                const inputData = blocklyInputs[argName];
                const value = inputData ? this.#extractValueFromInput(inputData, argDef.check) : this.#extractValueFromInput({}, argDef.check);
                scratch2Array.push(value);

            } else if (argDef.type === "input_statement") {
                const inputData = blocklyInputs[argName];
                const statementChain = inputData && inputData.block 
                    ? this.#convertBlocklyChainToScratch2(inputData.block) 
                    : null;
                scratch2Array.push(statementChain);

            } else if (argDef.type === "field_label_serializable" || argDef.type === "field_dropdown" || argDef.type === "field_variable") {
                const value = blocklyFields[argName] !== undefined ? blocklyFields[argName] : null;
                scratch2Array.push(value);
            }
        }
        return scratch2Array;
    }
    #convertBlocklyChainToScratch2(topBlock) {
        const chain = [];
        let currentBlock = topBlock;

        while (currentBlock) {
            const scratch2Block = this.#convertBlocklyBlockToScratch2(currentBlock);
            if (scratch2Block) {
                chain.push(scratch2Block);
            }
            currentBlock = currentBlock.next ? currentBlock.next.block : null;
        }
        return chain;
    }
    convertBlocklyToScratch2(blocklyJson) {
    	if(blocklyJson.blocks){
	        const scratch2Script = [];
	        const topLevelBlocks = blocklyJson.blocks.blocks;

	        for (const block of topLevelBlocks) {
	            const x = block.x / this.scale || 0;
	            const y = block.y / this.scale || 0;
	            
	            const blockChain = this.#convertBlocklyChainToScratch2(block);

	            if (blockChain.length > 0) {
	                scratch2Script.push([x, y, blockChain]);
	            }
	        }

	        return scratch2Script;
	    }else{
	    	return [];
	    }
    }
	generateJSCode(workspace){
		var code = javascript.javascriptGenerator.workspaceToCode(workspace);
		code = extractMultipleFunctionBlocks(code, hatBlocks);
		return code;
	}
}

/*class S2Runtime {
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
					"lists": {},
			"width": 102,
					"costumeIndex": 0
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
			"properties": {
				"x": 0,
				"y": 0,
				"direction": 90,
				"dirmode": "all",
				"size": 100,
				"visible": true,
				"draggable": false
			},
			"variables": {},
			"lists": {},
			"costumeIndex": 0
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
			stageBlockChange.forEach((item)=>{
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
}*/

/*
	generateScratch2Code(code){
		var originalCode = code;
		var scripts = [];
		if(originalCode.blocks){
			originalCode.blocks.blocks.forEach((item)=>{
				var script = this.#generateScript(item);
				scripts.push(script);
			});
		};
		return scripts;
	}
	generateBlocklyCode(scratch2Script) {
	    if (!scratch2Script || scratch2Script.length === 0) {
	        return { "blocks": { "languageVersion": 0, "blocks": [] } };
	    }

	    const topLevelBlocks = [];

	    scratch2Script.forEach(script => {
	        const x = script[0];
	        const y = script[1];
	        const blockChain = script[2];

	        if (!blockChain || blockChain.length === 0) return;

	        const convertedChain = this.#convertScratchBlockChainToBlockly(blockChain);

	        if (convertedChain.length > 0) {
	            const firstBlock = convertedChain[0];
	            firstBlock.x = x;
	            firstBlock.y = y;
	            topLevelBlocks.push(firstBlock);
	        }
	    });

	    return {
	        "blocks": {
	            "languageVersion": 0,
	            "blocks": topLevelBlocks
	        }
	    };
	}
	#generateBlocklyId() {
	    return Math.random().toString(36).substring(2, 15);
	}
	#createValueInput(value) {
	    if (Array.isArray(value) && typeof value[0] === 'string') {
	        return { "block": this.#convertScratchBlockToBlockly(value) };
	    }
	    
	    if (typeof value === 'number' || (!isNaN(Number(value)) && String(value).trim() !== '')) {
	        return {
	            "shadow": {
	                "type": "math_number",
	                "id": this.#generateBlocklyId(),
	                "fields": {
	                    "NUM": Number(value)
	                }
	            }
	        };
	    }
	    
	    return {
	        "shadow": {
	            "type": "text",
	            "id": this.#generateBlocklyId(),
	            "fields": {
	                "TEXT": String(value)
	            }
	        }
	    };
	}
	#createField(fieldName, value) {
	    let field = {};
	    field[fieldName] = value;
	    return field;
	}
	#convertScratchBlockToBlockly(scratchBlock, nextBlocklyBlock = null) {
	    if (!scratchBlock || scratchBlock.length === 0 || !scratchBlock[0]) return null;
	    const blockType = scratchBlock[0];
	    if (typeof blockType !== 'string') return this.#convertScratchBlockToBlockly(blockType, nextBlocklyBlock);
	    
	    const args = scratchBlock.slice(1);
	    const blockDef = this.#findBlock(blockType);

	    if (!blockDef) { /* ... (fallback/error handling) ...  }

	    const blocklyBlock = { "type": blockType, "id": this.#generateBlocklyId() };

	    const inputs = {};
	    const fields = {};

	    const allArgsDefs = [...(blockDef.args0 || []), ...(blockDef.args1 || [])];

	    allArgsDefs.forEach(argDef => {
	        const argName = argDef.name;

	        if (argDef.type.startsWith("field_") && argDef.type !== "field_dropdown") {
	            return;
	        }


	        const scratchArgValue = args[scratchArgIndex];

	        if (argDef.type === "input_value") {
	            inputs[argName] = this.#createValueInput(scratchArgValue);

	        } else if (argDef.type === "input_statement") {
			    if (Array.isArray(scratchArgValue) && scratchArgValue.length > 0) {
			        const statementChain = this.#convertScratchBlockChainToBlockly(scratchArgValue);
			        if (statementChain.length > 0) {
			            inputs[argName] = { "block": statementChain[0] };
			        }
			    }
			} else if (argDef.type === "field_label_serializable" || argDef.type === "field_dropdown" || argDef.type === "field_variable") {
	            fields[argName] = scratchArgValue;
	        }

	        scratchArgIndex++;
	    });

	    if (Object.keys(inputs).length > 0) blocklyBlock.inputs = inputs;
	    if (Object.keys(fields).length > 0) blocklyBlock.fields = fields;

	    if (nextBlocklyBlock) {
	        blocklyBlock.next = { "block": nextBlocklyBlock };
	    }

	    return blocklyBlock;
	}

	#convertScratchBlockChainToBlockly(scratchBlockChain) {
	    if (!scratchBlockChain || scratchBlockChain.length === 0) return [];

	    const actualBlocks = scratchBlockChain; 

	    const blocklyChain = [];
	    let nextBlock = null;

	    for (let i = actualBlocks.length - 1; i >= 0; i--) {
	        const scratchBlock = actualBlocks[i];
	        
	        const effectiveScratchBlock = Array.isArray(scratchBlock[0]) ? scratchBlock[0] : scratchBlock;
	        
	        const currentBlock = this.#convertScratchBlockToBlockly(effectiveScratchBlock, nextBlock);
	        
	        if (currentBlock) {
	            nextBlock = currentBlock; 
	            blocklyChain.unshift(currentBlock);
	        }
	    }

	    return blocklyChain;
	}
	#findBlock(scratchType){
		for (const category of blocks) {
	        for (const definition of category) {
	            if (definition.type === scratchType) {
	                return definition;
	            }
	        }
	    }
	    return null;
	}
	#generateScript(block){
		var script = [[]];
		var currentBlock = block;
		var lastBlock = false;
		var hasOutput = false;
		if(block.x && block.y){
			var inInput = false;
			script = [block.x, block.y, []];
		}else{
			var inInput = true;
		};
		while(!lastBlock){
			var blockdef = this.#findBlock(currentBlock.type);
			if(blockdef){
				if(blockdef.output && !(block.x && block.y)){
					var hasOutput = true;
					script.pop()
				}
				var block = [];
				block.push(currentBlock.type);
				if(currentBlock.fields){
					Object.values(currentBlock.fields).forEach((item)=>{
						block.push(item);
					});
				}
				if(currentBlock.inputs){
					Object.keys(currentBlock.inputs).forEach((item)=>{
						if(currentBlock.inputs[item].block){
							block.push(this.#generateScript(currentBlock.inputs[item].block));
						} else if(currentBlock.inputs[item].shadow){
							Object.values(currentBlock.inputs[item].shadow.fields).forEach((item)=>{
								block.push(item);
							});
						}
					});
				}
				hasOutput ? script.push(block) : script[script.length-1].push(block);
				if (currentBlock.next) {
					currentBlock = currentBlock.next.block;
				} else {
					lastBlock = true;
				}
			}else{
				return []
			}
		};
		if(hasOutput && inInput){
			script = script[script.length-1];
		}
		return script;
	}*/