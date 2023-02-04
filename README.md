# ExtraSecureForum
- Die Unsichere Version welche keinen Schutz gegen Angriffe bietet findet sich auf dem "main-Branch" oder in dem Release mit dem Tag `v.1.1-Hackable`.
- Die gesicherte Version der App, welche maßnahmen gegen bestimmte angriffe ergreift findet man auf dem "SecureVersion-Branch" oder in dem Release mit dem Tag `v.1.0-Secure`
- Mehr Infos zu durchgeführten Angriffen oder ergriffenen Maßnahmen können in __./Attacks/Attacks_Docu.md__ gefunden werden
# Setup with Docker (Prod. and Testing)
## Docker-compose
This is the easiest way of getting everything up and running.
Install Docker with docker-compose (https://docs.docker.com/compose/install/).
To check if the installation worked use <code>docker -v</code> and <code>docker-compose -v</code> in a Terminal.
<br>
<br>

- Open a Terminal and navigate to the root directory of this Project
- Enter:
```
docker-compose up
```

- This should build the docker images and then let them run. The Backend will be running on localhost:8080 and the Frontend on localhost:8081.
After this command wait for everything to download and install (maybe 5min).

- If the backend container stops running with an error like: "SqlError: (conn=-1, no: 45028, SQLState: HY000) retrieve connection from pool timeout after 10002ms" then the backend tried to connect to the database before the databse was up and running. If this happens simply open another terminal and run the command:
`docker-compose run backend`.

- You're Done! Yay!

<hr>

# Alternative
Open 3 terminals for the three different services.
## Frontend
1. `cd Frontend`
2. `npm install`
3. `npm run serve`


## Database
1. `docker-compose run mariadb`

## Backend
1. Make sure that in "./Backend/Database/connector.js" line 4: `host: mariadb ...` is a comment by putting `//` infront of the statement and line 5: `host: localhost ...` is NOT a comment.
2. `cd Backend`
3. `npm install`
4. `npm run start`
