<template>
  <div class="login">
    <div class="close">
      <i class="iconfont iconicon-test"></i>
    </div>
    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="username">
    <hm-input type="text" placeholder="请输入用户名" live="我爱你" v-model="username" :rules="/^1\d{4,10}$/" err-msg="输入的用户名格式错误"></hm-input>
    </div>
    <div class="password">
      <hm-input type="password" v-model="password"  :rules="/^\d{3,12}$/" err-msg="输入的密码格式错误"></hm-input>
    </div>
    <div class="login">
      <hm-button @click="login">登录</hm-button>
    </div>
  </div>
</template>

<script>
import HmInput from '../components/HmInput'
import HmButton from '../components/HmButton'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    HmInput,
    HmButton
  },
  methods: {
    login () {
      console.log('login')
      if (!this.username || !this.password) return
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res)
        if (res.data.statusCode === 401) {
          alert('用户名或密码错误')
        } else {
          alert('登录成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 20px;
  .close {
    i {
      font-size: 27px;
    }
  }
  .logo {
    text-align: center;
    i {
      font-size: 126px;
      color: #d81e06;
    }
  }
  .login{
    margin-top: 20px;
  }
}
</style>
