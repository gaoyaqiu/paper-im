CREATE TABLE `gyq_user` (
  `user_uid` bigint(20) unsigned NOT NULL COMMENT '用户UID',
  `user_login_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '登录账号',
  `user_pwd` char(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户密码',
  `user_nick_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '昵称',
  `user_mobile` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT '手机号码',
  `user_email` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT '邮箱',
  `user_gender` int(10) unsigned DEFAULT '0' COMMENT '性别, 0: 未知, 1:男; 2:女',
  `user_face` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT '用户头像',
  `user_birthday` bigint(20) unsigned DEFAULT '0' COMMENT '生日',
  `user_sign` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT '签名',
  `user_salt` char(6) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '密码干扰串',
  `user_status` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '状态, 1=初始化，2=已更新, 3=已删除',
  `user_created` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `user_updated` bigint(20) unsigned DEFAULT '0' COMMENT '更新时间',
  `user_deleted` bigint(20) unsigned DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`user_uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

CREATE TABLE `gyq_friends` (
  `f_id` bigint(20) unsigned NOT NULL COMMENT '好友表id',
  `f_uid` bigint(20) unsigned NOT NULL COMMENT '用户id',
  `f_friend_uid` bigint(20) unsigned NOT NULL COMMENT '用户好友id',
  `f_status` int(11) unsigned NOT NULL COMMENT '状态, 1=初始化，2=已更新, 3=已删除',
  `f_created` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `f_updated` bigint(20) unsigned DEFAULT '0' COMMENT '更新时间',
  `f_deleted` bigint(20) unsigned DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户好友表';

CREATE TABLE `gyq_groups` (
  `g_id` bigint(20) unsigned NOT NULL COMMENT '群组id',
  `g_number` bigint(20) unsigned NOT NULL COMMENT '群号码',
  `g_name` varchar(50) NOT NULL COMMENT '群名称',
  `g_info` varchar(500) DEFAULT NULL COMMENT '群简介',
  `g_status` int(10) unsigned NOT NULL COMMENT '状态, 1=初始化，2=已更新, 3=已删除',
  `g_created` bigint(20) unsigned NOT NULL COMMENT '创建时间',
  `g_updated` bigint(20) unsigned DEFAULT NULL COMMENT '更新时间',
  `g_deleted` bigint(20) unsigned DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`g_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='群组表';

CREATE TABLE `gyq_message` (
  `msg_id` bigint(20) unsigned NOT NULL COMMENT '消息id',
  `from_id` bigint(20) unsigned NOT NULL COMMENT '发送者id',
  `to_id` bigint(20) unsigned NOT NULL COMMENT '接收者id',
  `msg_content` varchar(2000) NOT NULL COMMENT '消息内容',
  `msg_biz_status` int(10) unsigned NOT NULL DEFAULT '2' COMMENT '消息状态，1=已读,2=未读(默认为2)',
  `msg_status` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '状态, 1=初始化，2=已更新, 3=已删除',
  `msg_created` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `msg_updated` bigint(20) unsigned DEFAULT '0' COMMENT '更新时间',
  `msg_deleted` bigint(20) unsigned DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='消息表';

CREATE TABLE `gyq_user_groups` (
  `ug_id` bigint(20) unsigned NOT NULL,
  `g_id` bigint(20) unsigned NOT NULL COMMENT '群id',
  `user_uid` bigint(20) unsigned NOT NULL COMMENT '用户id',
  `g_name` varchar(50) NOT NULL COMMENT '群名称',
  `ug_status` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '状态, 1=初始化，2=已更新, 3=已删除',
  `ug_created` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `ug_updated` bigint(20) unsigned DEFAULT '0' COMMENT '更新时间',
  `ug_deleted` bigint(20) unsigned DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`ug_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户和群组关系表';