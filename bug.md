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
