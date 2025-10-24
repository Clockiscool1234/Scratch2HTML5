
Blockly.common.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
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
    "message0": "turn ⟳ %1 degrees",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },
  {
    "type": "turnLeft:",
    "style": "motion_blocks",
    "message0": "turn ⟲ %1 degrees",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
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
      "options": [
        [ "mouse-pointer", "ITEM1" ],
        [ "other sprite here", "ITEM2" ]
      ]
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
      "options": [
        [ "mouse-pointer", "_mouse_" ],
        [ "random position", "_random_"],
        [ "other sprite here", "ITEM3" ]
      ]
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
]); // END JSON EXTRACT (Do not delete this comment.)
