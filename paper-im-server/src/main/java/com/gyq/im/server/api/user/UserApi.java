package com.gyq.im.server.api.user;

import com.gyq.im.common.annoation.LogStyle;
import com.gyq.im.common.constant.GlobalConstants;
import com.gyq.im.common.models.ResponseEntity;
import com.gyq.im.common.models.wrapper.ResponseFactory;
import com.gyq.im.server.api.AbstractBizBaseApi;
import org.springframework.web.bind.annotation.*;

/**
 * 用户相关api.
 *
 * @auther gaoyaqiu
 * @date 2018/3/22
 */
@RestController
public class UserApi extends AbstractBizBaseApi {

    /**
     * 查询用户详情.
     *
     * @param uid
     * @return
     */
    @LogStyle(version= GlobalConstants.Version.API_V1_0_0, beforeDesc ="查询用户详情:[{0}]", afterDesc = "查询用户详情返回值:[{}]")
    @ResponseBody
    @GetMapping(value = "user/get/{uid}")
    public ResponseEntity get(@PathVariable String uid) {

        return ResponseFactory.wrapper();
    }

    /**
     * 注册用户.
     *
     * @param uid
     * @return
     */
    @LogStyle(version= GlobalConstants.Version.API_V1_0_0, beforeDesc ="添加用户:[{0}]", afterDesc = "添加用户返回值:[{}]")
    @ResponseBody
    @PostMapping(value = "user/create")
    public ResponseEntity add(@PathVariable String uid) {

        return ResponseFactory.wrapper();
    }
}
