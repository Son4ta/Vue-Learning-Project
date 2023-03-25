/* eslint-disable */
<template>
  <div id="login">
  <!-- 卡片 -->
  <el-card class="box-card">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <!-- 表单 -->
      <el-form-item prop="account">
        <label>注册账号</label>
        <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <label>密码</label>
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <div id="strength" v-if="this.ruleForm.pass">
        <span>密码强度</span>
        <el-progress :percentage="strength.percentage" :status="strength.status"></el-progress>
      </div>
      <el-form-item prop="checkPass">
        <label>确认密码</label>
        <el-input type="password" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <!-- 按钮 -->
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <router-link to="login">已有账号？去登陆</router-link>
      </el-form-item>
    </el-form>
  </el-card>
  </div>
</template>

<script>
import * as Ck from '../../util/verification'
import Link from '../../api/Link'
import Url from '../../api/url'

export default {
  name: 'Regist',
  data() {
    // 表单检验
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        console.log
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          let data={
            name: this.ruleForm.account,
            pwd: this.ruleForm.pass,
          }
          Link(Url.register, 'POST', data).then((response)=>{
            console.log(response)
            this.$message({
              showClose: true,
              message: '注册成功，前往登录页面...',
              type: 'success'
            })
          })
          setTimeout(()=>{
            this.$router.push({
              name: 'login',
              params: {
                account: this.ruleForm.account,
              }
            })
          }, 2000);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    // 密码强度
    strength: function(){
      if(Ck.CkStrength_mid(this.ruleForm.pass)){
        return {percentage:66 , status:'warning'}
      }
      else if(Ck.CkStrength_high(this.ruleForm.pass)){
        return {percentage:100 , status:'success'}
      }
      else{
        return {percentage:33 , status:'exception'}
      }
    }
  }
}
</script>

<style scope>
/* 与login共享一个css */
@import url(../../styles/login_regist.css);
</style>