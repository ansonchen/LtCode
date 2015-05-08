var scrollY = {
	
	begin:function(){
		
		var s = {};
		
		s.marquee = function(){
			
			if(s.o2.offsetTop <= s.op.scrollTop + s.op.offsetTop ){
				
			s.op.scrollTop -= s.o.offsetHeight;
			
			}else{

			s.op.scrollTop++;
			
			}
			
		}
		s.init = function(obj,time){
			
			s.o = document.getElementById(obj);
			s.o2 = s.o.cloneNode(true);
			s.o2.id = s.o2.id+'_copy';
			s.op = s.o.parentNode;
			s.op.appendChild(s.o2);
			var t = time || 30;
			s.time = setInterval(s.marquee,t);
			s.o.onmouseover=function() {clearInterval(s.time)};
			s.o.onmouseout=function() {s.time = setInterval(s.marquee,t)};

		}
			
		
		return s;
		}
	
	
	
	}
/*

var s1 = scrollX.begin();
s1.init('demo1',10);

var s2 = scrollX.begin();
s2.init('demox');

*/