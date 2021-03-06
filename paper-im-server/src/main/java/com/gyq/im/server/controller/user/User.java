package com.gyq.im.server.controller.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.gyq.im.server.valid.ValidGroup;
import com.gyq.im.server.valid.ValidateMessage;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import java.io.Serializable;


@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class User implements Serializable {
    private String userUid;

    @NotEmpty(message = ValidateMessage.NotEmpty, groups = {ValidGroup.Add.class})
    @Length(message = ValidateMessage.Length, min = 4, max = 20, groups = {ValidGroup.Add.class})
    private String loginName;

    @NotEmpty(message = ValidateMessage.NotEmpty, groups = {ValidGroup.Add.class})
    @Length(message = ValidateMessage.Length, min = 8, max = 20, groups = {ValidGroup.Add.class})
    private String passWord;

    @NotEmpty(message = ValidateMessage.NotEmpty, groups = {ValidGroup.Add.class})
    @Length(message = ValidateMessage.Length, min = 2, max = 20, groups = {ValidGroup.Add.class})
    private String userNickName;

    private String userMobile;

    private String userEmail;

    private Integer userGender;

    private String userFace;

    private Long userBirthday;

    private String userSign;

    private Integer userStatus;

    private Long userCreated;

    private Long userUpdated;

    // 是否是好友
    private Boolean isFriend = false;

    private static final long serialVersionUID = 1L;
}