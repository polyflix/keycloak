FROM bitnami/keycloak:18.0.0
COPY ./keycloak-kafka-producer/target/keycloak-spi-kafka.jar /opt/bitnami/keycloak/providers/