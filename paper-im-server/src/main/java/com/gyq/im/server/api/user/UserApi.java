package com.gyq.im.server.api.user;

import com.gyq.im.common.annoation.LogStyle;
import com.gyq.im.common.constant.GlobalConstants;
import com.gyq.im.common.exception.CommonResponse;
import com.gyq.im.core.service.IGyqUserService;
import com.gyq.im.server.api.AbstractBizBaseApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 用户相关api.
 *
 * @auther gaoyaqiu
 * @date 2018/3/22
 */
@RestController
public class UserApi extends AbstractBizBaseApi {

    @Autowired
    private IGyqUserService userService;

    /**
     * p
     * 查询用户详情.
     *
     * @param uid
     * @return
     */
    @LogStyle(version = GlobalConstants.Version.API_V1_0_0, beforeDesc = "查询用户详情:[{0}]", afterDesc = "查询用户详情返回值:[{}]")
    @GetMapping(value = "user/get/{uid}")
    public ResponseEntity get(@PathVariable String uid) {

        return new ResponseEntity(null, null);
    }

    /**
     * 添加用户.
     *
     * @param
     * @return
     */
    @LogStyle(version = GlobalConstants.Version.API_V1_0_0, beforeDesc = "添加用户:[{0}]", afterDesc = "添加用户返回值:[{}]")
    @PostMapping(value = "user/add")
    public ResponseEntity add() throws Exception {
        return ResponseEntity.ok(CommonResponse.newBuilder().build());
    }
}
