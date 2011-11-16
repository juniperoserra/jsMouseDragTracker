/**
 * mouseDragTracker v0.01
 * http://www.upfork.com/
 * Copyright 2011, Simon Greenwold
 * Licensed under the MIT or GPL Version 2 licenses.
 * Date: November 16 2011
 *
 * Copyright (C) 2011 by Simon Greenwold
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
 // Event logging adapted from example at http://unixpapa.com/js/testmouse-2.html
 
function log_events(trackedElementName, formName) {
  var area = document.forms[formName].elements[0];
  var maxlines= 15;
  var element = document.getElementById(trackedElementName);
  
  function countLines()
  {
    var text = area.value.replace(/\s+$/g,"")
    var split = text.split("\n")
    return split.length
  }
  
  function showmesg(t)
  {
    var old= area.value;
    if (countLines() >= maxlines)
    {
      var i= old.indexOf('\n');
      if (i >= 0)
        old= old.substr(i+1);
    }

     area.value= old + t + '\n';
  }

  function logIt(evt,e)
  {
      showmesg(evt+" which="+e.which+" button="+e.button+' buttons='+e.buttons);
  }
  
  element.addEventListener("mousedown", function(event)    {return logIt('element mousedown    ',event);}, false );
  element.addEventListener("mouseup", function(event)      {return logIt('element mouseup      ',event);}, false );
  document.addEventListener("mouseup", function(event)     {return logIt('document mouseup     ',event);}, false );
  element.addEventListener("click", function(event)        {return logIt('element click        ',event);}, false );
  element.addEventListener("dblclick", function(event)     {return logIt('element dblclick     ',event);}, false );
  document.addEventListener("contextmenu", function(event) {return logIt('document contextmenu ',event);}, false );
  element.addEventListener("contextmenu", function(event)  {return logIt('element contextmenu  ',event);}, false );
}