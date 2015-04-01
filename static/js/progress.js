/*·À youtube progress
 author : Anson 
 E-mail : 75526201@qq.com
*/

var progress = function(a) {  

	var doc = window.document, obj = doc.getElementById("progress");
	obj || (obj = doc.createElement("div"), obj.id = "progress", obj.appendChild(doc.createElement("dt")), obj.appendChild(doc.createElement("dd")),doc.body.appendChild(obj));
	var time = a[0], percent = a[1], cls = a[2];
	obj.className = "";
	var objStyle = obj.style;
	objStyle.transitionDuration = objStyle.webkitTransitionDuration = time + "ms";
	objStyle.width = percent + "%";
	window.clearTimeout(progress.st);	
	progress.st = window.setTimeout(function(){
			obj.className = cls;
			percent === 100  && obj.parentNode.removeChild(obj);
		},time);

};
//progress([100,10,'waiting']);progress([500,100,'done']);
	