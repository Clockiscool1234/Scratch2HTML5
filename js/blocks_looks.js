const looks_def_blocks = [
  {
    "type": "say:duration:elapsed:from:",
    "style": "looks_blocks",
    "message0": "say %1 for %2 secs",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "say:",
    "style": "looks_blocks",
    "message0": "say %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "think:duration:elapsed:from:",
    "style": "looks_blocks",
    "message0": "think %1 for %2 secs",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "think:",
    "style": "looks_blocks",
    "message0": "think %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "show",
    "style": "looks_blocks",
    "message0": "show",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "hide",
    "style": "looks_blocks",
    "message0": "hide",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "lookLike:",
    "style": "looks_blocks",
    "message0": "switch costume to %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        ScratchRuntime.Project.sprites[document.querySelector("div.item.selected").id].costumes.forEach((item)=>{
          options.push([item.name, item.name]);
        });
        return options;
      }
    }]
  },
  {
    "type": "nextCostume",
    "style": "looks_blocks",
    "message0": "next costume",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "nextScene",
    "style": "looks_blocks",
    "message0": "next backdrop",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "startScene",
    "style": "looks_blocks",
    "message0": "switch backdrop to %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        ScratchRuntime.Project.sprites["_stage_"].costumes.forEach((item)=>{
          options.push([item.name, item.name]);
        });
        options.push(["next backdrop", "_next_"]);
        options.push(["previous backdrop", "_prev_"]);
        return options;
      }
    }]
  },
  {
    "type": "startSceneAndWait",
    "style": "looks_blocks",
    "message0": "switch backdrop to %1 and wait",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        ScratchRuntime.Project.sprites["_stage_"].costumes.forEach((item)=>{
          options.push([item.name, item.name]);
        });
        options.push(["next backdrop", "_next_"]);
        options.push(["previous backdrop", "_prev_"]);
        return options;
      }
    }]
  },
  {
    "type": "changeGraphicEffect:by:",
    "style": "looks_blocks",
    "message0": "change %1 effect by %2",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "color", "color" ],
        [ "fisheye", "fisheye" ],
        [ "whirl", "whirl" ],
        [ "pixelate", "pixelate" ],
        [ "mosaic", "mosaic" ],
        [ "brightness", "brightness" ],
        [ "ghost", "ghost" ]
        
      ]
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "setGraphicEffect:to:",
    "style": "looks_blocks",
    "message0": "set %1 effect to %2",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "color", "ITEM1" ],
        [ "fisheye", "ITEM2" ],
        [ "whirl", "ITEM3" ],
        [ "pixelate", "ITEM4" ],
        [ "mosaic", "ITEM5" ],
        [ "brightness", "ITEM6" ],
        [ "ghost", "ITEM7" ]
        
      ]
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "filterReset",
    "style": "looks_blocks",
    "message0": "clear graphic effects",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "changeSizeBy:",
    "style": "looks_blocks",
    "message0": "change size by %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "setSizeTo:",
    "style": "looks_blocks",
    "message0": "set size to %1\%",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "comeToFront",
    "style": "looks_blocks",
    "message0": "go to front",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "goBackByLayers:",
    "style": "looks_blocks",
    "message0": "go back %1 layers",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "costumeIndex",
    "style": "looks_blocks",
    "message0": "costume #",
    "output": "value"
  },
  {
    "type": "sceneIndex",
    "style": "looks_blocks",
    "message0": "backdrop #",
    "output": "value"
  },
  {
    "type": "sceneName",
    "style": "looks_blocks",
    "message0": "backdrop name",
    "output": "value"
  },
  {
    "type": "scale",
    "style": "looks_blocks",
    "message0": "size",
    "output": "value"
  }
];

Blockly.common.defineBlocksWithJsonArray(looks_def_blocks);

const looks_blocks = {
      "kind": "category",
      "name": "Looks",
      "categorystyle": "looks_category",
      "toolboxitemid": "looks_stage0",
      "hidden": "true",
      "contents": [{
          "kind": "block",
          "type": "say:duration:elapsed:from:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "Hello!"
                }
              }
            },
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 2
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "say:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "Hello!"
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "think:duration:elapsed:from:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "Hmm..."
                }
              }
            },
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 2
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "think:",
          "gap": 32,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "Hmm..."
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "show",
          "gap": 16
        },{
          "kind": "block",
          "type": "hide",
          "gap": 32
        },{
          "kind": "block",
          "type": "lookLike:",
          "gap": 16
        },{
          "kind": "block",
          "type": "nextCostume",
          "gap": 16
        },{
          "kind": "block",
          "type": "startScene",
          "gap": 32
        },{
          "kind": "block",
          "type": "changeGraphicEffect:by:",
          "gap": 16,
          "inputs": {
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 25
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "setGraphicEffect:to:",
          "gap": 16,
          "inputs": {
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "filterReset",
          "gap": 32
        },{
          "kind": "block",
          "type": "changeSizeBy:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 10
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "setSizeTo:",
          "gap": 32,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 100
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "comeToFront",
          "gap": 16
        },{
          "kind": "block",
          "type": "goBackByLayers:",
          "gap": 32,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 1
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "costumeIndex",
          "gap": 16
        },{
          "kind": "block",
          "type": "sceneName",
          "gap": 16
        },{
          "kind": "block",
          "type": "scale"
        }]
    };
