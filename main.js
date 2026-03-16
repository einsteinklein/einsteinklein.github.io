document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentRender = document.getElementById('content-render');

    // 核心函数：读取远程 MD 文件并转换
    async function fetchAndRender(filePath) {
        contentRender.innerHTML = '<p>正在准备内容...</p>';
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error('笔记不存在');
            const mdText = await response.text();
            
            // 使用 marked 渲染 HTML
            contentRender.innerHTML = marked.parse(mdText);
            
            // 自动滚回顶部
            document.querySelector('.content-area').scrollTop = 0;
        } catch (err) {
            contentRender.innerHTML = `<h1>Oops!</h1><p>找不到该笔记：${filePath}</p>`;
        }
    }

    // 给菜单绑定点击事件
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 切换选中样式
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // 获取路径并渲染
            const file = this.getAttribute('data-file');
            fetchAndRender(file);
        });
    });

    // 默认加载第一个
    const defaultFile = menuItems[0].getAttribute('data-file');
    fetchAndRender(defaultFile);
});
