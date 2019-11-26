<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 40px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 13px;
  left: 20px;
  color: #fff;
  font-size: 18px;
  margin: 10px;
}
.layout-nav {
  position: absolute;
  right: 0;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">培训通系统</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/list">学生管理</router-link>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/data">课程管理</router-link>
            </MenuItem>
             <MenuItem name="3">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/data">老师管理</router-link>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              <router-link to="/hello">考勤管理</router-link>
            </MenuItem>
               <MenuItem name="5">
              <Icon type="ios-analytics"></Icon>
              <router-link to="/hello">活动管理</router-link>
            </MenuItem>
            <MenuItem name="6">
              <Icon type="ios-paper"></Icon>
              <router-link to="/login">登录</router-link>
              /
              <router-link to="/register">注册</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '16px 0'}"></Breadcrumb>
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>学生管理
                  </template>
                  <MenuItem name="1-1">添加学生</MenuItem>
                  <MenuItem name="1-2">学生列表</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>课程管理
                  </template>
                  <MenuItem name="2-1">添加新课</MenuItem>
                  <MenuItem name="2-2">课程列表</MenuItem>
                  <MenuItem name="2-3">预约试听</MenuItem>
                  <MenuItem name="2-3">正在进行</MenuItem>
                  <MenuItem name="2-3">已经完成</MenuItem>
                </Submenu>
                  <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>老师管理
                  </template>
                  <MenuItem name="3-1">添加老师</MenuItem>
                  <MenuItem name="3-2">老师列表</MenuItem>
                  <MenuItem name="3-3">老师统计</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>考勤管理
                  </template>
                  <MenuItem name="3-1">学生考勤</MenuItem>
                  <MenuItem name="3-2">老师考勤</MenuItem>
                </Submenu>
                 <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>活动管理
                  </template>
                  <MenuItem name="3-1">最新活动</MenuItem>
                  <MenuItem name="3-2">优惠大促</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <router-view></router-view>
              <!-- 变量的内容使用路由来加载-->
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "layout",
  components: {
    Breadcrumb
  }
};
</script>
