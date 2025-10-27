Blockly.common.defineBlocksWithJsonArray([ 
  {
    "type": "forward:",
    "style": "motion_blocks",
    "message0": "move %1 steps",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },
  {
    "type": "turnRight:",
    "style": "motion_blocks",
    "message0": "turn %1 %2 degrees",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_image",
      "src": "images/557_assets.Resources_turnRightIcon.png",
      "width": 32,
      "height": 32,
      "alt": "turn right",
      "flipRtl": false
    },{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "turnLeft:",
    "style": "motion_blocks",
    "message0": "turn %1 %2 degrees",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_image",
      "src": "images/664_assets.Resources_turnLeftIcon.png",
      "width": 32,
      "height": 32,
      "alt": "turn left",
      "flipRtl": false
    },{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "heading:",
    "style": "motion_blocks",
    "message0": "point in direction %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "pointTowards:",
    "style": "motion_blocks",
    "message0": "point towards %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        options.push(["mouse-pointer", "_mouse_"]);
        Object.keys(ScratchRuntime.Project.sprites).forEach(function(item){
          item == "_stage_" || item == document.querySelector("div.item.selected").id? null : options.push([item, item]);
        });
        return options;
      }
    }]
  },
  {
    "type": "gotoX:y:",
    "style": "motion_blocks",
    "message0": "go to x: %1 y: %2",
    "nextStatement": null,
    "previousStatement": null,
    "inputsInline": true,
    "lastDummyAlign0": "RIGHT", //why not working?
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }]
  },
  {
    "type": "gotoSpriteOrMouse:",
    "style": "motion_blocks",
    "message0": "go to %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        options.push(["mouse-pointer", "_mouse_"]);
        options.push(["random position", "_random_"]);
        Object.keys(ScratchRuntime.Project.sprites).forEach(function(item){
          item == "_stage_" || item == document.querySelector("div.item.selected").id? null : options.push([item, item]);
        });
        return options;
      }
    }]
  },
  {
    "type": "glideSecs:toX:y:elapsed:from:",
    "style": "motion_blocks",
    "message0": "glide %1 secs to x: %2 y: %3",
    "nextStatement": null,
    "previousStatement": null,
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    },{
      "type": "input_value",
      "name": "VALUE3"
    }]

  },{
    "type": "changeXposBy:",
    "style": "motion_blocks",
    "message0": "change x by %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "xpos:",
    "style": "motion_blocks",
    "message0": "set x to %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "changeYposBy:",
    "style": "motion_blocks",
    "message0": "change y by %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "ypos:",
    "style": "motion_blocks",
    "message0": "set y to %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "bounceOffEdge",
    "style": "motion_blocks",
    "message0": "if on edge, bounce",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "setRotationStyle",
    "style": "motion_blocks",
    "message0": "set rotation style %1",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
      "options": [
        [ "left-right", "ITEM1" ],
        [ "don't rotate", "ITEM2" ],
        [ "all around", "ITEM3" ]
      ]
    }]
  },
  {
    "type": "xpos",
    "style": "motion_blocks",
    "message0": "x position",
    "output": "value"
  },
  {
    "type": "ypos",
    "style": "motion_blocks",
    "message0": "y position",
    "output": "value"
  },
  {
    "type": "heading",
    "style": "motion_blocks",
    "message0": "direction",
    "output": "value"
  }
]);

const motion_blocks = {
      "kind": "category",
      "name": "Motion",
      "categorystyle": "motion_category",
      "toolboxitemid": "motion_stage0",
      "hidden": "true",
      "contents": [{
          "kind": "block",
          "type": "forward:",
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
        },
        {
          "kind": "block",
          "type": "turnRight:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 15
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "turnLeft:",
          "gap": 32,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 15
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "heading:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 90
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "pointTowards:",
          "gap": 32
        },
        {
          "kind": "block",
          "type": "gotoX:y:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            },
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "gotoSpriteOrMouse:",
          "gap": 16
        },
        {
          "kind": "block",
          "type": "glideSecs:toX:y:elapsed:from:",
          "gap": 32,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 1
                }
              }
            },
            "VALUE2": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            },
            "VALUE3": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "changeXposBy:",
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
        },
        {
          "kind": "block",
          "type": "xpos:",
          "gap": 16,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "changeYposBy:",
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
        },
        {
          "kind": "block",
          "type": "ypos:",
          "gap": 32,
          "inputs": {
            "VALUE1": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": 0
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "bounceOffEdge",
          "gap": 32
        },
        {
          "kind": "block",
          "type": "setRotationStyle",
          "gap": 32
        },
        {
          "kind": "block",
          "type": "xpos",
          "gap": 16
        },
        {
          "kind": "block",
          "type": "ypos",
          "gap": 16
        },
        {
          "kind": "block",
          "type": "heading",
          "gap": 16
        },
      ]
    };

const motion_blocks_stage = {
      "kind": "category",
      "name": "Motion",
      "categorystyle": "motion_category",
      "toolboxitemid": "motion_stage1",
      "contents": [
        {
          "kind": "label",
          "text": "Stage selected:"
        },
        {
          "kind": "label",
          "text": "No motion blocks"
        }
      ]
    };
javascript.javascriptGenerator.forBlock['forward:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.move(${value1});\n`
}
javascript.javascriptGenerator.forBlock['turnRight:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.turn(${value1});\n`
}
javascript.javascriptGenerator.forBlock['turnLeft:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.turn(${value1*(-1)});\n`
}
javascript.javascriptGenerator.forBlock['heading:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.direction(${value1});\n`
}
javascript.javascriptGenerator.forBlock['pointTowards:'] = function (block, generator) {
  return `motion.pointTo("${block.getFieldValue('VALUE1')}");\n`
}
javascript.javascriptGenerator.forBlock['gotoX:y:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', order);
  return `motion.position(${value1}, ${value2});\n`
}
javascript.javascriptGenerator.forBlock['gotoSpriteOrMouse:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.goTo("${value1}");\n`
}
javascript.javascriptGenerator.forBlock['glideSecs:toX:y:elapsed:from:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', order);
  const value3 = Blockly.JavaScript.valueToCode(block, 'VALUE3', order);
  return `motion.glideTo(${value1}, ${value2}, ${value3});\n`
}
javascript.javascriptGenerator.forBlock['changeXposBy:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.changeXpos(${value1});\n`
}
javascript.javascriptGenerator.forBlock['xpos:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.xpos(${value1});\n`
}
javascript.javascriptGenerator.forBlock['changeYposBy:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.changeYpos(${value1});\n`
}
javascript.javascriptGenerator.forBlock['ypos:'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.ypos(${value1});\n`
}
javascript.javascriptGenerator.forBlock['bounceOffEdge'] = function (block, generator) {
  return `motion.bounce();\n`
}
javascript.javascriptGenerator.forBlock['setRotationStyle'] = function (block, generator) {
  const order = javascript.Order.ATOMIC;
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `motion.setRotationStyle(${value1});\n`
}
javascript.javascriptGenerator.forBlock['xpos'] = function (block, generator) {
  return [`motion.xpos`, javascript.Order.ATOMIC]
}
javascript.javascriptGenerator.forBlock['ypos'] = function (block, generator) {
  return [`motion.ypos`, javascript.Order.ATOMIC]
}
javascript.javascriptGenerator.forBlock['heading'] = function (block, generator) {
  return [`motion.direction`, javascript.Order.ATOMIC]
}
