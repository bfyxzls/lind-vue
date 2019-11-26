<template>
  <div class="page">
    <div>{{message}}</div>
    <Form ref="formAdd" :model="basic" :rules="basicRule" :label-width="120">
      <FormItem label="企业名称:" prop="name">
        <Input v-model="basic.name" />
      </FormItem>
      <FormItem label="企业类型:" prop="style">
        <Input v-model="basic.style" />
      </FormItem>
    </Form>
    <div>
      <Button type="text" @click="cancelAdd">取消</Button>
      <Button type="primary" @click="submitAdd">提交</Button>
    </div>
    <Row type="flex" justify="end" class="page">
      <Page
        :current="1"
        :total="100"
        :page-size="10"
        :page-size-opts="[10,20,50]"
        size="small"
        show-total
        show-elevator
        show-sizer
      ></Page>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello",
      formAdd: {},
      basic: {
        name: "名称"
      },
      basicRule: {
        name: [
          {
            required: true,
            message: "The name cannot is empty",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "The name length 3 between 5",
            trigger: "blur"
          }
        ],
        style: [
          {
            required: true,
            message: "The style cannot is empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    cancelAdd() {},
    submitAdd() {
      this.$refs.formAdd.validate(valid => {
        if (valid) {
          alert("ok");
        } else {
          alert("fail");
          return false;
        }
      });
    }
  }
};
</script>
