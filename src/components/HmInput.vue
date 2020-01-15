<template>
  <div class="input_box">
    <input :type="type" :class="[status,'hm-input']" :placeholder="placeholder" :value="value" @input="HdInput">
    <span class="tips" v-show="showTips">{{errMsg}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  computed: {
    showTips () {
      return this.status === 'error' && this.errMsg
    }
  },
  props: {
    type: {
      type: String,
      defaut: 'text'
    },
    placeholder: {
      type: String,
      defaut: ''
    },
    value: {
      type: String,
      defaut: ''
    },
    rules: {
      type: RegExp
    },
    errMsg: {
      type: String
    }
  },
  methods: {
    HdInput (e) {
      this.$emit('input', e.target.value)
      const { value } = e.target
      if (this.rules) {
        if (this.rules.test(value)) {
          this.status = 'success'
        } else {
          this.status = 'error'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input_box{
  position: relative;
  padding-bottom: 20px;
  .hm-input{
    width: 100%;
    height: 38px;
    border-bottom: 1px solid #666;
    background-color:transparent;
    font-size: 18px;
    &.error{
      border-color: red;
    }
    &.success{
      border-color: green;
    }
  }
   .tips{
    color: red;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

</style>