const looks_blocks_stage = {
      "kind": "category",
      "name": "Looks",
      "categorystyle": "looks_category",
      "toolboxitemid": "looks_stage1",
      "contents": [{
          "kind": "block",
          "type": "startScene",
          "gap": 16
        },{
          "kind": "block",
          "type": "startSceneAndWait",
          "gap": 16
        },{
          "kind": "block",
          "type": "nextScene",
          "gap": 32
        },{
          "kind": "block",
          "type": "changeGraphicEffect:by:",
          "gap": 16,
          "inputs": {
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 25
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "setGraphicEffect:to:",
          "gap": 16,
          "inputs": {
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            }
          }
        },{
          "kind": "block",
          "type": "filterReset",
          "gap": 32
        },{
          "kind": "block",
          "type": "sceneName",
          "gap": 16
        },{
          "kind": "block",
          "type": "sceneIndex"
        }
      ]
    };

javascript.javascriptGenerator.forBlock['say:duration:elapsed:from:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `looks.sayFor(${value1}, ${value2});\n`
}
javascript.javascriptGenerator.forBlock['say:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `looks.say(${value1});\n`
}
javascript.javascriptGenerator.forBlock['think:duration:elapsed:from:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', order);
  return `looks.thinkFor(${value1}, ${value2});\n`
}
javascript.javascriptGenerator.forBlock['think:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `looks.think(${value1});\n`
}
javascript.javascriptGenerator.forBlock['show'] = function (block, generator) {
  return `looks.show();\n`
}
javascript.javascriptGenerator.forBlock['hide'] = function (block, generator) {
  return `looks.hide();\n`
}
javascript.javascriptGenerator.forBlock['lookLike:'] = function (block, generator) {
  return `looks.lookLike("${block.getFieldValue('VALUE1')}");\n`
}
javascript.javascriptGenerator.forBlock['nextCostume'] = function (block, generator) {
  return `looks.nextCostume();\n`
}
javascript.javascriptGenerator.forBlock['nextScene'] = function (block, generator) {
  return `looks.nextScene();\n`
}
javascript.javascriptGenerator.forBlock['startScene'] = function (block, generator) {
  return `looks.startScene("${block.getFieldValue('VALUE1')}");\n`
}
javascript.javascriptGenerator.forBlock['startSceneAndWait'] = function (block, generator) {
  return `looks.startSceneAndWait("${block.getFieldValue('VALUE1')}");\n`
}
javascript.javascriptGenerator.forBlock['changeGraphicEffect:by:'] = function (block, generator) {
  return `looks.changeGraphicEffect("${block.getFieldValue('VALUE1')}",${block.getFieldValue('VALUE2')});\n`
}
javascript.javascriptGenerator.forBlock['setGraphicEffect:to:'] = function (block, generator) {
  return `looks.setGraphicEffect("${block.getFieldValue('VALUE1')}",${block.getFieldValue('VALUE2')});\n`
}
javascript.javascriptGenerator.forBlock['filterReset'] = function (block, generator) {
  return `looks.filterReset();\n`
}
javascript.javascriptGenerator.forBlock['changeSizeBy:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `looks.changeSize(${value1});\n`
}
javascript.javascriptGenerator.forBlock['setSizeTo:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `looks.setSize(${value1});\n`
}
javascript.javascriptGenerator.forBlock['comeToFront'] = function (block, generator) {
  return `looks.comeToFront();\n`
}
javascript.javascriptGenerator.forBlock['goBackByLayers:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `looks.goBackByLayers(${value1});\n`
}
javascript.javascriptGenerator.forBlock['costumeIndex'] = function (block, generator) {
  return [`looks.costumeIndex`, order]
}
javascript.javascriptGenerator.forBlock['sceneIndex'] = function (block, generator) {
  return [`looks.sceneIndex`, order]
}
javascript.javascriptGenerator.forBlock['sceneName'] = function (block, generator) {
  return [`looks.sceneName`, order]
}
javascript.javascriptGenerator.forBlock['scale'] = function (block, generator) {
  return [`looks.scale`, order]
}
