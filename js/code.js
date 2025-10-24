var workspace
var wtoolbox

function createCodePage() {
	function defineFilter(workspace) {

		// The raw <filter> SVG string you provided
		const filterString = `
	    <filter id="bevelFilter" y0="-50%" x0="-50%" height="200%" width="200%">
	      <feGaussianBlur in="SourceAlpha" stdDeviation="1 1" result="blur-1"></feGaussianBlur>
	      <feFlood flood-color="#fff" result="flood-2" flood-opacity="0.25"></feFlood>
	      <feOffset in="blur-1" result="offset-3" dx="2" dy="2"></feOffset>
	      <feComposite k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-3" result="comp-4" k2="1"></feComposite>
	      <feComposite operator="in" in="flood-2" in2="comp-4" result="comp-5"></feComposite>
	      <feFlood flood-color="#000" result="flood-6" flood-opacity="0.7"></feFlood>
	      <feOffset in="blur-1" result="offset-7" dx="-2" dy="-2"></feOffset>
	      <feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-7" result="comp-8"></feComposite>
	      <feComposite operator="in" in="flood-6" in2="comp-8" result="comp-9"></feComposite>
	      <feMerge result="merge-10">
	        <feMergeNode in="SourceGraphic"></feMergeNode>
	        <feMergeNode in="comp-5"></feMergeNode>
	        <feMergeNode in="comp-9"></feMergeNode>
	      </feMerge>
	    </filter>
	    <filter id="inputBevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
	    	<feGaussianBlur in="SourceAlpha" stdDeviation="1 1" result="blur-1"></feGaussianBlur>
	    	<feFlood flood-color="#fff" flood-opacity="0.15" result="flood-2"></feFlood>
	    	<feOffset in="blur-1" dx="-1" dy="-1" result="offset-3"></feOffset>
	    	<feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-3" result="comp-4"></feComposite>
	    	<feComposite operator="in" in="flood-2" in2="comp-4" result="comp-5"></feComposite>
	    	<feFlood flood-color="#000" flood-opacity="0.7" result="flood-6"></feFlood>
	    	<feOffset in="blur-1" dx="3" dy="3" result="offset-7"></feOffset>
	    	<feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-7" result="comp-8"></feComposite>
	    	<feComposite operator="in" in="flood-6" in2="comp-8" result="comp-9"></feComposite>
	    	<feMerge result="merge-10">
	    		<feMergeNode in="SourceGraphic"></feMergeNode>
	    		<feMergeNode in="comp-5"></feMergeNode>
	    		<feMergeNode in="comp-9"></feMergeNode>
	    	</feMerge>
	    </filter>	  `;

		const svg = workspace.getParentSvg();
		let defs = svg.querySelector('defs');
		if (!defs) {
			// Create <defs> if it doesn't exist
			defs = Blockly.utils.dom.createSvgElement('defs', {}, svg);
		}


		// Add your filter string to the <defs>
		// Using insertAdjacentHTML is safer than .innerHTML +=
		// as it avoids re-parsing the existing definitions.
		defs.insertAdjacentHTML('beforeend', filterString);
	}
	class S2ConstantProvider extends Blockly.zelos.ConstantProvider {
		constructor() {
			// Set up all of the constants from the base provider.
			super();
			this.NOTCH_HEIGHT = 1.5 * this.GRID_UNIT;
			this.NOTCH_WIDTH = 7.5 * this.GRID_UNIT;
			this.NOTCH_OFFSET_LEFT = 3.5 * this.GRID_UNIT;
			this.CORNER_RADIUS = 1.5 * this.GRID_UNIT;
			this.EMPTY_INLINE_INPUT_PADDING = 5 * this.GRID_UNIT;
			this.EMPTY_INLINE_INPUT_HEIGHT = 5 * this.GRID_UNIT;
			this.DUMMY_INPUT_MIN_HEIGHT = 5 * this.GRID_UNIT;
			this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = 5 * this.GRID_UNIT;
			this.FIELD_BORDER_RECT_Y_PADDING = 1;
			this.FIELD_TEXT_FONTSIZE = 3 * this.GRID_UNIT;
			this.FIELD_BORDER_RECT_HEIGHT = 5;
		}

		makePathObject(root, style) {
			return new S2PathObject(root, style, this);
		}
	}
	class S2PathObject extends Blockly.blockRendering.PathObject {
		constructor(root, style, constants) {
			super(root, style, constants);
		}
		createDom() {
			super.createDom();
			this.svgPath.setAttribute('filter', 'url(#bevelFilter)');
		}
	}
	class S2Renderer extends Blockly.zelos.Renderer {
		constructor() {
			super();
		}
		makeConstants_() {
			return new S2ConstantProvider();
		}
	}
	class FixedScaleFlyout extends Blockly.VerticalFlyout {
		constructor(config) {
			super(config);
		}

		/**
		 * Override this method to return a constant scale, preventing the flyout
		 * from zooming with the main workspace.
		 * @returns {number} The scale (zoom level) of the flyout.
		 */
		getFlyoutScale() {
			return 0.6;
		}
	}
	const s2theme = Blockly.Theme.defineTheme('scratch2theme', {
		'base': Blockly.Themes.Zelos,
		"startHats": false,
		'categoryStyles': {
			"motion_category": {
				"colour": "#4a6cd4"
			}
		},
		'blockStyles': {
			'motion_blocks': {
				'colourPrimary': "#4a6cd4"
			},
		},
		'componentStyles': {
			'workspaceBackgroundColour': '#DDDEDE',
			'toolboxBackgroundColour': '#E6E8E8',
			'flyoutBackgroundColour': '#E6E8E8',
			'flyoutForegroundColour': '#FFFFFF',
			'flyoutOpacity': 1,
		}
	});
	const toolbox = {
		"kind": "categoryToolbox",
		"contents": [{
			"kind": "category",
			"name": "Motion",
			"categorystyle": "motion_category",
			"expanded": "true",
			"contents": [{
					"kind": "block",
					"type": "forward:",
					"inputs": {
						"VALUE1": {
							"shadow": {
								"type": "math_number",
								"fields": {
									"NUM": 15
								}
							}
						}
					}
				},
				{
					"kind": "block",
					"type": "turnRight:",
					"inputs": {
						"VALUE1": {
							"shadow": {
								"type": "math_number",
								"fields": {
									"NUM": 15
								}
							}
						}
					}
				},
				{
					"kind": "block",
					"type": "turnLeft:",
					"inputs": {
						"VALUE1": {
							"shadow": {
								"type": "math_number",
								"fields": {
									"NUM": 15
								}
							}
						}
					}
				},
				{
					"kind": "block",
					"type": "heading:",
					"inputs": {
						"VALUE1": {
							"shadow": {
								"type": "math_number",
								"fields": {
									"NUM": 90
								}
							}
						}
					}
				},
				{
					"kind": "block",
					"type": "pointTowards:"
				},
				{
					"kind": "block",
					"type": "gotoX:y:",
					"inputs": {
						"VALUE1": {
							"shadow": {
								"type": "math_number",
								"fields": {
									"NUM": 0
								}
							}
						},
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
					"type": "gotoSpriteOrMouse:"
				},
				{
					"kind": "block",
					"type": "glideSecs:toX:y:elapsed:from:",
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
									"NUM": 0
								}
							}
						},
						"VALUE3": {
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
					"type": "changeXposBy:",
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
					"type": "xpos:",
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
					"type": "changeYposBy:",
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
					"type": "ypos:",
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
					"type": "bounceOffEdge"
				},
				{
					"kind": "block",
					"type": "setRotationStyle"
				},
				{
					"kind": "block",
					"type": "xpos"
				},
				{
					"kind": "block",
					"type": "ypos"
				},
				{
					"kind": "block",
					"type": "heading"
				},
			]
		}]
	};
	Blockly.registry.register(Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX, 'FixedScaleFlyout', FixedScaleFlyout);
	Blockly.blockRendering.register('scratch2_renderer', S2Renderer);
	const workspace = Blockly.inject(
		document.querySelector('.scripts_c'), {
			toolbox: toolbox,
			renderer: "scratch2_renderer",
			zoom: {
				controls: true,
				wheel: true,
				startScale: 0.6,
				maxScale: 3,
				minScale: 0.6,
				scaleSpeed: 1.2,
				pinch: true
			},
			trashcan: false,
			theme: s2theme,
			plugins: {
				flyoutsVerticalToolbox: 'FixedScaleFlyout'
			}
		});
	const wtoolbox = workspace.getToolbox();
	workspace.getToolbox().getFlyout().autoClose = false;
	workspace.getToolbox().getFlyout().autoHide(false);
	wtoolbox.setSelectedItem(wtoolbox.getToolboxItems()[0]);
	defineFilter(workspace)
}