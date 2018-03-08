<?php
global $_W, $_GPC;

$name = 'setting';
$item = pdo_get('meepo_hunli_setting', array('name' => $name, 'uniacid' => $_W['uniacid']));
$item['value'] = unserialize($item['value']);
die(json_encode($item));
