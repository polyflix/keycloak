package fr.polyflix.producer.configuration;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;

import java.util.Map;
import java.util.Properties;

public class ProducerConfiguration {
    public static void resetThreadContext() {
        Thread.currentThread().setContextClassLoader(null);
    }
    public static Properties getProperties() {
        Map<String, String> env = System.getenv();

        final String bootstrapServers = env.get("KAFKA_BOOTSTRAP_SERVERS") != null ? env.get("KAFKA_BOOTSTRAP_SERVERS") : "localhost:9092";

        Properties properties = new Properties();

        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, KafkaJsonSerializer.class.getName());

        return properties;
    }
}
