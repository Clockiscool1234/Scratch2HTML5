const data_def_blocks = [
  {
	"type": "readVariable",
	"message0": '%1',
	"args0": [{
	  "type": "field_label_serializable",
	  "name": "NAME",
	  "text": "variable"
	}],
	"style": "data_blocks",
	"output": "Value"
  }, {
	"type": "setVar:to:",
	"message0": "set %1 to %2",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [
		{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["x", "X"]
      ]
    },
    {
	  	"type": "input_value",
	  	"name": "VALUE2"
		}
	],
	"style": "data_blocks",
  }, {
	"type": "changeVar:by:",
	"message0": "change %1 by %2",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [
		{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["x", "X"]
      ]
    },
    {
	  	"type": "input_value",
	  	"name": "VALUE2"
		}
	],
	"style": "data_blocks",
  }, {
	"type": "showVariable:",
	"message0": "show variable %1",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["x", "X"]
      ]
    }],
	"style": "data_blocks",
  }, {
	"type": "hideVariable:",
	"message0": "hide variable %1",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["x", "X"]
      ]
    }],
	"style": "data_blocks",
  }, {
	"type": "contentsOfList:",
	"message0": '%1',
	"args0": [{
	  "type": "field_label_serializable",
	  "name": "NAME",
	  "text": "list"
	}],
	"style": "data_list_blocks",
	"output": "Value"
  }, {
	"type": "append:toList:",
	"message0": "add %1 to %2",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1"
	}, {
    "type": "field_dropdown",
    "name": "VALUE2",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks"
  }, {
	"type": "deleteLine:ofList:",
	"message0": "delete %1 of %2",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1"
	}, {
    "type": "field_dropdown",
    "name": "VALUE2",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks"
  }, {
	"type": "insert:at:ofList:",
	"message0": "insert %1 at %2 of %3",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1"
	}, {
	  "type": "input_value",
	  "name": "VALUE2"
	}, {
    "type": "field_dropdown",
    "name": "VALUE3",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks"
  }, {
	"type": "setLine:ofList:to:",
	"message0": "replace item %1 of %2 with %3",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1"
	}, {
    "type": "field_dropdown",
    "name": "VALUE2",
    "options": [
      ["x", "X"]
    ]
  }, {
	  "type": "input_value",
	  "name": "VALUE3"
	}],
	"style": "data_list_blocks"
  }, {
	"type": "getLine:ofList:",
	"message0": "item %1 of %2",
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1"
	}, {
    "type": "field_dropdown",
    "name": "VALUE2",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks",
	"output": "Value"
  }, {
	"type": "lineCountOfList:",
	"message0": "length of %1",
	"args0": [{
    "type": "field_dropdown",
    "name": "VALUE1",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks",
	"output": "Value"
  }, {
	"type": "list:contains:",
	"message0": "%1 contains %2?",
	"args0": [{
    "type": "field_dropdown",
    "name": "VALUE1",
    "options": [
      ["x", "X"]
    ]
  }, {
	  "type": "input_value",
	  "name": "VALUE2"
	}],
	"style": "data_list_blocks",
	"output": "Boolean"
  }, {
	"type": "showList:",
	"message0": "show %1",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
    "type": "field_dropdown",
    "name": "VALUE1",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks"
  }, {
	"type": "hideList:",
	"message0": "hide %1",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
    "type": "field_dropdown",
    "name": "VALUE1",
    "options": [
      ["x", "X"]
    ]
  }],
	"style": "data_list_blocks"
  }

];

Blockly.common.defineBlocksWithJsonArray(data_def_blocks);

const data_blocks = {
	"kind": "category",
	"name": "Data",
	"categorystyle": "data_category",
	"custom": "DATA_DYNAMIC"
}

var dataCategoryDynamic = function(workspace) {
	var variableBlocks = [
		{
			"kind": "button",
			"text": "Make a Variable",
			"callbackKey": "newVar"
		}
	];
	if (ScratchRuntime.getSprite("Stage").variables.length > 0) {
		ScratchRuntime.getSprite("Stage").variables.forEach((i)=>{
			variableBlocks.push({
				"kind": "block",
				"type": "readVariable",
				"fields": {
					"NAME": i.name
				}
			});
		});
		variableBlocks = variableBlocks.concat([
			{
				"kind": "block",
				"type": "setVar:to:",
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
			},
			{
				"kind": "block",
				"type": "changeVar:by:",
				"inputs": {
          "VALUE2": {
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
				"type": "showVariable:"
			},
			{
				"kind": "block",
				"type": "hideVariable:"
			}
		]);
	};
	var listBlocks = [
		{
			"kind": "button",
			"text": "Make a List",
			"callbackKey": "newList"
		}
	];
	if (ScratchRuntime.getSprite("Stage").lists.length > 0) {
		ScratchRuntime.getSprite("Stage").lists.forEach((i)=>{
			listBlocks.push({
				"kind": "block",
				"type": "contentsOfList:",
				"fields": {
					"NAME": i.listName
				}
			});
		});
		listBlocks = listBlocks.concat([
			{
				"kind": "block",
				"type": "append:toList:",
				"inputs": {
          "VALUE1": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "thing"
              }
            }
          }
        }
			},
			{
				"kind": "block",
				"type": "deleteLine:ofList:",
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
				"type": "insert:at:ofList:",
				"inputs": {
					"VALUE1": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "thing"
              }
            }
          },
          "VALUE2": {
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
				"type": "setLine:ofList:to:",
				"inputs": {
          "VALUE1": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
        	},
        	"VALUE3": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "thing"
              }
            }
          }
        }
			},
			{
				"kind": "block",
				"type": "getLine:ofList:",
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
				"type": "lineCountOfList:"
			},
			{
				"kind": "block",
				"type": "list:contains:",
				"inputs": {
          "VALUE2": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "thing"
              }
            }
          }
        }
			},
			{
				"kind": "block",
				"type": "showList:"
			},
			{
				"kind": "block",
				"type": "hideList:"
			},
		]);
	};
	var blocks = [];
	blocks = blocks.concat(variableBlocks);
	blocks = blocks.concat(listBlocks);
	return blocks;
}

/*append:toList:", "thing", "list"],
						["deleteLine:ofList:", 1, "list"],
						["insert:at:ofList:", "thing", 1, "list"],
						["setLine:ofList:to:", 1, "list", "thing"]]],
				[681, 1068, [["getLine:ofList:", 1, "list"]]],
				[678, 1091.4, [["lineCountOfList:", "list"]]],
				[681, 1123, [["list:contains:", "list", "thing"]]],
				[668, 1174, [["showList:", "list"], ["hideList:*/