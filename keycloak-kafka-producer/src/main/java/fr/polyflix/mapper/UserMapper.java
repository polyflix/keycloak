package fr.polyflix.mapper;

import fr.polyflix.model.User;

import java.util.Map;

public class UserMapper {
    public static User fromKeycloak(String userId, Map<String, String> details) {
        return new User(userId, details.get("email"), details.get("username"), details.get("first_name"), details.get("last_name"));
    }
}
