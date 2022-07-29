w = window.innerWidth;
h = window.innerHeight;
colorA = '#051205';
colorB = '#8476F5';
colorC = '#6BF55D';
colorD = '#F58B45';
colorE = '#FFF0E6';
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
gauge_new_0 = new RadialGauge({
    renderTo: 'gauge_new0',
    width: w,
    height: h,
    units: 'Бар',
    title: 'Вход',
    value: 0,
    minValue: 0,
    maxValue: 220,
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 10,
    strokeTicks: true,
    highlightsWidth: 5,
    highlights: [
        { from: 0, to: 150, color: colorB },
        { from: 150, to: 200, color: colorC },
        { from: 200, to: 220, color: colorD }
    ],
/*
    colorPlate: '#222',
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
*/
    colorMajorTicks: colorA,
    colorMinorTicks: colorA,
    colorTitle: colorA,
    colorUnits: colorA,
    colorNumbers: colorA,

    colorNeedle: colorA,
    colorNeedleEnd: colorA,

    colorBorderOuter: colorA,

    valueBox: true,
    animationRule: 'linear',

    animationDuration: 200

}).draw();

gauge_new_1 = new RadialGauge({
    renderTo: 'gauge_new1',
    width: w,
    height: h,
    units: 'Бар',
    title: 'Выход',
    value: 0,
    minValue: 0,
    maxValue: 220,
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 10,
    strokeTicks: true,
    highlightsWidth: 5,
    highlights: [
        { from: 0, to: 150, color: colorB },
        { from: 150, to: 200, color: colorC },
        { from: 200, to: 220, color: colorD }
    ],
/*
    colorPlate: '#222',
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
*/
    colorMajorTicks: colorA,
    colorMinorTicks: colorA,
    colorTitle: colorA,
    colorUnits: colorA,
    colorNumbers: colorA,

    colorNeedle: colorA,
    colorNeedleEnd: colorA,

    colorBorderOuter: colorA,

    valueBox: true,
    animationRule: 'linear',

    animationDuration: 200
}).draw();

gauge_new_2 = new RadialGauge({
    renderTo: 'gauge_new2',
    width: w,
    height: h,
    units: '%',
    title: 'Задвижка',
    border : true,
    value: 0,
    minValue: 0,
    maxValue: 100,
    majorTicks: [
        '0','10','20','30','40','50','60','70','80','90','100'
    ],
    minorTicks: 10,
    strokeTicks: true,
    highlightsWidth: 5,
    highlights: [
        { from: 0, to: 70, color: colorB },
        { from: 70, to: 90, color: colorC },
        { from: 90, to: 100, color: colorD }
    ],

//!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
    colorPlate: '#222',
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!

    colorMajorTicks: colorA,
    colorMinorTicks: colorA,
    colorTitle: colorA,
    colorUnits: colorA,
    colorNumbers: colorA,

    colorNeedle: colorA,
    colorNeedleEnd: colorA,

    colorBorderOuter: colorA,

    valueBox: true,
    animationRule: 'linear',

    animationDuration: 200
}).draw();
if (!window.addEventListener) {
    window.addEventListener = function(evt, listener) {
        window.attachEvent('on' + evt, listener);
    };
}




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
}else
{
w = ( w / 3 ) * 0.75;// * ( w / h );
h = w * 3;
}


    gauge_new_0.update({
    width : w, 
    height : h
});
    gauge_new_1.update({
    width : w, 
    height : h
});
    gauge_new_2.update({
    width : w, 
    height : h
});
});  

