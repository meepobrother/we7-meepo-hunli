<?php
global $_W, $_GPC;
$type = 'audio';
load()->func('file');
if (empty($_FILES['file']['name'])) {
    $result['message'] = '上传失败, 请选择要上传的文件！';
    die(json_encode($result));
}
if ($_FILES['file']['error'] != 0) {
    $result['message'] = '上传失败, 请重试.';
    die(json_encode($result));
}
$ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
$ext = strtolower($ext);
$size = intval($_FILES['file']['size']);
$originname = $_FILES['file']['name'];

$setting['folder'] = 'meepo_hunli/audio/';
$filename = file_random_name(ATTACHMENT_ROOT . '/' . $setting['folder'], $ext);

$file = file_upload($_FILES['file'], $type, $setting['folder'] . $filename, true);

if (is_error($file)) {
    $result['message'] = $file['message'];
    die(json_encode($result));
}
$pathname = $file['path'];
$fullname = tomedia($pathname);
$data = array();
$data['url'] = $fullname;
$data['status'] = 'success';

die(json_encode($data));

