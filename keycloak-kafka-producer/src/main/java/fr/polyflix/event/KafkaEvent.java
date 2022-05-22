package fr.polyflix.event;

public class KafkaEvent<T> {
    public KafkaEventType trigger;
    public T data;

    public KafkaEvent(KafkaEventType trigger, T data) {
        this.trigger = trigger;
        this.data = data;
    }
}
