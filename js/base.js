function createSplitter(){
	const splitter = document.createElement("div");
	splitter.classList.add("splitter")
	const leftside = document.createElement("div");
	leftside.classList.add("left")
	const rightside = document.createElement("div");
	rightside.classList.add("right")
	splitter.appendChild(leftside);
	splitter.appendChild(rightside);
	document.querySelector("#app").appendChild(splitter);
}
function createTabs(){
	const tabs = document.createElement("div");
	tabs.classList.add("tabs");
	const scripts = document.createElement("button");
	scripts.innerText = "Scripts";
	scripts.id = "scripts_t";
	scripts.classList.add("active")
	scripts.addEventListener("click",function(){
		document.querySelector("#scripts_t").classList.add("active");
		document.querySelector("#costumes_t").classList.remove("active");
		document.querySelector("#sounds_t").classList.remove("active");
		document.querySelector(".scripts_c").classList.add("active");
		document.querySelector(".costumes_c").classList.remove("active");
		document.querySelector(".sounds_c").classList.remove("active");
	});
	const costumes = document.createElement("button");
	costumes.innerText = "Backdrops";
	costumes.id = "costumes_t";
	costumes.addEventListener("click",function(){
		document.querySelector("#scripts_t").classList.remove("active");
		document.querySelector("#costumes_t").classList.add("active");
		document.querySelector("#sounds_t").classList.remove("active");
		document.querySelector(".scripts_c").classList.remove("active");
		document.querySelector(".costumes_c").classList.add("active");
		document.querySelector(".sounds_c").classList.remove("active");
	});
	const sounds = document.createElement("button");
	sounds.innerText = "Sounds";
	sounds.id = "sounds_t";
	sounds.addEventListener("click",function(){
		document.querySelector("#scripts_t").classList.remove("active");
		document.querySelector("#costumes_t").classList.remove("active");
		document.querySelector("#sounds_t").classList.add("active");
		document.querySelector(".scripts_c").classList.remove("active");
		document.querySelector(".costumes_c").classList.remove("active");
		document.querySelector(".sounds_c").classList.add("active");
	});
	tabs.appendChild(scripts);
	tabs.appendChild(costumes);
	tabs.appendChild(sounds);
	const content = document.createElement("div");
	content.classList.add("content");
	const scriptcontent = document.createElement("div");
	scriptcontent.classList.add("scripts_c");
	scriptcontent.classList.add("active");
	const costumecontent = document.createElement("div");
	costumecontent.classList.add("costumes_c");
	const soundcontent = document.createElement("div");
	soundcontent.classList.add("sounds_c");
	content.appendChild(scriptcontent);
	content.appendChild(costumecontent);
	content.appendChild(soundcontent);
	document.querySelector(".splitter .right").appendChild(tabs);
	document.querySelector(".splitter .right").appendChild(content);
}
function extractMultipleFunctionBlocks(codeString, functionNames) {
    const extractedBlocks = {};
    const normalizedCode = codeString.replace(/\s+/g, ' ').trim(); 
    functionNames.forEach(functionName => {
        extractedBlocks[functionName] = [];
        const escapedFunctionName = functionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const funcRegex = new RegExp(`${escapedFunctionName}\\s*\\(`, 'g');
        let match;
        while ((match = funcRegex.exec(normalizedCode)) !== null) {
            let startIndex = match.index;
            let blockStart = normalizedCode.indexOf('{', startIndex);
            if (blockStart === -1) {
                continue;
            }
            let braceCount = 1;
            let blockEnd = -1;
            for (let i = blockStart + 1; i < normalizedCode.length; i++) {
                const char = normalizedCode[i];
                if (char === '{') {
                    braceCount++;
                } else if (char === '}') {
                    braceCount--;
                }
                if (braceCount === 0) {
                    blockEnd = i;
                    break;
                }
            }
            if (blockEnd !== -1) {
                let extractedContent = normalizedCode.substring(startIndex, blockEnd + 1);
                const closingSuffix = normalizedCode.substring(blockEnd + 1);
                const suffixEnd = closingSuffix.indexOf(');');
                if (suffixEnd !== -1) {
                     extractedContent += closingSuffix.substring(0, suffixEnd + 2);
                }
                extractedBlocks[functionName].push(extractedContent.trim());
                funcRegex.lastIndex = blockEnd + 1;
            } else {
                funcRegex.lastIndex = startIndex + 1; 
            }
        }
    });


    var output = "";
    Object.keys(extractedBlocks).forEach(funcName => {
        extractedBlocks[funcName].forEach(item => {
            const formattedItem = item
                .replace(/\{/g, '{\n  ') 
                .replace(/\}/g, '\n}') 
                .replace(/;\s*/g, ';\n  ') 
                .replace(/\(\)\s*\{/g, '() {')
                .replace(/\n\s*;\n\s*\}/g, ';\n}') 
                .replace(/\n\s*\}\);/g, '\n});') 
                .replace(/\n\s\s\}/g, '\n}')
                .replace(/\n\s\s\);/g, '\n);')
                .trim();
            output += formattedItem + "\n\n";
        });
    });
    return output.replace(/\n\n+/g, '\n\n').trim();
}