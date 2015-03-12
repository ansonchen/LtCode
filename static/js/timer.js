var Timer = {
	_data : {},
	start : function (key){
			Timer._data[key] = new Date();
		},
	stop : function (key){
			var time = Timer._data[key];
			if(time){
				Timer._data[key] = new Date() - time;
				}
		},
	get : function (key){
		return Timer._data[key];
		}
	
	};
	
/*
 Timer.start('creatElement');
 var count = 10000,i = 0;
 for( ; i< count ; i ++){
	 element = document.createElement('div');
	 
}
Timer.start('creatElement');

alert('created' + count + ' in ' + Timer.get('creatElement'));

*/