Blockly.common.defineBlocksWithJsonArray([
  {
    "type": "whenGreenFlag",
    "style": {
        "hat": "cap"
    },
    "message0": 'when %1 clicked',
    "args0": [
      {
        "type": "field_image",
        "src": "images/563_assets.Resources_greenflagOff.png",
        "width": 42,
        "height": 42,
        "alt": "green flag",
        "flipRtl": false
      }
    ],
    "style": "events_blocks",
    "nextStatement": null
  }, {
    "type": "whenKeyPressed",
    "style": {
        "hat": "cap"
    },
    "message0": 'when %1 key pressed',
    "style": "events_blocks",
    "nextStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["space", "space"],
        ["up arrow", "up arrow"],
        ["down arrow", "down arrow"],
        ["left arrow", "left arrow"],
        ["right arrow", "right arrow"],
        ["any", "any"],
        ["a", "a"],
        ["b", "b"],
        ["c", "c"],
        ["d", "d"],
        ["e", "e"],
        ["f", "f"],
        ["g", "g"],
        ["h", "h"],
        ["i", "i"],
        ["j", "k"],
        ["k", "k"],
        ["l", "l"],
        ["m", "m"],
        ["n", "n"],
        ["o", "o"],
        ["p", "p"],
        ["q", "q"],
        ["r", "r"],
        ["s", "s"],
        ["t", "t"],
        ["u", "u"],
        ["v", "v"],
        ["w", "w"],
        ["x", "x"],
        ["y", "y"],
        ["z", "z"],
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"]
      ]
    }]
  }, {
    "type": "whenThisClicked",
    "style": {
        "hat": "cap"
    },
    "message0": 'when this sprite clicked',
    "style": "events_blocks",
    "nextStatement": null
  }, {
    "type": "whenSceneStarts",
    "style": {
        "hat": "cap"
    },
    "message0": 'when backdrop switches to %1',
    "style": "events_blocks",
    "nextStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["backdrop1", "ITEM1"]
      ]
    }]
  }, {
    "type": "whenSensorGreaterThan",
    "style": {
        "hat": "cap"
    },
    "message0": 'when %1 > %2',
    "style": "events_blocks",
    "nextStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["loudness", "loudness"],
        ["timer", "timer"],
        ["video motion", "video"]
      ]
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "whenIReceive",
    "style": {
        "hat": "cap"
    },
    "message0": 'when I receive %1',
    "style": "events_blocks",
    "nextStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        ScratchRuntime.Project.messages.forEach(function(item){
          options.push([item, item]);
        });
        return options;
      }
    }]
  }, {
    "type": "broadcast",
    "message0": "broadcast %1",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        ScratchRuntime.Project.messages.forEach(function(item){
          options.push([item, item]);
        });
        return options;
      }
    }],
    "style": "events_blocks"
  }, {
    "type": "doBroadcastAndWait",
    "message0": "broadcast %1 and wait",
    "inputsInline": true,
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": function(){
        options = [];
        ScratchRuntime.Project.messages.forEach(function(item){
          options.push([item, item]);
        });
        return options;
      }
    }],
    "style": "events_blocks"
  }
]); 

const events_blocks = {
      "kind": "category",
      "name": "Events",
      "categorystyle": "events_category",
      "contents": [
        {
            "kind": "block",
            "type": "whenGreenFlag",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "whenKeyPressed",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "whenThisClicked",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "whenSceneStarts",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "whenSensorGreaterThan",
            "gap": 32,
            "inputs": {
              "VALUE2": {
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
            "type": "whenIReceive",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "broadcast",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "doBroadcastAndWait"
        }
      ]
    };

javascript.javascriptGenerator.forBlock['whenGreenFlag'] = function (block, generator) {
  const nextBlock = block.getNextBlock();
  return `events.whenGreenFlag(function(){\n${generator.blockToCode(nextBlock)}});\n`
}
javascript.javascriptGenerator.forBlock['whenKeyPressed'] = function (block, generator) {
  const nextBlock = block.getNextBlock();
  return `events.whenKeyPressed(function(){\n${generator.blockToCode(nextBlock)}});\n`
}
javascript.javascriptGenerator.forBlock['whenThisClicked'] = function (block, generator) {
  const nextBlock = block.getNextBlock();
  return `events.whenThisClicked(function(){\n${generator.blockToCode(nextBlock)}});\n`
}
javascript.javascriptGenerator.forBlock['whenSceneStarts'] = function (block, generator) {
  const nextBlock = block.getNextBlock();
  return `events.whenGreenFlag(function(){\n${generator.blockToCode(nextBlock)}});\n`
}
javascript.javascriptGenerator.forBlock['whenSensorGreaterThan'] = function (block, generator) {
  const nextBlock = block.getNextBlock();
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', order);
  return `events.whenSensorGreaterThan(${value1}, ${value2}, function(){\n${generator.blockToCode(nextBlock)}});\n`
}
javascript.javascriptGenerator.forBlock['whenIReceive'] = function (block, generator) {
  const nextBlock = block.getNextBlock();
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `events.whenIReceive("${value}",function(){\n${generator.blockToCode(nextBlock)}});\n`
}
javascript.javascriptGenerator.forBlock['broadcast'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `events.broadcast(${value1});\n`
}
javascript.javascriptGenerator.forBlock['doBroadcastAndWait'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `events.broadcastWait(${value1});\n`
}