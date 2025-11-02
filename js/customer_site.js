const CUSTOMER_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
        detail: 'http://caiji.dyttzyapi.com',
    },
        ruyi: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
