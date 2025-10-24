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
	costumes.innerText = "Costumes";
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