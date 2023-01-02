# ExtraSecureForum
## Setup with Docker (Prod. and Testing)
### Docker-compose
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

- You're Done! Yay!

<hr>