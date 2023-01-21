# SQL Injections
Kann momentan beispielsweise durchgeführt werden, indem eine Get-Request an 
__http://localhost:8080/api/users/" OR "1" = "1__ geschickt wird. Hierdurch bekommt man alle User Zurück geliefert 
anstatt nur einen mit einer spezifischen ID.