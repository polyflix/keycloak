package fr.polyflix.producer;

public interface Producer<T> {
    void send(T value);
}