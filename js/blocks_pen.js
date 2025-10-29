const pen_def_blocks = [
  {
    "type": "clearPenTrails",
    "message0": "clear",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "stampCostume",
    "message0": "stamp",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "putPenDown",
    "message0": "pen down",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null
  },{
    "type": "putPenUp",
    "message0": "pen up",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null
  },{
    "type": "penColor:",
    "message0": "set pen color to %1",
    "args0": [{
      "type": "field_colour_hsv_sliders",
      "name": "VALUE1",
      "colour": "#ff0000"
    }],
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null
  },{
    "type": "changePenHueBy:",
    "message0": "change pen color by %1",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "setPenHueTo:",
    "message0": "set pen color to %1",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "changePenShadeBy:",
    "message0": "change pen shade by %1",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "setPenShadeTo:",
    "message0": "set pen shade to %1",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "changePenSizeBy:",
    "message0": "change pen size by %1",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  },{
    "type": "penSize:",
    "message0": "set pen size to %1",
    "style": "pen_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  }
];

Blockly.common.defineBlocksWithJsonArray(pen_def_blocks); 

const pen_blocks = {
      "kind": "category",
      "name": "Pen",
      "categorystyle": "pen_category",
      "contents": [
        {
            "kind": "block",
            "type": "clearPenTrails",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "stampCostume",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "putPenDown",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "putPenUp",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "penColor:",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "changePenHueBy:",
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
            "type": "setPenHueTo:",
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
            "type": "changePenShadeBy:",
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
            "type": "setPenShadeTo:",
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
            "type": "changePenSizeBy:",
            "gap": 16,
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
        },
        {
            "kind": "block",
            "type": "penSize:",
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
        }
      ]
    }