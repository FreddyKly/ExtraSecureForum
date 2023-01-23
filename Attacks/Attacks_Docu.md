# SQL Injections
Kann momentan beispielsweise durchgeführt werden, indem eine Get-Request an 
__http://localhost:8080/api/users/" OR "1" = "1__ geschickt wird. Hierdurch bekommt man alle User Zurück geliefert 
anstatt nur einen mit einer spezifischen ID.

# Cross-Site Scripting
- Reflected XSS
Insert <script>alert();</script>
https://www.imperva.com/learn/application-security/reflected-xss-attacks/#:~:text=Reflected%20XSS%20attacks%2C%20also%20known,enables%20execution%20of%20malicious%20scripts.