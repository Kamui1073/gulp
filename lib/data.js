//名称不用加.html,自动补全
let _Basic_Title = '名称1'
let _list = [
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'mobile',
        tag:'移动端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    },
    {
        title:'index',
        tag:'电脑端'
    }
]

/*************************/
/*** main.js 数据勿动！ ***/
/***********************/
//弹出层
let _htmlData = `
<div style="padding-bottom: 10px;">
    <strong>索引页数据示例</strong>
</div>
<p class="code">
    <span><i style="color: #b671ff">let</i> _Basic_Title = <i style="color: #b3ff92">'名称'</i>　　<i style="color: #999">//项目名称</i></span>
    <br/>
    <span><i style="color: #b671ff">let</i> lists = [</span>
    <span>　　{ tit : <i style="color: #b3ff92">'index'</i> , tag : <i style="color: #b3ff92">'电脑端'</i> } ,　　<i style="color: #999">//单个html标题</i></span>
    <span>　　{ tit : <i style="color: #b3ff92">'list'</i> , tag : <i style="color: #b3ff92">'电脑端'</i> } </span>
    <span> ]</span>
</p>
<p><strong>_Basic_Title</strong>是名称</p>
<p><b>lists</b>对象中的<strong>tit</strong>为<strong>app</strong>目录下<strong>html</strong>名称，<strong>tag</strong>为分类，<strong>tag</strong>只有两类<strong>电脑端</strong>和<strong>移动端</strong>。</p>`
//表头
let _columns = [
    {
        title: '分类',
        key: 'tag',
        dataIndex: 'tag',
        slots: {
            customRender: 'tag',
        },
        width: 150
    },
    {
        title: '名称',
        dataIndex: 'title',
        key: 'title',
        slots: {
            customRender: 'name',
        },
    }
]
