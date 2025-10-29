const sound_def_blocks = [
  {
    "type": "playSound:",
    "style": "sound_blocks",
    "message0": "play sound %1",
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "sound1", "ITEM1" ],
        [ "sound2", "ITEM2" ]
      ]
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "doPlaySoundAndWait",
    "style": "sound_blocks",
    "message0": "play sound %1 until done",
    "args0": [{
      "type": "field_dropdown",
      "name": "VALUE1",
      "options": [
        [ "sound1", "ITEM1" ],
        [ "sound2", "ITEM2" ]
      ]
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "stopAllSounds",
    "style": "sound_blocks",
    "message0": "stop all sounds",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "playDrum",
    "style": "sound_blocks",
    "message0": "play drum %1 for %2 beats",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "rest:elapsed:from:",
    "style": "sound_blocks",
    "message0": "rest for %1 beats",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "noteOn:duration:elapsed:from:",
    "style": "sound_blocks",
    "message0": "play note %1 for %2 beats",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    },{
      "type": "input_value",
      "name": "VALUE2"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "instrument:",
    "style": "sound_blocks",
    "message0": "set instrument to %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "changeVolumeBy:",
    "style": "sound_blocks",
    "message0": "change volume by %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "setVolumeTo:",
    "style": "sound_blocks",
    "message0": "set volume to %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "volume",
    "style": "sound_blocks",
    "message0": "volume",
    "output": "value"
  },
  {
    "type": "changeTempoBy:",
    "style": "sound_blocks",
    "message0": "change tempo by %1",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "setTempoTo:",
    "style": "sound_blocks",
    "message0": "set tempo to %1 bpm",
    "args0": [{
      "type": "input_value",
      "name": "VALUE1"
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "tempo",
    "style": "sound_blocks",
    "message0": "tempo",
    "output": "value"
  },
];

Blockly.common.defineBlocksWithJsonArray(sound_def_blocks);

const sound_blocks = {
      "kind": "category",
      "name": "Sound",
      "categorystyle": "sound_category",
      "contents": [
        {
            "kind": "block",
            "type": "playSound:",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "doPlaySoundAndWait",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "stopAllSounds",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "playDrum",
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
                  "type": "math_number",
                  "fields": {
                    "NUM": 0.5
                  }
                }
              }
            }

        },
        {
            "kind": "block",
            "type": "rest:elapsed:from:",
            "gap": 32,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 0.25
                  }
                }
              }
            }

        },
        {
            "kind": "block",
            "type": "noteOn:duration:elapsed:from:",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 60
                  }
                }
              },
              "VALUE2": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 0.5
                  }
                }
              }
            }

        },
        {
            "kind": "block",
            "type": "instrument:",
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
            "type": "changeVolumeBy:",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": -10
                  }
                }
              }
            }

        },
        {
            "kind": "block",
            "type": "setVolumeTo:",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 100
                  }
                }
              }
            }

        },
        {
            "kind": "block",
            "type": "volume",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "changeTempoBy:",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 20
                  }
                }
              }
            }

        },
        {
            "kind": "block",
            "type": "setTempoTo:",
            "gap": 16,
            "inputs": {
              "VALUE1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 60
                  }
                }
              }
            }
        },
        {
            "kind": "block",
            "type": "tempo"
        }
      ]
    }

javascript.javascriptGenerator.forBlock['playSound:'] = function (block, generator) {
  return `sound.play("${block.getFieldValue('VALUE1')}");\n`
}
javascript.javascriptGenerator.forBlock['doPlaySoundAndWait'] = function (block, generator) {
  return `sound.playUntil("${block.getFieldValue('VALUE1')}");\n`
}
javascript.javascriptGenerator.forBlock['stopAllSounds'] = function (block, generator) {
  return `sound.stopAllSounds();\n`
}
javascript.javascriptGenerator.forBlock['playDrum'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', order);
  return `sound.playDrum(${value1}, ${value2});\n`
}
javascript.javascriptGenerator.forBlock['rest:elapsed:from'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `sound.rest(${value1});\n`
}
javascript.javascriptGenerator.forBlock['noteOn:duration:elapsed:from:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  const value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', order);
  return `sound.playNote(${value1}, ${value2});\n`
}
javascript.javascriptGenerator.forBlock['instrument:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `sound.setInstrument(${value1});\n`
}
javascript.javascriptGenerator.forBlock['changeVolumeBy:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `sound.changeVolume(${value1});\n`
}
javascript.javascriptGenerator.forBlock['setVolumeTo:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `sound.setVolume(${value1});\n`
}
javascript.javascriptGenerator.forBlock['volume'] = function (block, generator) {
  return [`sound.volume`,order]
}
javascript.javascriptGenerator.forBlock['changeTempoBy:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `sound.changeTempo(${value1});\n`
}
javascript.javascriptGenerator.forBlock['setTempoTo:'] = function (block, generator) {
  const value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', order);
  return `sound.setTempo(${value1});\n`
}
javascript.javascriptGenerator.forBlock['tempo'] = function (block, generator) {
  return [`sound.tempo`,order]
}