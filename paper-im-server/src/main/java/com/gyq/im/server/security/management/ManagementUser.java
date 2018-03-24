package com.gyq.im.server.security.management;

import java.util.ArrayList;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

/**
 * @author gaoyaqiu
 */
public final class ManagementUser {

    private final String userName;

    private List<ManagementRole> roles = new ArrayList<>();

    private ManagementUser(String userName, List<ManagementRole> roles) {
        this.userName = userName;
        this.roles.addAll(roles);
    }

    public static ManagementUser of(String user, ManagementRole... roles) {
        return new ManagementUser(user, newArrayList(roles));
    }

    public String getUserName() {
        return userName;
    }

    public List<ManagementRole> getRoles() {
        return roles;
    }

    public static ManagementUser of(String user, List<ManagementRole> roles) {
        return new ManagementUser(user, roles);
    }
}
