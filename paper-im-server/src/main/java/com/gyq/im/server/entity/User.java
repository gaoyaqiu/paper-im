package com.gyq.im.server.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gyq.im.common.annoation.BeanCopyIgnore;
import com.gyq.im.server.valid.ValidGroup;
import com.gyq.im.server.valid.ValidateMessage;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User implements Serializable {
    private Long userUid;

    @NotNull(message = ValidateMessage.NotNull, groups = {ValidGroup.Add.class})
    private String userLoginName;

    @NotNull(message = ValidateMessage.NotNull, groups = {ValidGroup.Add.class})
    private String userPwd;

    @NotNull(message = ValidateMessage.NotNull, groups = {ValidGroup.Add.class})
    private String userNickName;

    private String userMobile;

    private String userEmail;

    private Integer userGender;

    private String userFace;

    private Long userBirthday;

    private String userSign;

    private String userSalt;

    private Integer userStatus;

    private Long userCreated;

    private Long userUpdated;

    @BeanCopyIgnore
    private static final long serialVersionUID = 1L;
}