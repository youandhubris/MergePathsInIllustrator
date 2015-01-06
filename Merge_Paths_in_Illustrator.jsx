/*
 ---------------------------------------------
 MERGE PATHS [ILLUSTRATOR SCRIPT]
 ---------------------------------------------
 BY HUBRIS [http://cargocollective.com/hubris]
 [http://github.com/youandhubris]
 PORTO · JANUARY 2015
 ---------------------------------------------
 BETA VERSION
 ---------------------------------------------
 */

if ( app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {

    doc = app.activeDocument;
    Window.alert("Hey! Oh! Let's go!");
    
} else Window.alert("There's nothing to do here...");

function mergeThoseSuckers(doc){

    pathEnd = doc.pathItems.length - 3;

    // loops all remaining paths
    for (var i = pathEnd; i >= 0; i-=2 ) {
        // gets the stroked
        pathStroked = doc.pathItems[i];
        // gets the filled
        pathFilled = doc.pathItems[i+1];

        // enables the fill and sets the stroke color and width
        pathFilled.stroked = true;
        pathFilled.strokeColor = pathStroked.strokeColor;
        pathFilled.strokeWidth = pathStroked.strokeWidth;

        // removes the stroked
        pathStroked.remove();
    }

}

mergeThoseSuckers(doc);