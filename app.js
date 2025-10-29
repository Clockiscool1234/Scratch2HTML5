function aboutDialog(){
    createDialog("aboutDialog", "About Scratch2HTML5", `Scratch2HTML5
Recreation of Scrarch 2.0 editor in HTML5
---------------
Based on Scratch 2.0 from the MIT Media Lab

Scratch is a project of the Lifelong Kindergarten Group at the MIT Media Lab

https://scratch.mit.edu - https://github.com/scratch-foundation/scratch-flash`)
}

function unimplementedDialog(){
    createDialog("unimplementedDialog", "Whoops!", "This feature is unimplemented!")
}

function createVarDialog(){
    const form = document.createElement("div");
    const varnamelabel = document.createElement("label");
    varnamelabel.for = "varName";
    varnamelabel.innerText = "Variable name:";
    const varnameinput = document.createElement("input");
    varnameinput.type = "text";
    varnameinput.id = "varName";
    const spacer = document.createElement("br");
    spacer.id = "spacer"
    const varall = document.createElement("input");
    varall.type = "radio";
    varall.id = "varAppSpr";
    varall.name = "varType";
    varall.checked = true;
    const varalllabel = document.createElement("label");
    varalllabel.for = "varName";
    varalllabel.innerText = "For all sprites";
    const varthis = document.createElement("input");
    varthis.type = "radio";
    varthis.id = "varThisSpr";
    varthis.name = "varType";
    const varthislabel = document.createElement("label");
    varthislabel.for = "varName";
    varthislabel.innerText = "For this sprite only";
    form.appendChild(varnamelabel);
    form.appendChild(varnameinput);
    form.appendChild(spacer);
    form.appendChild(varall);
    form.appendChild(varalllabel);
    form.appendChild(varthis);
    form.appendChild(varthislabel);
    createDialog("createVarDialog", "New Variable", form, [{"text":"OK","func":function(){
        ScratchRuntime.Project.sprites[document.querySelector("div.item.selected").id].variables[document.querySelector("input#varName").value] = 0;
        workspace.getToolbox().refreshSelection(); 
    }},{"text":"Cancel","func":undefined}], true)
}




createTopBar();
createSplitter();
createPlayer();
createLibrary();
createTabs();


var ScratchRuntime = new S2Runtime(document.querySelector("canvas.main"))
createCodePage();

document.querySelector("button#spritelist").addEventListener("click", unimplementedDialog);
document.querySelector("button#uploadsprite").addEventListener("click", unimplementedDialog);
document.querySelector("button#camerasprite").addEventListener("click", unimplementedDialog);
document.querySelector("button#newsprite").addEventListener("click", function(){
    const matchingStrings = ScratchRuntime.getAllSprites().filter(obj => obj.objName.startsWith("Sprite"));
    if (matchingStrings.length === 0) {
        ScratchRuntime.newSprite("Sprite1");
    } else {
        matchingStrings.sort((a, b) => a - b);
        ScratchRuntime.newSprite("Sprite" + (parseInt(matchingStrings[matchingStrings.length - 1].replace("Sprite", "")) + 1));
    }
});