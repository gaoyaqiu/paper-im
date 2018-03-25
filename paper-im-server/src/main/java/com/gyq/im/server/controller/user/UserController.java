package com.gyq.im.server.controller.user;

import com.gyq.im.common.annoation.LogStyle;
import com.gyq.im.common.constant.GlobalConstants;
import com.gyq.im.common.exception.CommonResponse;
import com.gyq.im.server.controller.AbstractBizApi;
import com.gyq.im.server.service.user.IUserService;
import com.gyq.im.server.valid.ValidGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static com.google.common.collect.ImmutableMap.of;

/**
 * 用户相关api.
 *
 * @auther gaoyaqiu
 * @date 2018/3/22
 */
@RestController
public class UserController extends AbstractBizApi {

    @Autowired
    private IUserService userService;

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
    public ResponseEntity add(@Validated(ValidGroup.Add.class) @RequestBody User user) {
        Long userUid = userService.add(user);
        return new ResponseEntity(CommonResponse.newBuilder().data(of("userUid", userUid)).build(), HttpStatus.CREATED);
    }

    /**
     * 添加用户.
     *
     * @param
     * @return
     */
    @LogStyle(version = GlobalConstants.Version.API_V1_0_0, beforeDesc = "添加用户:[{0}]", afterDesc = "添加用户返回值:[{}]")
    @PostMapping(value = "user/login")
    public ResponseEntity login() {
        return ResponseEntity.ok(CommonResponse.newBuilder().build());
    }
}
