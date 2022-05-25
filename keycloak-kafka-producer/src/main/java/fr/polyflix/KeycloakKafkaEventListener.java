package fr.polyflix;

import fr.polyflix.event.KafkaEvent;
import fr.polyflix.event.KafkaEventType;
import fr.polyflix.model.User;
import fr.polyflix.mapper.UserMapper;
import fr.polyflix.producer.UserProducer;
import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;

import java.util.logging.Logger;
public class KeycloakKafkaEventListener implements EventListenerProvider {
    private final Logger logger = Logger.getLogger(KeycloakKafkaEventListener.class.getName());
    private UserProducer userProducer = new UserProducer();

    @Override
    public void onEvent(Event event) {
        if (event.getType() != EventType.REGISTER) {
            logger.warning("Ignoring event of type: " + event.getType());
            return;
        }

        // Build a user instance from the keycloak event
        User user = UserMapper.fromKeycloak(event.getUserId(), event.getDetails());
        logger.info("New user registered : " + user);

        // Map the user into a kafka event and send it through the producer
        KafkaEvent<User> kafkaEvent = new KafkaEvent(KafkaEventType.CREATE, user);
        userProducer.send(kafkaEvent);
    }

    @Override
    public void onEvent(AdminEvent adminEvent, boolean b) {
        System.out.println("Received admin event: " + adminEvent.getResourceType());
    }

    @Override
    public void close() {}
}
