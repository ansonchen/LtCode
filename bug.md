# 常见问题

###去除iphone 默认 input 样式：
```css
{
-webkit-appearance: none;
}
```
###iphone按住效果：
```css
{
-webkit-tap-highlight-color:rgba(250,250,250,0); 
}
```
注：iphone按住后外框padding:6px

###iphone 1px问题:
```css
{
border-width: 0 0 1px 0;
-webkit-border-image: url(/m/img/index0408/iListBorder-v.png) 2 0 stretch;
border-image: url(/m/img/index0408/iListBorder-v.png) 2 0 stretch;
}
```

###Galxy 不支持 getCurrentPosition 

详见帖：http://stackoverflow.com/questions/18100442/samsung-galaxy-devices-cant-use-geolocation-getcurrentposition
解决方法：运行一次google map,并定位

### 手机点击效果
```css
a {
  
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent; 
    text-decoration: none;
    &:active{
      opacity: 0.6;
      filter: alpha(opacity=60);
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    &:focus{  outline: 0 none;}
    &:hover {
        text-decoration: none;
    }
}
```

