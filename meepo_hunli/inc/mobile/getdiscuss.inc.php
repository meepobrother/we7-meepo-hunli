<?php
global $_W,$_GPC;

$list = pdo_getall('meepos_hunli_discuss',array('uniacid'=>$_W['uniacid']));

die(json_encode($list));
