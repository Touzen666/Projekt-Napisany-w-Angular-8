# OutsourcingPlApp

The main architecture of the application. It splits into four tiers:

1. MySQL database - there's only one
2. Backends - might be scaled as per need, these are only to execute orders from frontend and transact with the DB
3. Frontends- you just might throw as many of them. They communicate only directly with the backend.
4. A reverse proxy - the guys who routes some requests to the frontend, and some to the backend.

All of this setup is managed by [docker-compose](https://docs.docker.com/compose/gettingstarted/).

Name of the host should be defined in an environment variable called *HOSTNAME*! This is a must for nginx! Otherwise,
first available hostname will be used.

# Caveat emptor

Your Docker Toolbox VM by default reports at 192.168.99.100. If it shall report at a different address, make sure to adjust it.

## How to run

First download Docker Toolbox. Then, having a Docker instance, issue the following:
```bash
git clone https://github.com/Touzen666/Projekt-Napisany-w-Angular-8.git
cd Projekt-Napisany-w-Angular-8
docker-compose up -d
```
Just pass up the proper HOSTNAME that nginx is going to react to in it's environment variables of *HOSTNAME*.
And enjoy your application at http://192.168.99.100

Ad good idea would be to install a Portainer to manage all these containers. You can do it via
```bash
docker volume create portainer_data
docker run -d --restart always -p 9000:9000 -v portainer_data:/data -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```

It will appear at http://192.168.99.100:9000 and and you to define some basic authentication issues with a very nice GUI interface.
After that, you should pick manage local instance.


### Deploying it for development

Just run [docker-compose-development.yml](docker-compose-development.yml).
For seasoned deployments on Docker Swarm instances, you might as well utilize
[docker-compose-production.yml](docker-compose-production.yml).
Note that you need to have your Docker server working in Swarm mode, otherwise this will not work! You can do it typing a simple command:
````bash
https://docs.docker.com/engine/reference/commandline/swarm_init/
````
But before you do, look at the [extra materials here](https://docs.docker.com/engine/reference/commandline/swarm_init/).

Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

See [license](LICENSE.md) for licensing things.
