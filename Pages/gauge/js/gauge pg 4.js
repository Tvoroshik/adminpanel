w = window.innerWidth;
h = window.innerHeight;

colorborder = '#77F4F8';
colorneedle = '#79B1F5';
colorplate  = '#3D3D3D';

console.log('W=',w," H=",h);
if( h < w )
	{
	//h = window.innerHeight;
	w = ( w / 3 ) * 0.75;// * ( h / w );
	h = w;
	}
	else
	{
	w = ( w / 3 ) * 0.75;// * ( w / h );
	h = w * 3;
	}

gauge_page4_0 = new RadialGauge({
    renderTo: 'gauge_page4_0',
    width: w,
    height: h,
    units: 'Бар',
    title: 'Вход',
    border: false,
    startAngle : 45 , 
    ticksAngle : 180 ,
    value: 0,
    minValue: 0,
    maxValue: 180,
    majorTicks: [
    	'0', '20', '40', '60', '80', '100', '120', '140', '160', '180'
    ],
    minorTicks: 10,
    strokeTicks: false,
    barWidth: 0.3,
    highlightsWidth: 2,
    colorBar: colorplate,
    colorBarProgress: colorneedle,
    highlights: [
    	{ from: 0, to: 120, color: colorplate },
    	{ from: 120, to: 160, color: colorplate },
    	{ from: 160, to: 180, color: '#FF6700' }
],
//!!!!!!!!!!!!!!!!!!!!!!!!!!!
    borderOuterWidth: 0,
    borderMiddleWidth : 0,
    borderInnerWidth : 0,
    borderShadowWidth : 0,
    colorBorderOuter : colorborder,
    colorBorderOuterEnd : colorborder,
//!!!!!!!!!!!!!!!!!!!!!!!!!!!
    colorPlate: colorplate,
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
//
    needleCircleSize : 1, 
    needCircleOuter : true, 
    needleCircleInner : false, 
    needleType: "line",
    needleWidth: 3,
    colorNeedle: colorneedle,
    colorNeedleEnd: colorneedle,
    //colorNeedle: 'rgba(255, 128, 0, .9)',
    //colorNeedleEnd: 'rgba(255, 128, 0, .9)',
    colorNeedleCircleOuter: colorneedle,
    valueBox: true,
    valueBoxWidth: 30,

    valueBoxStroke: 0,
    valueBoxBorderRadius: 3,
    /*
    colorValueBoxRect : colorborder,
    colorValueBoxRectEnd : colorborder,
    colorValueText: '#eee', 
    colorValueBoxBackground: colorplate, 
    */
    valueInt: 3,
    valueDec: 0,
    animationRule: 'bounce',
    animationDuration: 500
}).draw();

gauge_page4_1 = new RadialGauge({
    renderTo: 'gauge_page4_1',
    width: w,
    height: h,
    units: '%',
    title: 'Задвижка',
    value: 0,
    minValue: 0,
    maxValue: 100,
    majorTicks: [
    	'0', '20', '40', '60', '80', '100'
    ],
    minorTicks: 10,
    strokeTicks: false,
    barWidth: 0.3,
    highlightsWidth: 2,
    colorBar: '#ddd',
    colorBarProgress: colorneedle,
    highlights: [
    	{ from: 0, to: 70, color: colorplate },
    	{ from: 70, to: 90, color: colorplate },
    	{ from: 90, to: 100, color: '#FF6700' }
    ],
    borderOuterWidth: 0,
    borderMiddleWidth : 0,
    borderInnerWidth : 0,
    borderShadowWidth : 0,
    colorBorderOuter : colorborder,
    colorBorderOuterEnd : colorborder,
    
    colorPlate: colorplate,
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
    
    needleCircleSize : 1, 
    needCircleOuter : true, 
    needleCircleInner : false, 
    needleType: "line",
    needleWidth: 3,
    colorNeedle: colorneedle,
    colorNeedleEnd: colorneedle,
    colorNeedleCircleOuter: colorneedle,
    
    valueBox: true,
    valueBoxWidth: 30,
    valueBoxStroke: 0,
valueBoxBorderRadius: 3,
    /*
    colorValueBoxRect : colorborder,
    colorValueBoxRectEnd : colorborder,
    colorValueText: '#eee', 
    colorValueBoxBackground: colorplate, 
    */
    valueInt: 3,
    valueDec: 0,

    animationRule: 'bounce',
    animationDuration: 500
}).draw();

gauge_page4_2 = new RadialGauge({
    renderTo: 'gauge_page4_2',
    width: w,
    height: h,
    units: '%',
    title: 'Выход',
    value: 0,
    startAngle : 135 , 
    ticksAngle : 180 ,
    minValue: 0,
    maxValue: 180,
    majorTicks: [
    	'0', '20', '40', '60', '80', '100', '120', '140', '160', '180'
    ],
    minorTicks: 10,
    strokeTicks: false,
    barWidth: 0.3,
    highlightsWidth: 2,
    colorBar: colorplate,
    colorBarProgress: colorneedle,
    highlights: [
        	{ from: 0, to: 120, color: colorplate },
        	{ from: 120, to: 160, color: colorplate },
        	{ from: 160, to: 180, color: '#FF6700' }
        ],
    borderOuterWidth: 0,
    borderMiddleWidth : 0,
    borderInnerWidth : 0,
    borderShadowWidth : 0,
    colorBorderOuter : colorborder,
    colorBorderOuterEnd : colorborder,
    
    colorPlate: colorplate,
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
    
    needleCircleSize : 1, 
    needCircleOuter : true, 
    needleCircleInner : false, 
    needleType: "line",
    needleWidth: 3,
    colorNeedle: colorneedle,
    colorNeedleEnd: colorneedle,
    //colorNeedle: 'rgba(255, 128, 0, .9)',
    //colorNeedleEnd: 'rgba(255, 128, 0, .9)',
    colorNeedleCircleOuter: colorneedle,
    
    valueBox: true,
    valueBoxWidth: 30,
    valueBoxStroke: 0,
    valueBoxBorderRadius: 3,
    /*
    colorValueBoxRect : colorborder,
    colorValueBoxRectEnd : colorborder,
    colorValueText: '#eee', 
    colorValueBoxBackground: colorplate, 
    */
    valueInt: 3,
    valueDec: 0,
    
    animationRule: 'bounce',
    animationDuration: 500
}).draw();
window.addEventListener('resize', function (event) {
    //window.location.reload();
    w = window.innerWidth;
    h = window.innerHeight;
    console.log('W=',w," H=",h);
    if( h < w )
    {
    //h = window.innerHeight;
        w = ( w / 3 ) * 0.75;// * ( h / w );
        h = w;
    }
    else
    {
        w = ( w / 3 ) * 0.75;// * ( w / h );
        h = w * 3;
    }
    
    gauge_page4_0.update({
        width : w, 
        height : h
    });
    gauge_page4_1.update({
        width : w, 
        height : h
    });
    gauge_page4_2.update({
        width : w,  
        height : h
    });
});
