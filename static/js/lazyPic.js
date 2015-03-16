/* 懒加载pic
 author : Anson 
 E-mail : 75526201@qq.com
*/
!function(){
	
var doc = document,body = doc.body, html = doc.documentElement;

var lazyPic = {
	
	clientHeight:function(resize){
		
		if(lazyPic._resize!==0 && !resize){
			return lazyPic._resize;
		}
		 var re = (body.clientHeight && html.clientHeight) ?   (body.clientHeight < html.clientHeight ? body.clientHeight :  html.clientHeight) : (body.clientHeight > html.clientHeight ? body.clientHeight :  html.clientHeight);
		
		lazyPic._resize = re;
		return lazyPic._resize;
			
		 	
		},
		
	
	showImg : function(resize){
	
		var bodyScrollTop = body.scrollTop;
		
		var imgs = lazyPic.obj ,i = 0, j = imgs.length;		
		
		var clientHeight = lazyPic.clientHeight(resize);		
		
		for(;i<j;i++){
	
			var obj = imgs[i];		
			if(resize){
				obj.dataset.top = obj.offsetTop ;
				obj.dataset.height = obj.offsetHeight;				
			}
			var offsetTop =  Number( obj.dataset.top), offsetHeight = Number(obj.dataset.height);
			
			if (offsetTop && (offsetTop + lazyPic._OH < clientHeight + bodyScrollTop)){	
				
				var K = obj.dataset.src;
				if (K)  obj.src = K,obj.dataset.src ='',obj.dataset.top = '';
		
			}
		}

	},
	
	handleEvent: function(e){
		
				switch(e.type) {
					case 'resize': this.showImg(1); break;
					case 'scroll': this.showImg(); break;

				}
	},
			
	init:function(obj){
		if(!obj) return false;
		
		var img = obj,i = 0 ,j = img.length,
		
		_OH = 60,
		
		imgs = [];
		
		for(;i<j;i++){
				
				if(img[i].dataset.src){
					//(img[i].src = '/m/img/index/a.jpg');//设置占位图片
					img[i].dataset.top = img[i].offsetTop;
					img[i].dataset.height = img[i].offsetHeight;
					
					imgs.push(img[i]);
				}
					
		}
		
		lazyPic.obj = imgs;
		lazyPic._OH = _OH;
		lazyPic._resize = 0;
		this.showImg();
		
		doc.addEventListener('scroll',this,false);
		
		window.addEventListener("resize",this,false);
		
		
		
	}	

}
	
lazyPic.init(document.getElementsByTagName('img'));

}();