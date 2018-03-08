<?php
global $_W, $_GPC;
$file = $_GPC['__input'];
$url = $_W['siteroot'] . 'attachment/';
$file['loc'] = $url;
if (!empty($file['url'])) {
    $file['attachment'] = str_replace($url, '', $file['url']);
} else {
    $file['attachment'] = str_replace($url, '', $file['response']['url']);
}
if (empty($_W['isfounder']) && $_W['role'] != ACCOUNT_MANAGE_NAME_MANAGER && $_W['role'] != ACCOUNT_MANAGE_NAME_OWNER) {
    exit('您没有权限删除该文件');
}
if (!empty($_W['setting']['remote']['type'])) {
    $status = file_remote_delete($file['attachment']);
} else {
    $status = file_delete($file['attachment']);
}
exit(json_encode($file));
