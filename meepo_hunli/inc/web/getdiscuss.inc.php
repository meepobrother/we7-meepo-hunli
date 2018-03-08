<?php
global $_W, $_GPC;

$list = pdo_getall('meepos_hunli_discuss', array('uniacid' => $_W['uniacid']));
foreach ($list as &$li) {
    $li['create_time'] = date('m-d H:i', $li['create_time']);
}
unset($li);
die(json_encode($list));
