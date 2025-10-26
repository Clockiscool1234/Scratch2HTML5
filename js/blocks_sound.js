Blockly.common.defineBlocksWithJsonArray([
  {
    "type": "play",
    "style": "sound_blocks",
    "message0": "play sound %1",
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
      "options": [
        [ "sound1", "ITEM1" ],
        [ "sound2", "ITEM2" ]
      ]
    }],
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "playUntil",
    "style": "sound_blocks",
    "message0": "play sound %1 until done",
    "args0": [{
      "type": "field_dropdown",
      "name": "FIELDNAME",
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
    "type": "playDrum:for:beats",
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
    "type": "restFor:beats",
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
    "type": "playNote:for:beats",
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
    "type": "setInstrument:",
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
    "type": "changeVolume:",
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
    "type": "setVolume:",
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
    "type": "changeTempo:",
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
    "type": "setTempo:",
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
]);

const sound_blocks = {
      "kind": "category",
      "name": "Sound",
      "categorystyle": "sound_category",
      "contents": [
        {
            "kind": "block",
            "type": "play",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "playUntil",
            "gap": 16
        },
        {
            "kind": "block",
            "type": "stopAllSounds",
            "gap": 32
        },
        {
            "kind": "block",
            "type": "playDrum:for:beats",
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
            "type": "restFor:beats",
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
            "type": "playNote:for:beats",
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
            "type": "setInstrument:",
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
            "type": "changeVolume:",
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
            "type": "setVolume:",
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
            "type": "changeTempo:",
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
            "type": "setTempo:",
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

