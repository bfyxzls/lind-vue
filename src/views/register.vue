<template>
  <div class="companyEdit-page">
    <Card>
      <Row class="operation">
        <Button @click="add" type="primary" icon="md-add">添加子部门</Button>
      </Row>
      <Menu mode="horizontal" :theme="theme">
        <MenuItem name="1">基本信息</MenuItem>
      </Menu>
      <Row v-show="curName == 1" class="companyEdit-page-navBlock">
        <Col span="12">
          <Form ref="basicValidate" :model="basicValidate" :rules="basicRule" :label-width="120">
            <FormItem label="企业名称:" prop="name">
              <Input v-model="basicValidate.name"></Input>
            </FormItem>
            <FormItem label="企业规模:">
              <Select v-model="basicValidate.type">
                <Option v-for="item in typeList" :value="item.id" :key="item.value">{{ item.title }}</Option>
              </Select>
            </FormItem>
            <FormItem label="联系人:" prop="linkman">
              <Input v-model="basicValidate.linkman"></Input>
            </FormItem>
            <FormItem label="联系电话:" prop="phone">
              <Input v-model="basicValidate.phone"></Input>
            </FormItem>
            <FormItem label="联系邮箱:">
              <Input v-model="basicValidate.email"></Input>
            </FormItem>
            <FormItem label="到期时间:">
              <DatePicker style="width: 100%;" type="date" v-model="basicValidate.expiryTime"></DatePicker>
            </FormItem>
            <FormItem label="备注:">
              <Input type="textarea" v-model="basicValidate.remark"></Input>
            </FormItem>
          </Form>
          <Row>
            <Button type="primary" class="companyEdit-page-btn" @click="submitForm(1)">保存</Button>
            <Button @click="close">取消</Button>
          </Row>
        </Col>
      </Row>
    </Card>

    <Modal :title="modalTitle" v-model="modalVisible" :mask-closable="false" :width="500">
      <Form ref="formAdd" :model="formAdd" :label-width="85" :rules="formValidate">
        <div v-if="showParent">
          <FormItem label="上级部门：">{{form.title}}</FormItem>
        </div>
        <FormItem label="部门名称" prop="title">
          <Input v-model="formAdd.title" />
        </FormItem>
        <FormItem label="排序值" prop="sortOrder">
          <InputNumber :max="1000" :min="0" v-model="formAdd.sortOrder"></InputNumber>
          <span style="margin-left:5px">值越小越靠前，支持小数</span>
        </FormItem>
        <FormItem label="是否启用" prop="status">
          <i-switch size="large" v-model="formAdd.status" :true-value="0" :false-value="-1">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="cancelAdd">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="submitAdd">提交</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: "companyManage",
  data() {
    return {
      loading: true,
      loadingEdit: true,
      modalVisible: false,
      submitLoading: false,
      modalTitle: "",
      showParent: false,
      theme: "light",
      curName: "1",
      typeList: [], // 企业规模的数据类型
      basicValidate: {
        name: "",
        type: "",
        linkman: "",
        phone: "",
        email: "",
        // createTime:"",
        expiryTime: "",
        remark: ""
      },
      form: {
        id: "",
        parentId: "",
        parentTitle: "",
        sortOrder: 0,
        status: 0,
        url: ""
      },
      formAdd: {},
      formValidate: {
        title: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      },
      menuValidate: [],
      basicRule: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        linkman: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      alert("success");
    },
    close() {
      alert("close");
    },
    cancelAdd() {},
    submitAdd() {
      $refs["formAdd"].validate(valid => {
        if (valid) {
          alert("ok");
        } else {
          alert("fail");
          return false;
        }
      });
    },
    add() {
      this.modalTitle = "添加子部门";
      this.showParent = true;
      this.formAdd = {
        parentId: 1,
        sortOrder: 0,
        status: 0
      };
      this.modalVisible = true;
    }
  }
};
</script>
