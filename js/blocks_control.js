Blockly.common.defineBlocksWithJsonArray([
  {
    "type": "wait:elapsed:from:",
    "message0": "wait %1 secs",
    "style": "control_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }]
  }, {
    "type": "doRepeat",
    "message0": "repeat %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": null
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE2"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "control_blocks"
  }, {
    "type": "doForever",
    "message0": "forever",
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE1"
    }],
    "previousStatement": null,
    "style": "control_blocks"
  }, {
    "type": "doIf",
    "message0": "if %1 then",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE2"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "control_blocks"
  }, {
    "type": "doIfElse",
    "message0": "if %1 then \n %2 else \n %3",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }, {
      "type": "input_statement",
      "name": "VALUE2"
    }, {
      "type": "input_statement",
      "name": "VALUE3"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "control_blocks"
  },
   {
    "type": "doWaitUntil",
    "message0": "wait until %1",
    "style": "control_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }]
  },{
    "type": "doUntil",
    "message0": "repeat until %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }],
    "message1": "%1",
    "args1": [{
      "type": "input_statement",
      "name": "VALUE2"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "control_blocks"
  },
  {
    "type": "stopScripts",
    "message0": "stop %1",
    "style": "control_blocks",
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "all", "ITEM1" ],
        [ "this script", "ITEM2" ],
        [ "other scripts in this sprite", "ITEM3" ]
      ]
    }]
  },
  {
    "type": "whenCloned",
    "message0": "When I start as a clone",
    "style": "control_blocks",
    "nextStatement": null
  },
  {
    "type": "createCloneOf",
    "message0": "create a clone of %1",
    "style": "control_blocks",
    "nextStatement": null,
    "previousStatement": null,
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "myself", "_myself_" ],
        [ "Sprite1", "ITEM2" ]
      ]
    }]
  },
  {
    "type": "deleteClone",
    "message0": "delete clone",
    "style": "control_blocks",
    "previousStatement": null
  }
]);

const control_blocks = {
      "kind": "category",
      "name": "Control",
      "categorystyle": "control_category",
      "contents": [
        {
            "kind": "block",
            "type": "wait:elapsed:from:",
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
        },
        {
            "kind": "block",
            "type": "doRepeat",
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
            "type": "doForever",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "doIf",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "doIfElse",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "doWaitUntil",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "doUntil",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "stopScripts",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "whenCloned",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "createCloneOf",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "deleteClone"
        }
      ]
    }