
  <template>
  <div id="app">
    这是自定义的组件：{{myMessage}}
    <button @click="childClick">调用父组件的方法</button>
  </div>
</template>
<script>
export default {
  name: "testComponent",
  props: ["myMessage"],
  data() {
    return {
      message: "hello world",
      myNum: 37,
      myStr: "lind"
    };
  },
  methods: {
    childClick() {
       console.log("调用childClick");
      this.$emit("abcClick", this.myNum, this.myStr);
    }
  }
};
</script>