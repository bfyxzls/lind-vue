<template>
  <div>
    <Input type="text" v-model="message" clearable placeholder="请输入用户名" style="width: 200px" />
    {{full}}
    <br />
    len:  <Input type="text" v-model="len" />
    width: <Input type="text" v-model="width" />
    area:  <input v-model="areas" type="text" />
  </div>
</template>
<script>
export default {
  name: "test-manage",
  props: {
    //接收父组件传递过来的参数
  },
  data() {
    // 定义变量
    return {
      message: "hello",
      full: "",
      len: 0,
      width: 0
    };
  },
  methods: {
    //事件方法执行
    init() {
      message = "hello world!";
    }
  },
  created() {
    //html加载完成之前执行,执行顺序：父组件-子组件
  },
  mounted() {
    //加载完成后执行,执行顺序：子组件-父组件
  },
  watch: {
    //监听一个值的变化，然后执行相对应的函数
    message: function(val) {
      this.full = "名称:" + val;
    }
  },
  computed: {
    //计算属性，也就是依赖其它的属性计算所得出最后的值
    areas: function() {
      console.log("调用computed");
      return this.len * this.width;
    }
  }
};
</script>