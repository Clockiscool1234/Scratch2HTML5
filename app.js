function aboutDialog(){
    createDialog("aboutDialog", "About Scratch2HTML5", `Scratch
Based on Scratch 2.0 from the MIT Media Lab

Scratch is a project of the Lifelong Kindergarten Group at the MIT Media Lab

https://scratch.mit.edu - https://github.com/scratch-foundation/scratch-flash

---------------


Scratch2HTML5
Recreation of Scrarch 2.0 editor in HTML5 by Clockiscool1234
Discord: https://discord.gg/YT7KbwUgkH
`)
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
        ScratchRuntime.getSprite("Stage").variables.push({
            "name": document.querySelector("input#varName").value, 
            "value": 0, 
            "isPersistent":false
        });
        workspace.getToolbox().refreshSelection(); 
    }},{"text":"Cancel","func":undefined}], true)
}

function createListDialog(){
    const form = document.createElement("div");
    const listnamelabel = document.createElement("label");
    listnamelabel.for = "listName";
    listnamelabel.innerText = "List name:";
    const listnameinput = document.createElement("input");
    listnameinput.type = "text";
    listnameinput.id = "listName";
    const spacer = document.createElement("br");
    spacer.id = "spacer"
    const listall = document.createElement("input");
    listall.type = "radio";
    listall.id = "listAppSpr";
    listall.name = "listType";
    listall.checked = true;
    const listalllabel = document.createElement("label");
    listalllabel.for = "listName";
    listalllabel.innerText = "For all sprites";
    const listthis = document.createElement("input");
    listthis.type = "radio";
    listthis.id = "listThisSpr";
    listthis.name = "listType";
    const listthislabel = document.createElement("label");
    listthislabel.for = "listName";
    listthislabel.innerText = "For this sprite only";
    form.appendChild(listnamelabel);
    form.appendChild(listnameinput);
    form.appendChild(spacer);
    form.appendChild(listall);
    form.appendChild(listalllabel);
    form.appendChild(listthis);
    form.appendChild(listthislabel);
    createDialog("createListDialog", "New List", form, [{"text":"OK","func":function(){
        ScratchRuntime.getSprite("Stage").lists.push({
            "listName": document.querySelector("input#listName").value,
            "contents": [],
            "isPersistent": false,
            "x": 5,
            "y": 5,
            "width": 104,
            "height": 204,
            "visible": true
        });
        workspace.getToolbox().refreshSelection(); 
    }},{"text":"Cancel"}], true)
}


function openProjectFilePicker() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                createDialog("id","Replace project contents?","",[{"text":"OK","func":function(){
                    ScratchRuntime.loadProject(e.target.result);
                }},{"text":"Cancel"}]);
            };
            reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
        }
    };
    input.click();
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
        ScratchRuntime.newSprite("Sprite" + (parseInt(matchingStrings[matchingStrings.length - 1].objName.replace("Sprite", "")) + 1));
    }
});