package fr.polyflix.model;

public class PartialUser extends UserModel {
    public String username;

    public PartialUser(String id, String username) {
        super(id);
        this.username = username;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                '}';
    }
}
