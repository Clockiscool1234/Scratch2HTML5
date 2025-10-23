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