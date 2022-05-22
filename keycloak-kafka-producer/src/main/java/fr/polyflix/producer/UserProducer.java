package fr.polyflix.producer;

import fr.polyflix.event.KafkaEvent;
import fr.polyflix.model.User;
import fr.polyflix.producer.configuration.ProducerConfiguration;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.logging.Logger;

public class UserProducer implements Producer<KafkaEvent<User>> {
    private final Logger logger = Logger.getLogger(UserProducer.class.getName());
    private final String TOPIC = "polyflix.keycloak.user";

    @Override
    public void send(KafkaEvent<User> value) {
        ProducerConfiguration.resetThreadContext();
        KafkaProducer<String, User> producer = new KafkaProducer(ProducerConfiguration.getProperties());
        ProducerRecord<String, User> eventRecord = new ProducerRecord(TOPIC, value);
        logger.info("Publishing event on topic " + TOPIC);
        producer.send(eventRecord);
        producer.flush();
        producer.close();
    }
}
