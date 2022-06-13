# Keycloak theme

Keycloak theme in React using [keycloakify](https://docs.keycloakify.dev/)

## Test in development mode

- Uncomment the page you want to test in the `KcApp/kcContext.ts` file.

- Run the app : `npm start`

## Test in production mode

- Be sure all pages are commented in the `KcApp/kcContext.ts` file.

- Build the template : `npm run keycloak`

- Run a basic keycloak container : `./keycloak-theme/build_keycloak/start_keycloak_testing_container.sh`

- Log into the admin console 👉 http://localhost:8080/admin username: admin, password: admin 👈

- Create a realm named "myrealm"

- Create a client with ID: "myclient", "Root URL": "https://www.keycloak.org/app/" and "Valid redirect URIs": "https://www.keycloak.org/app/*"

- Select Login Theme: polyflix (don't forget to save at the bottom of the page)

- Go to 👉 https://www.keycloak.org/app/ 👈 Click "Save" then "Sign in". You should see your login page!
