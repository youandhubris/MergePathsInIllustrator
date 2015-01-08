/*
 ---------------------------------------------
 MERGE PATHS FROM OF [ILLUSTRATOR SCRIPT]
 ---------------------------------------------
 BY HUBRIS [http://cargocollective.com/hubris]
 [http://github.com/youandhubris]
 PORTO · JANUARY 2015
 ---------------------------------------------
 BETA VERSION
 ---------------------------------------------
 */

function mergeThoseSuckers(doc, backgroundRemove) {

    // background position
    maxPathItems = doc.pathItems.length - 1;

    // loops all remaining paths
    for (var i = doc.pathItems.length - 1; i >= 0; i--) {

        currentPath = doc.pathItems[i];

        // check the background input
        if (backgroundRemove && i == maxPathItems) { currentPath.remove(); continue };
        else if (!backgroundRemove && i == maxPathItems) continue;

        if (currentPath.stroked) {

            for (var u = doc.pathItems.length - 1; u >= 0; u--) {
                
                pathFilled = doc.pathItems[u];

                if (pathFilled.stroked == false && currentPath.area == pathFilled.area && currentPath.position[0] == pathFilled.position[0] && currentPath.position[1] == pathFilled.position[1]) {
                    // enables the stroke and assigns all the stroke properties
                    pathFilled.stroked = true;
                    pathFilled.strokeCap = currentPath.strokeCap;
                    pathFilled.strokeColor = currentPath.strokeColor;
                    pathFilled.strokeDashes = currentPath.strokeDashes;
                    pathFilled.strokeDashOffset = currentPath.strokeDashOffset;
                    pathFilled.strokeJoin = currentPath.strokeJoin;
                    pathFilled.strokeMiterLimit = currentPath.strokeMiterLimit;
                    pathFilled.strokeOverprint = currentPath.strokeOverprint;
                    pathFilled.strokeWidth = currentPath.strokeWidth;

                    // removes the stroked
                    currentPath.remove();
                    break;
                }
            }

        }
    }
}

if ( app.documents.length > 0 && app.activeDocument.artboards.length == 1 && app.activeDocument.pathItems.length > 0) {

    doc = app.activeDocument;
    beep();

    // UI
    // dialog window
    var dialogWindow = new Window("dialog", "mergePathsFromOF");
    // add text
    var dialog = "Delete background?";
    dialogWindow.add("statictext", undefined, dialog, { multiline:false });
    // add buttons
    var windowGroup = dialogWindow.add("group");
    var buttonYes = windowGroup.add("button", undefined, "Yep");
    var buttonNo = windowGroup.add("button", undefined, "Nop");
    var buttonCancel = windowGroup.add("button", undefined, "Cancel");
    // buttons behavior
    buttonYes.onClick = function() {
        backgroundRemove = true;
        dialogWindow.close()
    };
    buttonNo.onClick = function() {
        backgroundRemove = false;
        dialogWindow.close()
    };
    buttonCancel.onClick = function() {
        dialogWindow.close()
    };

    dialogWindow.show();
    mergeThoseSuckers(doc, backgroundRemove);

}

else if (app.activeDocument.artboards.length > 1) alert("There's too many artboards.");
else alert("There's nothing to do here... :(");