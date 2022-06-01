package fr.polyflix.model;

import java.util.UUID;

public abstract class UserModel {
    public UUID id;

    public UserModel(String id) {
        this.id = UUID.fromString(id);
    }
}
