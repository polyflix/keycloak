package fr.polyflix;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.admin.AdminEvent;

public class KeycloakKafkaEventListener implements EventListenerProvider {
    @Override
    public void onEvent(Event event) {
        System.out.println("Received event: " + event.getType());
    }

    @Override
    public void onEvent(AdminEvent adminEvent, boolean b) {
        System.out.println("Received admin event: " + adminEvent.getResourceType());
    }

    @Override
    public void close() {}
}
