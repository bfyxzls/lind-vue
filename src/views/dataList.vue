<template>
  <div class="app-cont">
    <Alert show-icon>
      提示
      <template slot="desc">你有1个新学生正在预约！</template>
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
  name: "app-cont",
  data() {
    return {
      menuForm: { status: 0 },
      dictSex: [{ title: "男", value: 1 }, { title: "女", value: 0 }],
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
          title: "姓名",
          key: "title"
        },
        {
          title: "性别",
          key: "sex",
          render: (h, params) => {
            let re = "";
            this.dictSex.forEach(e => {
              if (e.value == params.row.sex) {
                re = e.title;
              }
            });
            return h("div", re);
          }
        },
        {
          title: "是否完成",
          key: "completed",
          render: (h, params) => {
            //回调，双向绑定
            let re = "";
            if (params.row.completed) {
              return h("div",[
                h(
                  "Tag",
                  {
                    props: {
                      color: "green"
                    }
                  },
                  "完成"
                )
              ])
            } else {
              return h("div", "未完成");
            }

          }
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
                        path: "/data/" + this.data1[params.index].id
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
                      this.remove(params.row);
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
  methods: {
    remove(v) {
      this.$Modal.confirm({
        title: "确认删除",
        content: "您确认要删除 " + v.name + " ?",
        onOk: () => {
          alert("delete success");
        }
      });
    }
  },
  // 页面加载之前，用created钩子函数-获取网页数据
  created() {
    this.$http.get("../static/dataDic.json").then(data => {
      var arrs = [];
      for (var i = 0; i < data.body.length; i++) {
        arrs.push(data.body[i]);
      }
      console.log(arrs);
      this.data1 = arrs;
    });
  }
};
</script>
