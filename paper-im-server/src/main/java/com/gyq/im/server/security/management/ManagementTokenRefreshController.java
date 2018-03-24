package com.gyq.im.server.security.management;

import com.gyq.im.common.exception.CommonResponse;
import com.gyq.im.server.controller.AbstractSystemApi;
import com.gyq.im.server.security.jwt.ManagementJwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * token刷新接口.
 *
 * @author gaoyaqiu
 */
@RestController
public class ManagementTokenRefreshController extends AbstractSystemApi {

    @Autowired
    private ManagementJwtService jwtService;

    /**
     * 刷新token.
     *
     * @param user
     * @return
     */
    @PostMapping("/management/token/refresh")
    public ResponseEntity refresh(@AuthenticationPrincipal ManagementUser user) {
        return ResponseEntity.ok(CommonResponse.newBuilder().data(jwtService.generateJwtToken(user)));
    }
}
