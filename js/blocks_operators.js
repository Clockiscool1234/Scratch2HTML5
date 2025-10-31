const operators_def_blocks = [ 
  {
    "type": "+",
    "message0": "%1 + %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "-",
    "message0": "%1 - %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "*",
    "message0": "%1 * %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "/",
    "message0": "%1 / %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "randomFrom:to:",
    "message0": "pick random from %1 to %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "<",
    "message0": "%1 < %2",
    "style": "operators_blocks",
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "=",
    "message0": "%1 = %2",
    "style": "operators_blocks",
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": ">",
    "message0": "%1 > %2",
    "style": "operators_blocks",
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "&",
    "message0": "%1 and %2",
    "style": "operators_blocks",
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }, {
      "type": "input_value",
      "name": "VALUE2",
      "check": "Boolean"
    }]
  }, {
    "type": "|",
    "message0": "%1 or %2",
    "style": "operators_blocks",
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }, {
      "type": "input_value",
      "name": "VALUE2",
      "check": "Boolean"
    }]
  }, {
    "type": "not",
    "message0": "not %1",
    "style": "operators_blocks",
    "output": "Boolean",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1",
      "check": "Boolean"
    }]
  }, {
    "type": "concatenate:with:",
    "message0": "join %1 %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  }, {
    "type": "letter:of:",
    "message0": "letter %1 of %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  },{
    "type": "%",
    "message0": "%1 mod %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  },{
    "type": "\\\\",
    "message0": "%1 mod %2",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }, {
      "type": "input_value",
      "name": "VALUE2"
    }]
  },{
    "type": "stringLength:",
    "message0": "length of %1",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "rounded",
    "message0": "round %1",
    "style": "operators_blocks",
    "output": "value",
    "inputsInline": true,
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }]
  },{
    "type": "computeFunction:of:",
    "message0": '%1 of %2',
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        ["abs", "ITEM1"],
        ["floor", "ITEM2"],
        ["ceiling", "ITEM3"],
        ["sqrt", "ITEM4"],
        ["sin", "ITEM5"],
        ["cos", "ITEM6"],
        ["tan", "ITEM7"],
        ["asin", "ITEM8"],
        ["acod", "ITEM9"],
        ["atan", "ITEM10"],
        ["ln", "ITEM11"],
        ["log", "ITEM12"],
        ["e ^", "ITEM13"],
        ["10 ^", "ITEM14"]
      ]
    },{
      "type": "input_value",
      "name": "VALUE2"
    }],
    "style": "operators_blocks",
    "output": "value"
  }
];

Blockly.common.defineBlocksWithJsonArray(operators_def_blocks);

const operators_blocks = {
      "kind": "category",
      "name": "Operators",
      "categorystyle": "operators_category",
      "contents": [
        {
            "kind": "block",
            "type": "+",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "-",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "*",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "/",
            "gap": 32,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "randomFrom:to:",
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
                    "NUM": 10
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "<",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "=",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "text"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "text"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": ">",
            "gap": 32,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "&",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "|",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "not",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "concatenate:with:",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "hello "
                  }
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "world"
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "letter:of:",
            "gap": 16,
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
                  "type": "text",
                  "fields": {
                    "TEXT": "world"
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "stringLength:",
            "gap": 32,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "world"
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "%",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "rounded",
            "gap": 32,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number"
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "computeFunction:of:",
            "inputs": {
              "VALUE2": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 9
                  }
                }
              }
            }
        },
      ]
    }