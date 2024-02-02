const { ref, onMounted, h } = Vue
const { message } = antd
const app = Vue.createApp({
    setup() {
        const data = ref({
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
            titleIcon:'server',
            //分类标题颜色
            titleIconColor:'#999999',
            //总项目列表
            dataSource: [],
            columns: [],
            //默认选中分类
            dataTag: '全部',
            //说明弹窗内容
            htmlData:'',
            //表格分页
            pagination: {
                onChange: page => {
                    console.log(page)
                },
                pageSize: 6,
            }
        })

        const resetSearch = ()=>{
            if(data.value.searchValue !== ''){
                getList()
            }else {
                message.error('未输入文字无需重置！')
            }
        }

        //关闭弹窗
        const hideModal = ()=> {
            data.value.visible = false
        }
        //重置搜索

        const onSearch = ()=>{
            // 如果标题中包含关键字，插入到列表中
            let dataArr = []
            if(data.value.searchValue !== ''){
                _list.forEach(item => {
                    if(item.title.includes(data.value.searchValue)){
                        dataArr.push(item)
                    }
                })
                if(dataArr.length > 0){
                    //分类标题图标与颜色
                    data.value.titleIcon='search'
                    data.value.titleIconColor='#ff7875'
                    //关闭分类总数显示
                    data.value.isShow = false
                    //列表置空
                    data.value.dataSource = dataArr
                    //打印关键字
                    data.value.searchWord = data.value.searchValue
                    //设置分类总数
                    console.log(data.value.dataSource.length)
                    data.value.number = data.value.dataSource.length || 0
                }else {
                    //渲染提示信息
                    const vNode = h('span', {
                        class: 'vNode'
                    },[
                        h('span','无法搜索到带有 '),
                        h('span', {style:'color:red;font-weight:bold'}, data.value.searchValue),
                        h('span', ' 关键字的内容，请重新输入！')
                    ])
                    //清空列表
                    data.value.number = 0
                    data.value.dataSource = []
                    message.error({content: vNode})
                }
            }else {
                message.error('请输入文字！')
            }
        }
        //设置分类菜单方法
        const setTagList = (e)=>{
            data.value.dataSource = []
            data.value.searchValue = ''
            pushList(data.value.dataSource,e.target.value)
            //分类
            data.value.tags = data.value.dataTag
            //分类总数
            data.value.number = data.value.dataSource.length || 0
            //console.log(data.value.dataSource)
        }
        //分类
        const handleSizeChange = (e)=> {
            //显示分类总数
            data.value.isShow = true;
            data.value.dataTag = e.target.value;
            switch(e.target.value){
                case '全部' :
                    getList()
                    data.value.titleIcon='server'
                    data.value.titleIconColor='#999999'
                    return
                case '电脑端' :
                    //设置分类菜单
                    setTagList(e);
                    //分类标题图标与颜色
                    data.value.titleIcon='desktop'
                    data.value.titleIconColor='#62bbff'
                    return
                case '移动端' :
                    //设置分类菜单
                    setTagList(e)
                    //分类标题图标与颜色
                    data.value.titleIcon='qrcode'
                    data.value.titleIconColor='#fda9a9'
                    return
            }
        }
        const getList = ()=>{
            //分类标题图标与颜色
            data.value.titleIcon = 'server'
            data.value.titleIconColor = '#999999'
            //清空数据
            data.value.dataSource = []
            //加载全部分类
            data.value.dataSource = _list
            //console.log(data.value.dataSource)
            data.value.tags = ''
            data.value.searchValue = ''
            data.value.searchWord = ''
            data.value.number = data.value.dataSource.length || 0
        }
        //获取分类方法
        const pushList = (arr,tag)=>{
            _list.forEach(item => {
                if(item.tag === tag){
                    arr.push(item)
                }
            })
        }
        //高亮搜索文字方法
        const highLight = (title)=>{
            // 如果标题中包含，关键字就替换一下
            if(title.includes(data.value.searchWord)){
                title = title.replace(
                    data.value.searchWord,
                    // 这里是替换成html格式的数据，最好再加一个样式权重，保险一点
                    '<span style="color:red!important;">'+ data.value.searchWord +'</span>'
                )
                return title
            }
            // 不包含直接返回标题
            else{
                return title
            }
        }

        onMounted(() => {
            data.value.htmlTitle = _Basic_Title
            //页面标题
            document.title = _Basic_Title
            //列表内容
            data.value.number = data.value.dataSource.length || 0
            //表头
            data.value.columns = _columns
            //console.log(data.value.columns)
            data.value.htmlData = _htmlData
            //setList(this.kjList,'科技')
            getList()
        })

        return {
            data,
            resetSearch,
            hideModal,
            onSearch,
            setTagList,
            handleSizeChange,
            getList,
            pushList,
            highLight
        }
    }
})
app.use(antd)
app.mount('#app')
