<template>
  <div class="detail">
    <button class="btn" @click="notice">
      <span>消息</span>
    </button>
    <div class="new-btn">
      <el-button type="primary">主要按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    notice () {
      // var notife = new Notification()
      // notife('标题', {
      //   body: '通知内容'
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  .btn {
    width: 80px;
    height: 30px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #168aff;
    cursor: pointer;
    span {
      color: #fff;
      font-size: 14px;
    }
    &:active {
      opacity: 0.8;
    }
  }
}
</style>
