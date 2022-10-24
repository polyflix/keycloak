FROM bitnami/keycloak:18.0.0
COPY --chown=keycloak:keycloak ./keycloak-theme/build_keycloak/target/classes/theme/polyflix /opt/bitnami/keycloak/themes/polyflix
COPY --chown=keycloak:keycloak ./keycloak-kafka-producer/target/keycloak-spi-kafka.jar /opt/bitnami/keycloak/providers/
