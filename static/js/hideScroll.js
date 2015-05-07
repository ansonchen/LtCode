/*隱藏橫向滾動條
 author : Anson 
 E-mail : 75526201@qq.com
*/
var hideScroll = {	
		
		x:function(){		
			
			var scrollobj = {},doc = document;

			scrollobj.bind = function(e, t, a) {
					if (e) {
						t = t.split(" ");
						for (var n in t) e.addEventListener(t[n], a, !1)
					}
			}
			
			scrollobj.adCls =  function(e, t) {
				for (var a in t) e.style[a] = t[a]
			}
			
			scrollobj.touchStart = function(e){
				e.preventDefault(),e.stopPropagation();
				var that = scrollobj;
				that.fX = (e.touches ? e.touches[0] : e).pageX;
				
				
			}
			
			scrollobj.touchMove = function(e){
				var that = scrollobj;
	
				if(that.fX){
					e.preventDefault(),e.stopPropagation();
					that.eX = (e.touches ? e.touches[0] : e).pageX;		
								
					var mx = that.mX + that.eX - that.fX;					
					
					that.nX =   mx  > 0 ? 0 :  mx > that._maxX ? mx : that._maxX;	
			
					that.adCls(that.obj, {
						WebkitTransform: "translateX(" +  that.nX + "px)",
						transform: "translateX(" +  that.nX  + "px)"
					});
				}

				
			}
			
			scrollobj.touchEnd = function(e){
				var that = scrollobj;
				if(that.fX){
					that.mX =  that.nX;
					var t = that.fX - that.mX;
					if( t==0 || that.eX==0 ){							
							if(e.target.parentNode.tagName=='A'){
								 location.href =   e.target.parentNode.href ;							
								}
					}
					}
				that.nX = 0;
				that.fX  = 0;
				that.eX  = 0;
				 
				
				
				}
			
			scrollobj.init = function(mobj){
				var that = scrollobj;
				that.nX = 0;
				that.mX = 0;
				var obj = (typeof mobj === 'string' ) ? doc.getElementById(mobj) : mobj;
				if(!obj) return false;
				var objw = obj.scrollWidth;
				var objp = obj.parentNode;
				var objpw = objp.offsetWidth;
				that._maxX =  objpw - objw ;
				that.obj = obj;
				that.bind(obj,"mousedown touchstart",that.touchStart);
				that.bind(obj,"mousemove touchmove", that.touchMove);
				that.bind(obj,"mouseup touchend",that.touchEnd);
				}
				
			return scrollobj;
		}
}

/*
var m = document.getElementById('dropId');
var scroll1 = hideScroll.x();
scroll1.init(m);
*/