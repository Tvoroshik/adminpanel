var Year
var date = new Date();
var footerdata;
footerdata = "&#169; " + "Company_Name " + date.getFullYear();
document.getElementById("footer_data").innerHTML = footerdata;



function promptPassword(pass_answer) {
    error_msg = pass_answer;
    document.getElementById('overlay').style.display = 'none';
}

var zNodes = [
    { id: 1, pId: 0, name: "[core] Basic elements", open: false, iconSkin:"alarm", },
    { id: 101, pId: 1, name: "WebGl", file: "Pages/webgl/app/index", iconSkin:"normal", },
    { id: 102, pId: 1, name: "Charts", file: "Pages/charts/index", iconSkin:"normal", },
    { id: 103, pId: 1, name: "Gauge", file: "Pages/gauge/index", iconSkin:"normal", },
    { id: 104, pId: 1, name: "Apex Charts", file: "Pages/charts/index2", iconSkin:"normal", },

   

];

$(document).ready(function () {
    var t = $("#tree");
    t = $.fn.zTree.init(t, setting, zNodes);
    demoIframe = $("#testIframe");
    demoIframe.bind("load", loadReady);
    var zTree = $.fn.zTree.getZTreeObj("tree");
    zTree.selectNode(zTree.getNodeByParam("id", 101));

});

function loadReady() {
    var bodyH = demoIframe.contents().find("body").get(0).scrollHeight,
        htmlH = demoIframe.contents().find("html").get(0).scrollHeight,
        maxH = Math.max(bodyH, htmlH), minH = Math.min(bodyH, htmlH),
        h = demoIframe.height() >= maxH ? minH : maxH;
    if (h < 530) h = 530;
    demoIframe.height(h);
}

document.getElementById("Quit").addEventListener("click", function () {
    window.location.reload();
    window.top.location.reload();
});
function sendMeToEdit() {
    document.getElementById('testIframe').src = "./Pages/datatables/index.html";
};
function sendMeToProfile() {
    document.getElementById('testIframe').src = "./Pages/datatables/index2.html";
};