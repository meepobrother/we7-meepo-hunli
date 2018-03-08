<?php
global $_W, $_GPC;

$input = $_GPC['__input'];
$data = array();
$data['uniacid'] = $_W['uniacid'];
$data['openid'] = $_W['openid'];
$data['avatar'] = $input['avatar'];
$data['content'] = $input['content'];
$data['create_time'] = $input['create_time'];
$data['mobile'] = $input['mobile'];
$data['realname'] = $input['realname'];

if (!empty($input['content'])) {
    if (pdo_insert('meepos_hunli_fuyue', $data)) {
        $data['id'] = pdo_insertid();
        die(json_encode($data));
    }
}

die(json_encode($input));

