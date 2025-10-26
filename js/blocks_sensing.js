Blockly.defineBlocksWithJsonArray([
  {
    "type": "touching:",
    "message0": 'touching %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["mouse-pointer", "_mouse_"],
        ["edge", "_edge_"],
        ["other sprite here", "ITEM3"]
      ]
    }],
    "style": "sensing_blocks",
    "output": "Boolean"
  }, {
    "type": "touchingColor:",
    "message0": "touching color %1 ?",
    "args0": [{
      "type": "field_colour_hsv_sliders",
      "name": "VALUE1",
      "colour": "#ff0000"
    }],
    "style": "sensing_blocks",
    "output": "Boolean"
  }, {
    "type": "color:sees:",
    "message0": "color %1 is touching color %2 ?",
    "args0": [{
      "type": "field_colour_hsv_sliders",
      "name": "VALUE1",
      "colour": "#ff0000"
    }, {
      "type": "field_colour_hsv_sliders",
      "name": "VALUE2",
      "colour": "#ff0000"
    }],
    "style": "sensing_blocks",
    "output": "Boolean"
  }, {
    "type": "distanceTo:",
    "message0": 'distance to %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["mouse-pointer", "_mouse_"],
        ["other sprite here", "ITEM2"]
      ]
    }],
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "doAsk",
    "message0": "ask %1 and wait",
    "style": "sensing_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  }, {
    "type": "answer",
    "message0": "answer",
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "keyPressed:",
    "message0": 'key %1 pressed?',
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
    }],
    "style": "sensing_blocks",
    "output": "Boolean"
  }, {
    "type": "mousePressed",
    "message0": "mouse down?",
    "style": "sensing_blocks",
    "output": "Boolean"
  }, {
    "type": "mouseX",
    "message0": "mouse x",
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "mouseY",
    "message0": "mouse y",
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "soundLevel",
    "message0": "loudness",
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "senseVideoMotion",
    "message0": 'video %1 on %2',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["motion", "ITEM1"],
        ["direction", "ITEM2"]
      ]
    }, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["stage", "ITEM1"],
        ["this sprite", "ITEM2"]
      ]
    }],
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "setVideoState",
    "message0": 'turn video %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["on", "ITEM1"],
        ["off", "ITEM2"],
        ["on-flipped", "ITEM3"]
      ]
    }],
    "style": "sensing_blocks",
    "nextStatement": null,
    "previousStatement": null
  }, {
    "type": "setVideoTransparency",
    "message0": "set video transparency to %1%",
    "style": "sensing_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  }, {
    "type": "timer",
    "message0": "timer",
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "timerReset",
    "message0": "reset timer",
    "style": "sensing_blocks",
    "nextStatement": null,
    "previousStatement": null
  }, {
    "type": "getAttribute:of:",
    "message0": '%1 of %2',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["x position", "x position"],
        ["y position", "y position"],
        ["direction", "direction"],
        ["costume #", "costume #"],
        ["costume name", "costume name"],
        ["size", "size"],
        ["volume", "volume"]
      ]
    }, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["stage", "stage"],
        ["Sprite1", "Sprite1"]
      ]
    }],
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "timeAndDate",
    "message0": 'current %1',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["year", "year"],
        ["month", "month"],
        ["date", "date"],
        ["day of week", "day of week"],
        ["hour", "hour"],
        ["minute", "minute"],
        ["second", "second"]
      ]
    }],
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "timestamp",
    "message0": "days since 2000",
    "style": "sensing_blocks",
    "output": "value"
  }, {
    "type": "getUserName",
    "message0": "username",
    "style": "sensing_blocks",
    "output": "value"
  }
]);

const sensing_blocks = {
      "kind": "category",
      "name": "Sensing",
      "categorystyle": "sensing_category",
      "contents": [
        {
            "kind": "block",
            "type": "touching:",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "touchingColor:",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "color:sees:",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "distanceTo:",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "doAsk",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "What's your name?"
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "answer",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "keyPressed:",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "mousePressed",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "mouseX",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "mouseY",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "soundLevel",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "senseVideoMotion",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "setVideoState",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "setVideoTransparency",
            "gap": 32,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 50
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "timer",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "timerReset",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "getAttribute:of:",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "timeAndDate",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "timestamp",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "getUserName"
        }
      ]
    }
