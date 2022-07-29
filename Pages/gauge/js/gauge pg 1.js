w = window.innerWidth;
h = window.innerHeight;
colorR = '#8B0000';
colorborder = '#77F4F8';
colorneedle = '#79B1F5';
colorplate = '#3D3D3D';

console.log('W=', w, " H=", h);
if (h < w) {
	//h = window.innerHeight;
	w = (w / 3) * 0.6;// * ( h / w );
	h = w;
}
else {
	w = (w / 3) * 0.6;// * ( w / h );
	h = w * 3;
}

gauge_object_0 = new RadialGauge({
	renderTo: 'gauge0',
	width: w,
	height: h,
	units: '°C',
	title: "Температура",
	border: true,
	//startAngle : 90 , 
	//ticksAngle : 180 ,
	value: 0,
	minValue: -10,
	maxValue: 50,
	majorTicks: [
		'-10', '0', '10', '20', '30', '40', '50'
	],
	minorTicks: 10,
	strokeTicks: false,
	barWidth: 0.3,
	highlightsWidth: 2.5,
	colorBar: colorborder,
	colorBarProgress: colorneedle,
	highlights: [
		{ from: -10, to: 0, color: colorD },
		{ from: 0, to: 35, color: colorplate },
		{ from: 35, to: 50, color: colorD },
	],
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	borderOuterWidth: 1.5,
	borderMiddleWidth: 0,
	borderInnerWidth: 0,
	borderShadowWidth: 0,
	colorBorderOuter: colorborder,
	colorBorderOuterEnd: colorborder,
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	/*
	
	  <canvas data-type="radial-gauge" 
	data-value="-20" 
	data-width="400" 
	data-height="400" 
	data-bar-width="2" 
	data-bar-shadow="0" 
	data-border-inner-width="0" 
	data-border-outer-width="0" 
	data-border-middle-width="0" 
	data-color-bar-progress="rgba(50,50,200,.75)" 
	data-color-bar="#aae" 
	data-color-needle="rgba(50,50,200,.75)" 
	data-color-needle-end="#aae" 
	data-highlights="false" 
	data-value-box-border-radius="0" 
	data-value-box-stroke="1" 
	data-color-value-box-shadow="0" 
	data-needle-type="line" 
	data-needle-width="1" 
	data-needle-circle-size="5" 
	data-needle-circle-inner="false" 
	data-color-needle-circle-outer="rgba(50,50,200,.75)" 
	data-color-needle-circle-outer-end="#aae" 
	data-stroke-ticks="0" 
	width="381" 
	height="381" 
	style="width: 400px; height: 400px;"></canvas>
	
	
	
	*/
	colorPlate: colorplate,
	colorMajorTicks: '#f5f5f5',
	colorMinorTicks: '#ddd',
	colorTitle: '#fff',
	colorUnits: '#ccc',
	colorNumbers: '#eee',
	//
	needleCircleSize: 1,
	needCircleOuter: true,
	needleCircleInner: false,
	needleType: "line",
	needleWidth: 2,
	colorNeedle: colorneedle,
	colorNeedleEnd: colorneedle,
	//colorNeedle: 'rgba(255, 128, 0, .9)',
	//colorNeedleEnd: 'rgba(255, 128, 0, .9)',
	colorNeedleCircleOuter: colorneedle,
	valueBox: true,
	valueBoxWidth: 30,
	valueBoxStroke: 1.1,
	valueBoxBorderRadius: 1,
	colorValueBoxRect: colorborder,
	colorValueBoxRectEnd: colorborder,
	colorValueText: '#eee',
	colorValueBoxBackground: colorplate,
	valueInt: 3,
	valueDec: 0,


	animationRule: 'bounce',
	animationDuration: 500
}).draw();

gauge_object_1 = new RadialGauge({
	renderTo: 'gauge1',
	width: w,
	height: h,
	units: '%',
	title: "Влажность",
	value: 0,
	minValue: 0,
	maxValue: 100,
	majorTicks: [
		'0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100',
	],
	minorTicks: 10,
	strokeTicks: false,
	barWidth: 0.3,
	highlightsWidth: 2.5,
	colorBar: colorborder,
	colorBarProgress: colorneedle,
	highlights: [
		{ from: 0, to: 20, color: colorD },
		{ from: 20, to: 85, color: colorplate },
		{ from: 85, to: 100, color: colorD },
	],
	borderOuterWidth: 1.5,
	borderMiddleWidth: 0,
	borderInnerWidth: 0,
	borderShadowWidth: 0,
	colorBorderOuter: colorborder,
	colorBorderOuterEnd: colorborder,

	colorPlate: colorplate,
	colorMajorTicks: '#f5f5f5',
	colorMinorTicks: '#ddd',
	colorTitle: '#fff',
	colorUnits: '#ccc',
	colorNumbers: '#eee',

	needleCircleSize: 1,
	needCircleOuter: true,
	needleCircleInner: false,
	needleType: "line",
	needleWidth: 2,
	colorNeedle: colorneedle,
	colorNeedleEnd: colorneedle,
	colorNeedleCircleOuter: colorneedle,

	valueBox: true,
	valueBoxWidth: 30,
	valueBoxStroke: 1.1,
	valueBoxBorderRadius: 1,
	colorValueBoxRect: colorborder,
	colorValueBoxRectEnd: colorborder,
	colorValueText: '#eee',
	colorValueBoxBackground: colorplate,
	valueInt: 3,
	valueDec: 0,

	animationRule: 'bounce',
	animationDuration: 500
}).draw();

gauge_object_2 = new RadialGauge({
	renderTo: 'gauge2',
	width: w,
	height: h,
	units: 'dBm',
	title: "WiFi",
	value: 0,
	minValue: -120,
	maxValue: 0,
	majorTicks: [
		'-120', '-110', '-100', '-90', '-80', '-70', '-60', '-50', '-40', '-30', '-20', '-10', '0'
	],
	minorTicks: 10,
	strokeTicks: false,
	barWidth: 0.3,
	highlightsWidth: 2.5,
	colorBar: colorborder,
	colorBarProgress: colorneedle,
	highlights: [
		{ from: -120, to: -110, color: colorD },
		{ from: -110, to: -20, color: colorplate },
		{ from: -20, to: 0, color: colorD },
	],
	borderOuterWidth: 1.5,
	borderMiddleWidth: 0,
	borderInnerWidth: 0,
	borderShadowWidth: 0,
	colorBorderOuter: colorborder,
	colorBorderOuterEnd: colorborder,

	colorPlate: colorplate,
	colorMajorTicks: '#f5f5f5',
	colorMinorTicks: '#ddd',
	colorTitle: '#fff',
	colorUnits: '#ccc',
	colorNumbers: '#eee',

	needleCircleSize: 1,
	needCircleOuter: true,
	needleCircleInner: false,
	needleType: "line",
	needleWidth: 2,
	colorNeedle: colorneedle,
	colorNeedleEnd: colorneedle,
	//colorNeedle: 'rgba(255, 128, 0, .9)',
	//colorNeedleEnd: 'rgba(255, 128, 0, .9)',
	colorNeedleCircleOuter: colorneedle,

	valueBox: true,
	valueBoxWidth: 30,
	valueBoxStroke: 1.1,
	valueBoxBorderRadius: 1,
	colorValueBoxRect: colorborder,
	colorValueBoxRectEnd: colorborder,
	colorValueText: '#eee',
	colorValueBoxBackground: colorplate,
	valueInt: 3,
	valueDec: 0,

	animationRule: 'bounce',
	animationDuration: 500
}).draw();