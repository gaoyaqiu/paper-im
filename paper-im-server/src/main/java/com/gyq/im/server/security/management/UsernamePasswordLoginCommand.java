package com.gyq.im.server.security.management;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author gaoyaqiu
 */
public final class UsernamePasswordLoginCommand {
    private final String userName;

    private final String passWord;

    @JsonCreator
    public UsernamePasswordLoginCommand(@JsonProperty("userName") String userName,
                                        @JsonProperty("passWord") String passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassWord() {
        return passWord;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UsernamePasswordLoginCommand that = (UsernamePasswordLoginCommand) o;

        // 要么用户名相等，要么密码相等
        return userName != null ? userName.equals(that.userName) : that.userName == null && (passWord != null ? passWord.equals(that.passWord) : that.passWord == null);
    }

    @Override
    public int hashCode() {
        int result = userName != null ? userName.hashCode() : 0;
        result = 31 * result + (passWord != null ? passWord.hashCode() : 0);
        return result;
    }
}
