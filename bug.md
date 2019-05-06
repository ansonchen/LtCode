# 常见问题

###css 动态改变Rem
```css
$vm_fontsize: 75;
@function rem($px) {
     @return ($px / $vm_fontsize ) * 1rem;
}
$vm_design: 750;
html {
    font-size: ($vm_fontsize / ($vm_design / 2)) * 100vw; 
    @media screen and (max-width: 320px) {
        font-size: 64px;
    }
    @media screen and (min-width: 540px) {
        font-size: 108px;
    }
}
// body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小
body {
    max-width: 540px;
    min-width: 320px;
}

```
###文字超出省略、文字两端对齐
```css
.line-camp( @clamp:2 ) {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: @clamp;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
}
```
###html　继承box-sizing
```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
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

###iphone 事件链接
```css
 a{
 text-decoration: none; pointer-events: none; color: #fff 
 }
 ```
### iphone 1px问题:
```css
{
border-width: 0 0 1px 0;
-webkit-border-image: url(/m/img/index0408/iListBorder-v.png) 2 0 stretch;
border-image: url(/m/img/index0408/iListBorder-v.png) 2 0 stretch;
}
OR:
.item:before{
     content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 200%;
      height: 1px;
      border-top: 1px solid #ddd;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    
}
```

### Galxy 不支持 getCurrentPosition 
```html
详见帖：http://stackoverflow.com/questions/18100442/samsung-galaxy-devices-cant-use-geolocation-getcurrentposition
解决方法：运行一次google map,并定位
```
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
### 通过-webkit-transform:transition3d/translateZ开启GPU硬件加速之后，浏览器频繁闪烁或抖动
```css
-webkit-backface-visibility:hidden;
-webkit-perspective:1000;
```
## 常用网址：
[icomoon](https://icomoon.io)
[iconfont](http://www.iconfont.cn/)
