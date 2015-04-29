#服务端缓存说明配置

`Vary: Accept-Encoding`设置方法：

##Apache `/.htaccess`
``` xml
<IfModule mod_headers.c>
        <FilesMatch ".(js|css|xml|gz|html)$">
          Header append Vary: Accept-Encoding
        </FilesMatch>
      </IfModule>
```      
##Nginx  `/usr/local/nginx/conf/nginx.conf`

``` xml
gzip_vary on;
```

##IIS `/%windir%\Microsoft.NET\Framework\.net版本号\CONFIG\Web.config`

``` xml
<system.webServer>
        <httpProtocol>
          <customHeaders>
          <remove name="Vary"></remove>
          <add name="Vary" value="Accept-Encoding"></add>
          </customHeaders>
        </httpProtocol>
      </system.webServer>
```

##html 
```html
<meta http-equiv="Vary" content="Accept-Encoding">
```
