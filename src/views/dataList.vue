<template>
  <div class="app-cont">
    <Alert  show-icon>
     提示
        <template slot="desc">
       你有1个新学生正在预约！
    </template>
    </Alert>
    <!--
            <ul>
                <li v-for="item in arrs">               
                    <span class="id">{{item.userId}} </span>
                    <span class="title">{{item.title}}</span>
                    <span class="completed" v-show="item.completed">选中</span>
                </li>
            </ul>
    -->
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
  </div>
</template>
<script>
    export default {
        
    }
</script>
<script>
export default {
  name: "app-cont",
  data() {
    return {
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
       
        {
          title: "编号",
          key: "id"
        },
        {
          title: "标题",
          key: "title"
        },
        {
          title: "是否完成",
          key: "completed"
        },
        {
          title: "操作",
          key: "actor",
          align: "center",
          render: (h, params) => {
        
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.$router.push({
                          path:
                            "/data/" +
                            this.data1[params.index].id
                        });
                      }
                    }
                  },
                  "查看"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    on: {
                      click: () => {
                        this.popupIsShow = true;
                        this.gcid = this.data1[params.index].id;
                      }
                    }
                  },
                  "删除"
                )
              ]);
            
          }
        }
      ],
      data1: []
    };
  },
  methods: {},
  // 页面加载之前，用created钩子函数-获取网页数据
  created() {
    this.$http.get("../static/dataDic.json").then(data => {
      var arrs = [];
      for (var i = 0; i < 10; i++) {
        arrs.push(data.body[i]);
      }
      this.data1 = arrs;
    });
  }
};
</script>
