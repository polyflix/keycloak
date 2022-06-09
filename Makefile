build:
	make kafka-plugin
	make theme

kafka-plugin:
	mvn clean package

theme:
	cd ./keycloak-theme && npm install && npm run keycloak
