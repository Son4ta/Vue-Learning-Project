/* eslint-disable */
<template>
  <div id="login">
  <el-card class="box-card">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="account">
        <label>账号</label>
        <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <label>密码</label>
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" :loading="loading">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <router-link to="regist">还没有账号？去注册</router-link>
      </el-form-item>
    </el-form>
  </el-card>
  </div>
</template>

<script>
import Link from '../../api/Link'
import Url from '../../api/url'
export default {
  name: 'Login',
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        // if (this.ruleForm.pass !== '') {
        //   this.$refs.ruleForm.validateField('account');
        // }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        // if (this.ruleForm.pass !== '') {
        //   this.$refs.ruleForm.validateField('pass');
        // }
        callback();
      }
    };
    return {
      loading: false,
      ruleForm: {
        account: '',
        pass: '',
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    // 表单提交后端
    submitForm(formName) {
      this.loading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data={
            name: this.ruleForm.account,
            pwd: this.ruleForm.pass,
          }
          console.log('submit!')
          //登录
          Link(Url.register, "get", {}, data).then((response)=>{
            console.log(response)
            // 登陆成功
            if(response.data.length != 0){
              this.$message.success('登陆成功')
              this.$router.push('/home')
            }
            else{
              this.$message.error('账号或密码错误')
            }
          })
        } 
        else {
          console.log('error submit!!');
          return false;
        }
      });
      this.loading = false
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  // 使注册完成的用户账号自动填写
  mounted() {
    if(this.$route.params.account){
      this.ruleForm.account = this.$route.params.account
    }
  },
}
</script>

<style scope>
@import url(../../styles/login_regist.css);
</style>