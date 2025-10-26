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
	    	<feOffset in="blur-1" dx="-2" dy="-2" result="offset-3"></feOffset>
	    	<feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-3" result="comp-4"></feComposite>
	    	<feComposite operator="in" in="flood-2" in2="comp-4" result="comp-5"></feComposite>
	    	<feFlood flood-color="#000" flood-opacity="0.7" result="flood-6"></feFlood>
	    	<feOffset in="blur-1" dx="2" dy="2" result="offset-7"></feOffset>
	    	<feComposite k2="1" k3="-1" operator="arithmetic" in="SourceAlpha" in2="offset-7" result="comp-8"></feComposite>
	    	<feComposite operator="in" in="flood-6" in2="comp-8" result="comp-9"></feComposite>
	    	<feMerge result="merge-10">
	    		<feMergeNode in="SourceGraphic"></feMergeNode>
	    		<feMergeNode in="comp-5"></feMergeNode>
	    		<feMergeNode in="comp-9"></feMergeNode>
	    	</feMerge>
	    </filter>`;

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

			this.SMALL_PADDING = this.GRID_UNIT;
		    this.MEDIUM_PADDING = 10;
		    this.MEDIUM_LARGE_PADDING = 3 * this.GRID_UNIT;
		    this.LARGE_PADDING = 4 * this.GRID_UNIT;
		    this.CORNER_RADIUS = 2 * this.GRID_UNIT;
		    this.NOTCH_WIDTH = 8 * this.GRID_UNIT;
		    this.NOTCH_HEIGHT = 1.5 * this.GRID_UNIT;
		    this.NOTCH_OFFSET_LEFT = 5 * this.GRID_UNIT;
		    this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT;
		    this.EMPTY_STATEMENT_INPUT_HEIGHT = 6 * this.GRID_UNIT;
		    this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING;
		    this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = 6 * this.GRID_UNIT;
		    this.ROW_MIN_HEIGHT = 30;
		    this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT;
		    this.STATEMENT_INPUT_SPACER_MIN_WIDTH = 40 * this.GRID_UNIT;
		    this.STATEMENT_INPUT_PADDING_LEFT = 4 * this.GRID_UNIT;
		    this.EMPTY_INLINE_INPUT_PADDING = 4 * this.GRID_UNIT;
		    this.EMPTY_INLINE_INPUT_HEIGHT = 8 * this.GRID_UNIT;
		    this.DUMMY_INPUT_MIN_HEIGHT = 30;
		    this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = 0;
		    this.CURSOR_WS_WIDTH = 20 * this.GRID_UNIT;
		    this.FIELD_TEXT_FONTSIZE = 2.8 * this.GRID_UNIT;
		    this.FIELD_BORDER_RECT_RADIUS = this.CORNER_RADIUS;
		    this.FIELD_BORDER_RECT_X_PADDING = 10;
		    this.FIELD_BORDER_RECT_Y_PADDING = 5;
		    this.FIELD_BORDER_RECT_HEIGHT = 3;
		    this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT;
		    this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING;
		    this.FIELD_COLOUR_DEFAULT_WIDTH = 6 * this.GRID_UNIT;
		    this.FIELD_COLOUR_DEFAULT_HEIGHT = 8 * this.GRID_UNIT;
		    this.FIELD_CHECKBOX_X_OFFSET = 1 * this.GRID_UNIT;
		    this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH = 12 * this.GRID_UNIT;
		    this.START_HAT_WIDTH = 150;
		    this.START_HAT_HEIGHT = 30;
		}
		makeStartHat() {
    // This is where you define the custom shape.
    // This example is conceptual; you'd need real SVG path math.
    const width = this.START_HAT_WIDTH;
    const height = this.START_HAT_HEIGHT;

    return {
      width: 0,
      height: 20,
      // Define the SVG path for your new hat shape (e.g., a simple peak)
      // The path must use relative coordinates.
      path: `c 25,-${height} ${width-29},-${height} ${width},0 z` // close path
    };
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
	class S2Flyout extends Blockly.VerticalFlyout {
		constructor(config) {
			super(config);
		}
		getFlyoutScale() {
			return 0.5;
		}
		position() {
	        super.position(); 

	        const flyoutWidth = document.querySelector("div.blocklyToolbox").offsetWidth;
	        const flyoutHeight = document.querySelector("div.scripts_c").offsetHeight - 151;

	        let x = 0;
	        let y = document.querySelector("div.scripts_c").offsetHeight - flyoutHeight;
	        
	        this.positionAt_(flyoutWidth, flyoutHeight, x, y);
	    }
	}
	const s2theme = Blockly.Theme.defineTheme('scratch2theme', {
		'base': Blockly.Themes.Zelos,
		"startHats": true,
		'categoryStyles': {
			"motion_category": {
				"colour": "#4a6cd4"
			},
			"looks_category": {
				"colour": "#8a55d7"
			},
			"sound_category": {
				"colour": "#bb42c3"
			},
			"events_category": {
				"colour": "#c88330"
			},
			"control_category": {
				"colour": "#e1a91a"
			},
			"sensing_category": {
				"colour": "#2ca5e2"
			},
			"pen_category": {
				"colour": "#0e9a6c"
			},
			"operators_category": {
				"colour": "#5cb712"
			},
			"motion_category": {
				"colour": "#4a6cd4"
			},
			"motion_category": {
				"colour": "#4a6cd4"
			}
		},
		'blockStyles': {
			'motion_blocks': {
				'colourPrimary': "#4a6cd4"
			},
			'looks_blocks': {
				'colourPrimary': "#8a55d7"
			},
			'sound_blocks': {
				'colourPrimary': "#bb42c3"
			},
			'events_blocks': {
				'colourPrimary': "#c88330"
			},
			'control_blocks': {
				'colourPrimary': "#e1a91a"
			},
			'sensing_blocks': {
				'colourPrimary': "#2ca5e2"
			},
			'pen_blocks': {
				'colourPrimary': "#0e9a6c"
			},
			'operators_blocks': {
				'colourPrimary': "#5cb712"
			},
			'motion_blocks': {
				'colourPrimary': "#4a6cd4"
			},
			'motion_blocks': {
				'colourPrimary': "#4a6cd4"
			}
		},
		'componentStyles': {
			'workspaceBackgroundColour': '#DDDEDE',
			'toolboxBackgroundColour': '#E6E8E8',
			'flyoutBackgroundColour': '#E6E8E8',
			'flyoutForegroundColour': '#FFFFFF',
			'flyoutOpacity': 0,
		}
	});
	const toolbox = {
		"kind": "categoryToolbox",
		"contents": [
			motion_blocks,
			events_blocks,
			looks_blocks,
			control_blocks,
			sound_blocks,
			sensing_blocks,
			pen_blocks,
			operators_blocks
		]
	};
	    Blockly.fieldRegistry.register('field_colour_hsv_sliders', FieldColourHsvSliders);
	Blockly.registry.register(Blockly.registry.Type.FLYOUTS_VERTICAL_TOOLBOX, 'S2Flyout', S2Flyout);
	Blockly.blockRendering.register('scratch2_renderer', S2Renderer);
	workspace = Blockly.inject(
		document.querySelector('.scripts_c'), {
			toolbox: toolbox,
			renderer: "scratch2_renderer",
			zoom: {
				controls: true,
				wheel: true,
				startScale: 0.5,
				maxScale: 1,
				minScale: 0.5,
				scaleSpeed: 1.2,
				pinch: true
			},
			trashcan: false,
			sounds: false,
			theme: s2theme,
			plugins: {
				flyoutsVerticalToolbox: 'S2Flyout'
			}
		});
	const wtoolbox = workspace.getToolbox();
	workspace.getToolbox().getFlyout().autoClose = false;
	workspace.getToolbox().getFlyout().autoHide(false);
	wtoolbox.setSelectedItem(wtoolbox.getToolboxItems()[0]);
	defineFilter(workspace)
}