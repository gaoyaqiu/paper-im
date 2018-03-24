package com.gyq.im.server.security.jwt;

/**
 * @au
 */
public final class JwtToken {
    private final String token;

    private JwtToken(String token) {
        this.token = token;
    }

    public static JwtToken of(String token) {
        return new JwtToken(token);
    }

    public String getToken() {
        return token;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        JwtToken jwtToken = (JwtToken) o;

        return token != null ? token.equals(jwtToken.token) : jwtToken.token == null;

    }

    @Override
    public int hashCode() {
        return token != null ? token.hashCode() : 0;
    }
}
