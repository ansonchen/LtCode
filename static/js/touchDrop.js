/*防 Google + 下拉刷新功能
 author : Anson 
 E-mail : 75526201@qq.com
*/
!function(x){

	var touchDrop = {
		
		unfinish : true,
		
		init : function(){
			var cdiv = document.createElement('div'), progress = document.createElement('div');
			cdiv.style.cssText = 'position:absolute; height:3px; width:100%; z-index:100; left:0; top:0; text-align:center';
			progress.style.cssText = 'height:100%; width:0; background:#3d86f7; margin:0 auto';
			cdiv.appendChild(progress);
			x.appendChild(cdiv);
			this.progress = progress;
			x.addEventListener("touchstart", this, false);
			},
		handleEvent: function(e){
				switch(e.type) {
					case 'touchstart': this.onTouchStart(e); break;
					case 'touchmove': this.onTouchMove(e); break;
					case 'touchend': this.onTouchEnd(e); break;
				}
			},
		onTouchStart : function(e){
			
				if(this.unfinish){	
					e.preventDefault(),e.stopPropagation();
					x.addEventListener('touchend', this, false);
					x.addEventListener('touchmove', this, false);
					this.startY = e.touches[0].clientY;
				};
				
			},
		onTouchMove: function(e){
			if(this.unfinish && this.startY){
				e.preventDefault(),e.stopPropagation();
				if (document.body.scrollTop ===0 && e.touches[0].clientY - this.startY > 10) {
					this.endY = e.touches[0].clientY;					
					this.progress.style.width = ((this.endY - this.startY) * 1.8) + 'px';
				  }
				}
			},
		onTouchEnd: function(e){
			if(this.unfinish && this.startY){				
				e.preventDefault(),e.stopPropagation();
				 var that = this;
				 x.removeEventListener('touchend', this, false);
				 x.removeEventListener('touchmove', this, false);
				if( that.progress.parentNode.clientWidth > ((that.endY - that.startY) * 1.8)){				
					that.progress.style.WebkitTransition = '300ms width ease-in';
					that.progress.style.MozTransition = '300ms width ease-in';
					that.progress.style.width = '0px';		
					setTimeout(function(){
								that.progress.style.WebkitTransition = '';
								that.progress.style.MozTransition = '';	
					},300)
					 
				}else{
					that.unfinish = false;
					that.progress.style.width = '0px';
					that.progress.parentNode.className = 'colorBar';					
					
					
					//do someting
				}
			}
			 
		}
		
	};
	
	touchDrop.init();

	
	
}(document.body)