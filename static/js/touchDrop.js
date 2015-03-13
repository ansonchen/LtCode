/*防 Google + 下拉刷新功能
 author : Anson 
 E-mail : 75526201@qq.com
*/
!function(x){

	var touchDrop = {
		
		unfinish : true,
		movepx : 0,
		init : function(){
			var cdiv = document.createElement('div'), progress = document.createElement('div');
			cdiv.style.cssText = 'position:absolute; height:3px; width:100%; z-index:100; left:0; top:0; text-align:center';
			progress.style.cssText = 'height:100%; width:0; background:#3d86f7; margin:0 auto';
			cdiv.appendChild(progress);
			x.appendChild(cdiv);
			this.progress = progress;
			x.addEventListener("touchstart", this, false);
			x.addEventListener('touchend', this, false);
			x.addEventListener('touchmove', this, false);
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
					e.stopPropagation();					
					this.startY = e.touches[0].clientY;
				};
				
			},
		onTouchMove: function(e){
				e.stopPropagation();
				if(this.unfinish && this.startY){
					if (document.body.scrollTop ===0 && e.touches[0].clientY - this.startY > 10) {
						e.preventDefault();
						this.movepx = e.touches[0].clientY - this.startY;
						this.progress.style.width = (this.movepx * 1.8) + 'px';
					  }
					}
			},
		onTouchEnd: function(e){

			if(this.unfinish && this.startY){				
				 e.preventDefault(),e.stopPropagation();
				 var that = this;
				 //x.removeEventListener('touchend', this, false);
				 //x.removeEventListener('touchmove', this, false);
				 if(that.movepx === 0) return true;
				//没拖到位，返回
				if( that.progress.parentNode.clientWidth > (that.movepx * 1.8)){				
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
					setTimeout(function(){
						location.reload();
					},2000)
					//do someting
				}
				that.movepx = 0;
			}
			 
		}
		
		};
	
	touchDrop.init();

	
	
}(document.body)