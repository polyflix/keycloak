package fr.polyflix;

import fr.polyflix.event.KafkaEvent;
import fr.polyflix.event.KafkaEventType;
import fr.polyflix.mapper.PartialUserMapper;
import fr.polyflix.model.PartialUser;
import fr.polyflix.model.User;
import fr.polyflix.mapper.UserMapper;
import fr.polyflix.model.UserModel;
import fr.polyflix.producer.UserProducer;
import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.admin.AdminEvent;

import java.util.logging.Logger;
public class KeycloakKafkaEventListener implements EventListenerProvider {
    private final Logger logger = Logger.getLogger(KeycloakKafkaEventListener.class.getName());
    private UserProducer userProducer = new UserProducer();

    @Override
    public void onEvent(Event event) {
        switch (event.getType()) {
            case REGISTER:
                // Build a user instance from the keycloak event
                User createUser = UserMapper.fromKeycloak(event.getUserId(), event.getDetails());
                logger.info("New user registered : " + createUser);

                // Map the user into a kafka event and send it through the producer
                KafkaEvent<UserModel> registerEvent = new KafkaEvent(KafkaEventType.CREATE, createUser);
                userProducer.send(registerEvent);
                break;

            case DELETE_ACCOUNT:
                // Build a user instance from the keycloak event
                PartialUser deleteUser = PartialUserMapper.fromKeycloak(event.getUserId(), event.getDetails());
                logger.info("A user have been deleted : " + deleteUser);

                // Map the user into a kafka event and send it through the producer
                KafkaEvent<UserModel> deleteEvent = new KafkaEvent(KafkaEventType.DELETE, deleteUser);
                userProducer.send(deleteEvent);
                break;

            default:
                logger.warning("Ignoring event of type: " + event.getType());
                return;
        }
    }

    @Override
    public void onEvent(AdminEvent adminEvent, boolean b) {
        System.out.println("Received admin event: " + adminEvent.getResourceType());
    }

    @Override
    public void close() {}
}
