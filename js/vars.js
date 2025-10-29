var order = javascript.Order.ATOMIC;
var hatBlocks = [
	"events.whenGreenFlag", 
	"events.whenKeyPressed", 
	"events.whenThisClicked", 
	"events.whenSceneStarts", 
	"events.whenSensorGreaterThan", 
	"events.whenIReceive"
];
var stageBlockChange = [
	"motion",
	"looks"
];
var blocks = [
	motion_def_blocks,
	events_def_blocks,
	looks_def_blocks,
	control_def_blocks,
	sound_def_blocks,
	sensing_def_blocks,
	pen_def_blocks,
	operators_def_blocks,
	data_def_blocks
];