-- 用户基本信息表

CREATE TABLE `gyq_member` (
  `mem_uid` bigint(20) NOT NULL COMMENT '用户UID',
  `mem_login_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '登录账号',
  `mem_pwd` char(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户密码',
  `mem_nick_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '昵称',
  `mem_mobile` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '手机号码',
  `mem_email` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '邮箱',
  `mem_gender` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '性别, 0: 未知, 1:男; 2:女',
  `mem_face` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户头像',
  `mem_birthday` bigint(20) DEFAULT NULL COMMENT '生日',
  `mem_sign` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '签名',
  `mem_salt` char(6) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '密码干扰串',
  `mem_status` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '状态, 1=初始化，2=已更新, 3=已删除',
  `mem_created` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `mem_updated` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `mem_deleted` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`mem_uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';
