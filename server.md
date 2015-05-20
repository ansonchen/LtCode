#服务端缓存说明配置

##`Vary: Accept-Encoding`设置方法：

###Apache `/.htaccess`
``` xml
<IfModule mod_headers.c>
        <FilesMatch ".(js|css|xml|gz|html)$">
          Header append Vary: Accept-Encoding
        </FilesMatch>
      </IfModule>
```      
###Nginx  `/usr/local/nginx/conf/nginx.conf`

``` xml
gzip_vary on;
```

###IIS `/%windir%\Microsoft.NET\Framework\.net版本号\CONFIG\Web.config`

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

###html 
```html
<meta http-equiv="Vary" content="Accept-Encoding">
```
##Gzip

```html
   LoadModule deflate_module modules/mod_deflate.so
   LoadModule headers_module modules/mod_headers.so
```
```html
<IfModule mod_deflate.c>
DeflateCompressionLevel 6
SetOutputFilter DEFLATE
SetEnvIfNoCase Request_URI .(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
SetEnvIfNoCase Request_URI .(?:pdf|doc)$ no-gzip dont-vary
</IfModule>
```   

## FiddlerScript

```javascript
 static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }
        
        
        //modify:改变服务器地址
        
        if (oSession.HostnameIs("bbs.feidee.com")) {	
            oSession.hostname = "bbs.feidee.ts";            
            oSession.oRequest["Referer"] = "http://bbs.feidee.ts/";            
        }
        
        if (oSession.HostnameIs("bbsimg.feidee.com")) {	
            oSession.hostname = "bbs.feidee.ts";            
            oSession.oRequest["Referer"] = "http://bbs.feidee.ts/";            
        }
```

##sass install [Ruby And DevKit Download](http://rubyinstaller.org/downloads/)

``` html
c:\DevKit 
ruby dk.rb init
ruby dk.rb install
//将https://rubygems.org/换成国内淘宝镜像
gem sources -a https://ruby.taobao.org/
gem install json --platform=ruby
gem install sass
...

```
