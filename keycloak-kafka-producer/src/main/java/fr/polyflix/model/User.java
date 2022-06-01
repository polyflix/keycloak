package fr.polyflix.model;

import java.util.UUID;

public class User extends UserModel {
    public String email;
    public String username;
    public String firstName;
    public String lastName;


    public User(String id, String email, String username, String firstName, String lastName) {
        super(id);
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
