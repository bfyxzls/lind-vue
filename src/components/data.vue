<template>
    <div class="app-cont">
            <div class="vue-resource">
            <h3>获取其他地址里的json数据并进遍历</h3>
            <ul>
                <li v-for="item in arrs">
                    <!-- {{item}} -->
                    <span class="id">{{item.userId}} </span>
                    <span class="title">{{item.title}}</span>
                    <span class="completed" v-show="item.completed">选中</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name: "app-cont",
        data () {
            return {
                arrs:{}
            }
        },
        methods: {
        },
        // 页面加载之前，用created钩子函数-获取网页数据
        created() {
            this.$http.get("http://jsonplaceholder.typicode.com/todos")
            .then((data) => {
                alert(data);
                this.arrs = data.body;
            })
        }
    }
</script>