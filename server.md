##`Vary: Accept-Encoding`和`Expires`设置方法：

###Apache `/.htaccess`
``` xml
<IfModule mod_headers.c>
        <FilesMatch ".(js|css|xml|gz|html)$">
          Header append Vary: Accept-Encoding
        </FilesMatch>
      </IfModule>
<IfModule mod_expires.c>
<Filesmatch ".(jpg|jpeg|png|gif|js|css|swf|ico|woff|mp3)$">
    ExpiresActive on
    ExpiresDefault "access plus 7 days"
</Filesmatch>
</IfModule>
```      
> 用`mod_rewrite`时记得将apache的conf文件<Directory>里的
> `AllowOverride None` 改成 `AllowOverride all`

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
        
        if (oSession.HostnameIs("bbs.xxx.com")) {	
            oSession.hostname = "bbs.xxx.ts";            
            oSession.oRequest["Referer"] = "http://bbs.xxx.ts/";            
        }
        
        if (oSession.HostnameIs("bbsimg.xxx.com")) {	
            oSession.hostname = "bbs.xxx.ts";            
            oSession.oRequest["Referer"] = "http://bbs.xxx.ts/";            
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

###AWS Ubuntu 安装 ss  `sudo -s切换成root`
``` html

apt-get update

apt-get install python-pip

pip install shadowsocks

vi /etc/config.json  并添加 
```
``` javascript
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"password",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}

//多用户
{
    "server":"0.0.0.0",
    "local_address": "127.0.0.1",
    "local_port":1080,
    "timeout":300,
    "method":"aes-256-cfb",
    "port_password":
	{
	"8383":"password1",
	"8384":"password2",
	"8385":"password3"
	},
    "fast_open": false
}
```
``` html

ssserver -c /etc/config.json -d start

vi /etc/rc.local

添加上面这句启动命令，设置为开机自启动

```     

###AWS Ubuntu 安装 node

``` html
sudo apt-get install g++ curl libssl-dev apache2-utils python build-essential gcc 
sudo apt-get install screen
sudo apt-get install supervisor

// 下载 官网http://nodejs.org/
wget https://nodejs.org/dist/v4.3.0/node-v4.3.0.tar.gz

// 解压：
tar -zxf node-v4.3.0.tar.gz
cd node-v4.3.0

// 默认安装： （默认在home目录下）
./configure 
make 
sudo make install 

//选择目录安装（将nodejs安装在/usr/local/node目录下）
./configure –prefix=/usr/local/node 
make 
sudo make install 

```  
### Ubuntu 14.04安装LAMP, phpmyadmin
``` html
sudo apt-get update
sudo apt-get install tasksel
sudo tasksel install lamp-server
sudo apt-get install phpmyadmin

// apache2 默认配置为：`/etc/apache2/apaches.conf`
// mysql 默认配置为：`/etc/mysql/my.cnf`
// phpmyadmin 默认配置为：`/etc/phpmyadmin/apache.conf`,目录为：`/usr/share/phpmyadmin`
// 复制phpmyadmin 到 站点目录下

cp -r /usr/share/phpmyadmin /var/www/phpmyadmin
vi /etc/phpmyadmin/apache.conf
//把下面两句中的/usr/share/phpmyadmin路径改为/var/www/phpmyadmin
Alias/phpmyadmin /usr/share/phpmyadmin
<Directory/usr/share/phpmyadmin>
```
### Ubuntu14 apache2 安装 mod_headers, mod_expires ...

``` html
a2enmod headers 
a2enmod expires 
```
### Ubuntu 安装 vpn
```html
sudo apt-get update && apt-get dist-upgrade

wget https://git.io/vpnsetup -O vpnsetup.sh && sudo \
VPN_IPSEC_PSK='你的IPsec预共享密钥' \
VPN_USER='你的VPN用户名' \
VPN_PASSWORD='你的VPN密码' sh vpnsetup.sh
```

### Ubuntu 使用 supervisor
`/etc/supervisor/conf.d/ss.conf`

```html
[program:ssserver]
command =ssserver -c /anson/config.json
autostart=true
autorestart=true
startsecs=3

```

`/etc/supervisor/conf.d/kcptun.conf`

```html

[program:kcptun]
user=kcptun
directory=/usr/local/kcptun
command=/usr/local/kcptun/server_linux_amd64 -c "/usr/local/kcptun/server-config.json"
process_name=%(program_name)s
autostart=true
redirect_stderr=true
stdout_logfile=/var/log/kcptun/server.log
stdout_logfile_maxbytes=1MB
stdout_logfile_backups=0

```
