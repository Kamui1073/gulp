let htmlData = `
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
<p><b>lists</b>对象中的<strong>tit</strong>为<strong>app</strong>目录下<strong>html</strong>名称，<strong>tag</strong>为分类，只有两类<strong>电脑端</strong>和<strong>移动端</strong>。</p>`

let vm = new Vue({
    el: "#app",
    data: {
        //弹窗
        visible:false,
        //显示关键字或分类
        isShow:true,
        //搜索关键字内容
        searchValue:'',
        //搜索关键字展示
        searchWord:'',
        //项目路径
        link:'app/',
        //标题
        htmlTitle : '文件',
        //项目数量
        number:'',
        //项目分类
        tags:'',
        tagData:['全部','电脑端','移动端'],
        //分类标题图标
        titleIcon:'slack',
        //分类标题颜色
        titleIconColor:'#999999',
        //总项目列表
        dataList:[],
        //默认选中分类
        dataTag: '全部',
        pagination: {
            onChange: page => {
                console.log(page)
            },
            pageSize: 6,
        }
    },
    beforeCreate() {
    },
    created(){

    },
    mounted(){
        this.htmlTitle = _Basic_Title
        //页面标题
        document.title = _Basic_Title
        //列表
        this.number = this.dataList.length
        //this.setList(this.kjList,'科技')
        this.getList()
    },
    methods:{
        //关闭弹窗
        hideModal() {
            this.visible = false
        },
        //重置搜索
        resetSearch(){
            if(this.searchValue !== ''){
                this.getList()
            }else {
                this.$message.error('未输入文字无需重置！')
            }
        },
        onSearch(){
            // 如果标题中包含关键字，插入到列表中
            let data = []
            if(this.searchValue !== ''){
                lists.forEach(item => {
                    if(item.tit.includes(this.searchValue)){
                        data.push(item)
                    }
                })
                if(data.length > 0){
                    //分类标题图标与颜色
                    this.titleIcon='hdd'
                    this.titleIconColor='#999999'
                    //关闭分类总数显示
                    this.isShow = false
                    //列表置空
                    this.dataList = data
                    //打印关键字
                    this.searchWord = this.searchValue
                    console.log(this.searchValue)
                }else {
                    this.$message.error('无法搜索到带有 ' + this.searchValue + ' 关键字的内容，请重新输入！')
                }
            }else {
                this.$message.error('请输入文字！')
            }
            //设置分类总数
            this.number = this.dataList.length || 0
        },
        //设置分类菜单方法
        setTagList(e){
            this.dataList = []
            this.searchValue = ''
            this.pushList(this.dataList,e.target.value)
            //分类
            this.tags = this.dataTag
            //分类总数
            this.number = this.dataList.length || 0
        },
        //分类
        handleSizeChange(e) {
            //显示分类总数
            this.isShow = true;
            this.dataTag = e.target.value;
            switch(e.target.value){
                case '全部' :
                    this.getList()
                    this.titleIcon='slack'
                    this.titleIconColor='#999999'
                    return
                case '电脑端' :
                    //设置分类菜单
                    this.setTagList(e);
                    //分类标题图标与颜色
                    this.titleIcon='desktop'
                    this.titleIconColor='#62bbff'
                    return
                case '移动端' :
                    //设置分类菜单
                    this.setTagList(e)
                    //分类标题图标与颜色
                    this.titleIcon='mobile'
                    this.titleIconColor='#fda9a9'
                    return
            }
        },
        getList(){
            this.dataList = [];
            //加载全部分类
            this.dataList = lists
            this.tags = ''
            this.searchValue = ''
            this.searchWord = ''
            this.number = this.dataList.length || 0
        },
        //获取分类方法
        pushList(arr,tag){
            lists.forEach(item => {
                if(item.tag === tag){
                    arr.push(item)
                }
            })
        },
        //高亮搜索文字方法
        highLight(title){
            // 如果标题中包含，关键字就替换一下
            if(title.includes(this.searchValue)){
                title = title.replace(
                    this.searchValue,
                    // 这里是替换成html格式的数据，最好再加一个样式权重，保险一点
                    '<font style="color:red!important;">'+ this.searchValue +'</font>'
                )
                return title
            }
            // 不包含的话还用这个
            else{
                return title
            }
        }
    }
})
