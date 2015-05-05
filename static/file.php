<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>随手记社区静态文件列表</title>
</head>
<style type="text/css">
html{ font-size:50px;}
h1{ font-size:1.2rem;}
a,a:link,a:visited,a:active{ display:block;   font-size:1rem; line-height:1.2rem;; text-decoration:none; color:#999; margin:.5rem 0 0 .75rem ;}
a:hover{ color:#000}
</style>
<body>
<h1>随手记社区静态文件列表</h1>
<?php

function searchDir($path,&$data){
	if(is_dir($path)){
		$dp=dir($path);
		while($file=$dp->read()){
			if($file!='.'&& $file!='..'){
				searchDir($path.'/'.$file,$data);
			}
		}
		$dp->close();
	}
	if(is_file($path)){
		$data[]=$path;
	}
}
function getDir($dir){
	$data=array();
	searchDir($dir,$data);
	return $data;
}

function getTit($file){
	$content = file_get_contents($file);
	preg_match("/<title>(.*)<\/title>/si", $content, $match);
	return $match;
}


$files = getDir('.');
$newdata = array();
foreach($files as $value){
	$newdata[] = getTit($value);
	
}

foreach($newdata as $key=>$value){
	if(!strpos($files[$key],".php")) print_r('<a href='.$files[$key].' target="_blank">'.$value[1].'</a>');
	}

?>
</body>
</html>
