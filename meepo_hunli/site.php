<?php
/**
 * 婚礼邀请函模块微站定义
 *
 * @author imeepos
 * @url
 */
defined('IN_IA') or exit('Access Denied');

class Meepo_hunliModuleSite extends WeModuleSite
{
    private function checkMobileDo($do)
    {
        if (empty($_GET['do'])) {
            $url = $this->createMobileUrl($do);
            header("Location:" . $url);
            exit();
        }
    }

    private function checkWebDo($do)
    {
        if (empty($_GET['do'])) {
            $url = $this->createWebUrl($do);
            header("Location:" . $url);
            exit();
        }
    }

    public function doMobileIndex()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('index');
        $userinfo = mc_oauth_userinfo();
        $avatar = $userinfo['avatar'];
        preg_match("/.*?\/(132132)/", $avatar, $maches);
        $avatar = str_replace($maches[1], '132', $avatar);
        $userinfo['avatar'] = $avatar;
        $url = $this->getRealUrl();
        if ($url !== $_W['siteurl']) {
            header("location:" . $url);
            exit();
        }
        $name = 'setting';
        $item = pdo_get('meepo_hunli_setting', array('name' => $name, 'uniacid' => $_W['uniacid']));
        $setting = unserialize($item['value']);
        include $this->template('index');
    }

    public function doWebIndex()
    {
        global $_W, $_GPC;
        $this->checkWebDo('index');
        include $this->template('web/index');
    }

    public function doWebSetting()
    {
        global $_W, $_GPC;
        $this->checkWebDo('setting');
        include $this->template('web/index');
    }

    public function doMobileUpdate()
    {

    }

    public function getRealUrl()
    {
        $protocol = (!empty($_SERVER[HTTPS]) && $_SERVER[HTTPS] !== off || $_SERVER[SERVER_PORT] == 443) ? "https://" : "http://";
        $url = $protocol . $_SERVER[HTTP_HOST] . $_SERVER[REQUEST_URI];
        preg_match("/.*?(\&from=.*)/", $url, $maches);
        $url = str_replace($maches[1], '', $url);
        return $url;
    }

}
