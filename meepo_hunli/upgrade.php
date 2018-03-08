<?php
$sql = "DROP TABLE IF EXISTS ".tablename('meepo_hunli_setting').";
CREATE TABLE ".tablename('meepo_hunli_setting')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT '',
  `value` text,
  `uniacid` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";
pdo_query($sql);

$sql = "DROP TABLE IF EXISTS ".tablename('meepos_hunli_fuyue').";
CREATE TABLE ".tablename('meepos_hunli_fuyue')." (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `openid` varchar(64) NOT NULL DEFAULT '',
  `realname` varchar(64) NOT NULL DEFAULT '',
  `mobile` varchar(30) NOT NULL DEFAULT '',
  `avatar` varchar(640) NOT NULL DEFAULT '',
  `nickname` varchar(64) NOT NULL DEFAULT '',
  `content` varchar(640) NOT NULL DEFAULT '',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  `uniacid` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
pdo_query($sql);

$sql = "DROP TABLE IF EXISTS ".tablename('meepos_hunli_discuss').";
CREATE TABLE ".tablename('meepos_hunli_discuss')." (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `openid` varchar(64) NOT NULL DEFAULT '',
  `avatar` varchar(640) NOT NULL DEFAULT '',
  `content` varchar(640) NOT NULL DEFAULT '',
  `create_time` int(11) NOT NULL DEFAULT '0',
  `uniacid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
pdo_query($sql);