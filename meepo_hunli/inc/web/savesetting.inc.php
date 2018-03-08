<?php

global $_W, $_GPC;

$input = $_GPC['__input'];
$name = 'setting';
$data = array();
$data['name'] = $name;
$data['value'] = serialize($input);
$data['uniacid'] = $_W['uniacid'];
$item = pdo_get('meepo_hunli_setting', array('name' => $name, 'uniacid' => $_W['uniacid']));
if (empty($item)) {
    pdo_insert('meepo_hunli_setting', $data);
    $data['id'] = pdo_insertid();
} else {
    pdo_update('meepo_hunli_setting', array('value' => serialize($input)), array('id' => $item['id']));
}
$data['value'] = unserialize($data['value']);

die(json_encode($data));
