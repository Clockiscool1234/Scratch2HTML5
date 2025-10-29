const control_def_blocks = [
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
];

Blockly.common.defineBlocksWithJsonArray(control_def_blocks);

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
		};

javascript.javascriptGenerator.forBlock['wait:elapsed:from:'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	return `control.wait(${value1});\n`
}
javascript.javascriptGenerator.forBlock['doRepeat'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	const value2 = Blockly.JavaScript.statementToCode(block, 'VALUE2');
	return `control.repeat(${value1},function(){\n${value2}});\n`
}
javascript.javascriptGenerator.forBlock['doForever'] = function (block, generator) {
	const value1 = Blockly.JavaScript.statementToCode(block, 'VALUE1');
	return `control.forever(function(){\n${value1}});\n`
}
javascript.javascriptGenerator.forBlock['doIf'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	const value2 = Blockly.JavaScript.statementToCode(block, 'VALUE2');
	return `if(${value1}){\n${value2}};\n`
}
javascript.javascriptGenerator.forBlock['doIfElse'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	const value2 = Blockly.JavaScript.statementToCode(block, 'VALUE2');
	const value3 = Blockly.JavaScript.statementToCode(block, 'VALUE3');
	return `if(${value1}){\n${value2}}else{\n${value3}};\n`
}
javascript.javascriptGenerator.forBlock['doWaitUntil'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	return `control.waitUntil(${value1});\n`
}
javascript.javascriptGenerator.forBlock['doUntil'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	const value2 = Blockly.JavaScript.statementToCode(block, 'VALUE1');
	return `control.doUntil(${value1},function(){\n${value1}});\n`
}
javascript.javascriptGenerator.forBlock['stopScripts'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	return `control.stop(${value1});\n`
}
javascript.javascriptGenerator.forBlock['whenCloned'] = function (block, generator) {
	const nextBlock = block.getNextBlock();
	return `control.whenCloned(function(){\n${generator.blockToCode(nextBlock)})};\n`
}
javascript.javascriptGenerator.forBlock['createCloneOf'] = function (block, generator) {
	const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
	return `control.createCloneOf(${value1});\n`
}
javascript.javascriptGenerator.forBlock['deleteClone'] = function (block, generator) {
	return `control.deleteClone();\n`
}
