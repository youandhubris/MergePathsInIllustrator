## Merge paths exported from openFrameworks in Illustrator

BY [HUBRIS](http://cargocollective.com/hubris "See more of Hubris ->")  
PORTO · JANUARY 2015 

--- 
  

A really simple sketch, just something I did to solve my specific problem.

When you export PDFs from openFrameworks, (*also from Processing*) and open them in Illustrator, if you drawn it with **stroke and fill** you get two objects per "visual object". That is: one object with stroke and no fill and another with fill and no stroke.

So, if you want to work with these objects in Illustrator, it's a pain in the ass. Besides, you get the double amount of vertices, therefore a drop in performance.

This script, merges objects with the same **area** and **position**.

More info on this [openFrameworks forum post](http://forum.openframeworks.cc/t/pdf-export-illustrator/18141). If you have something to add or correct, please do!
