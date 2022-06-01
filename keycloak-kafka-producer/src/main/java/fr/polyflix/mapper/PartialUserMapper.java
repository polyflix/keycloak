package fr.polyflix.mapper;

import fr.polyflix.model.PartialUser;

import java.util.Map;

public class PartialUserMapper {
    public static PartialUser fromKeycloak(String userId, Map<String, String> details) {
        return new PartialUser(userId, details.get("username"));
    }
}
