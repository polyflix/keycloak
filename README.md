# Polyflix custom Keycloak image

This repository contains all our keycloak extensions used to build a custom image of keycloak, based on the [bitnami's one](https://hub.docker.com/r/bitnami/keycloak/).

It allows us to extend keycloak with modules & plugins, such as a kafka producer to dispatch events when a user was registered for example.