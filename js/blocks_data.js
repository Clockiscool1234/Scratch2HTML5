const data_def_blocks = [
  {
	"type": "var",
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
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1",
	  "check": "Variable"
	}, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["x", "X"]
      ]
    }],
	"style": "data_blocks",
	"extensions": ["dynamic_menu_extension"]
  }, {
	"type": "changeVar:by:",
	"message0": "change %1 by %2",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1",
	  "check": "Variable"
	}, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["x", "X"]
      ]
    }],
	"style": "data_blocks",
	"extensions": ["dynamic_menu_extension"]
  }, {
	"type": "showVariable:",
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
	"style": "data_blocks",
	"extensions": ["dynamic_menu_extension"]
  }, {
	"type": "hideVariable:",
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
	"style": "data_blocks",
	"extensions": ["dynamic_menu_extension"]
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
	  "type": "input_value",
	  "name": "VALUE2",
	  "check": "List"
	}],
	"style": "data_list_blocks"
  }, {
	"type": "deleteLine:ofList:",
	"message0": "delete %1 of %2",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "field_dropdown",
	  "name": "VALUE1",
	  "options": [
		["1", "ITEM1"],
		["last", "ITEM2"],
		["all", "ITEM3"]
	  ]
	}, {
	  "type": "input_value",
	  "name": "VALUE2",
	  "check": "List"
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
	  "type": "field_dropdown",
	  "name": "VALUE2",
	  "options": [
		["1", "ITEM1"],
		["last", "ITEM2"],
		["random", "ITEM3"]
	  ]
	}, {
	  "type": "input_value",
	  "name": "VALUE3",
	  "check": "List"
	}],
	"style": "data_list_blocks"
  }, {
	"type": "setLine:ofList:to:",
	"message0": "replace item %1 of %2 with %3",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "field_dropdown",
	  "name": "VALUE1",
	  "options": [
		["1", "ITEM1"],
		["last", "ITEM2"],
		["random", "ITEM3"]
	  ]
	}, {
	  "type": "input_value",
	  "name": "VALUE2",
	  "check": "List"
	}, {
	  "type": "input_value",
	  "name": "VALUE3"
	}],
	"style": "data_list_blocks"
  }, {
	"type": "getLine:ofList:",
	"message0": "item %1 of %2",
	"args0": [{
	  "type": "field_dropdown",
	  "name": "VALUE1",
	  "options": [
		["1", "ITEM1"],
		["last", "ITEM2"],
		["random", "ITEM3"]
	  ]
	}, {
	  "type": "field_variable",
	  "name": "VALUE1"
	}],
	"style": "data_list_blocks",
	"output": "Value"
  }, {
	"type": "lineCountOfList:",
	"message0": "length of %1",
	"args0": [{
	  "type": "field_variable",
	  "name": "VALUE1"
	}],
	"style": "data_list_blocks",
	"output": "Value"
  }, {
	"type": "list:contains:",
	"message0": "%1 contains %2?",
	"args0": [{
	  "type": "field_variable",
	  "name": "VALUE1"
	}, {
      "type": "field_dropdown",
      "name": "VALUE2",
      "options": [
        ["x", "X"]
      ]
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
	  "type": "input_value",
	  "name": "VALUE1",
	  "check": "List"
	}],
	"style": "data_list_blocks"
  }, {
	"type": "hideList:",
	"message0": "hide %1",
	"inputsInline": true,
	"nextStatement": null,
	"previousStatement": null,
	"args0": [{
	  "type": "input_value",
	  "name": "VALUE1",
	  "check": "List"
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
	var variableBlocks = []
	Object.keys(ScratchRuntime.Project.sprites["_stage_"].variables).forEach((i)=>{
		variableBlocks.push({
			"kind": "block",
			"type": "var",
			"fields": {
				"NAME": i
			}
		});
	});
	var blocks =    [
						{
							"kind": "button",
							"text": "Make a Variable",
							"callbackKey": "newVar"
				        }
			    	]
	blocks = blocks.concat(variableBlocks)
	return blocks;
}