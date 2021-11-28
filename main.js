/*  
Marco Aldair de Jesus Caceres
18390579
*/


/* 
Ejercicio 1
------------------------------------------

{"menu": {
    "header": "SVG Viewer",
    "items": [
        {"id": "Open"},
        {"id": "OpenNew", "label": "Open New"},
        null,
        {"id": "ZoomIn", "label": "Zoom In"},
        {"id": "ZoomOut", "label": "Zoom Out"},
        {"id": "OriginalView", "label": "Original View"},
        null,
        {"id": "Quality"},
        {"id": "Pause"},
        {"id": "Mute"},
        null,
        {"id": "Find", "label": "Find..."},
        {"id": "FindAgain", "label": "Find Again"},
        {"id": "Copy"},
        {"id": "CopyAgain", "label": "Copy Again"},
        {"id": "CopySVG", "label": "Copy SVG"},
        {"id": "ViewSVG", "label": "View SVG"},
        {"id": "ViewSource", "label": "View Source"},
        {"id": "SaveAs", "label": "Save As"},
        null,
        {"id": "Help"},
        {"id": "About", "label": "About Adobe CVG Viewer..."}
    ]
}}
*/

let objeto = new Object();
objeto.menu = new Object();
objeto.menu.header = "SVG Viewer";
objeto.menu.items = new Array();
objeto.menu.items[0] = new Object();
objeto.menu.items[0].id = "open";
objeto.menu.items[1] = new Object();
objeto.menu.items[1].id = "OpenNew";
objeto.menu.items[1].label = "Open New";
objeto.menu.items[2] = null;
objeto.menu.items[3] = new Object();
objeto.menu.items[3].id = "ZoomIn";
objeto.menu.items[3].label = "Zoom In";
objeto.menu.items[4] = new Object();
objeto.menu.items[4].id = "ZoomOut";
objeto.menu.items[4].label = "Zoom Out";
objeto.menu.items[5] = new Object();
objeto.menu.items[5].id = "OriginalView";
objeto.menu.items[5].label = "Original View";
objeto.menu.items[6] = null;
objeto.menu.items[7] = new Object();
objeto.menu.items[7].id = "Quality";
objeto.menu.items[8] = new Object();
objeto.menu.items[8].id = "Pause";
objeto.menu.items[9] = new Object();
objeto.menu.items[9].id = "Mute";
objeto.menu.items[10] = null;
objeto.menu.items[11] = new Object();
objeto.menu.items[11].id = "Find";
objeto.menu.items[11].label = "Find...";
objeto.menu.items[12] = new Object();
objeto.menu.items[12].id = "FindAgain";
objeto.menu.items[12].label = "Find Again";
objeto.menu.items[13] = new Object();
objeto.menu.items[13].id = "Copy";
objeto.menu.items[14] = new Object();
objeto.menu.items[14].id = "CopyAgain";
objeto.menu.items[14].label = "Copy Again";
objeto.menu.items[15] = new Object();
objeto.menu.items[15].id = "CopySVG";
objeto.menu.items[15].label = "Copy SVG";
objeto.menu.items[16] = new Object();
objeto.menu.items[16].id = "ViewSVG";
objeto.menu.items[16].label = "View SVG";
objeto.menu.items[17] = new Object();
objeto.menu.items[17].id = "ViewSource";
objeto.menu.items[17].label = "View Source";
objeto.menu.items[18] = new Object();
objeto.menu.items[18].id = "SaveAs";
objeto.menu.items[18].label = "Save As";
objeto.menu.items[19] = null;
objeto.menu.items[20] = new Object();
objeto.menu.items[20].id = "Help";
objeto.menu.items[21] = new Object();
objeto.menu.items[21].id = "About";
objeto.menu.items[21].label = "About Adobe CVG Viewer...";

console.log(objeto);


