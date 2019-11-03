<template>
  <div class="home">
    <div class="index-view">
      <div class="index-content">
        <div class="index-box">
          <div class="index-list">
            <div class="index-des">
              <span>患者列表</span>
            </div>
            <ul class="list-content">
              <li class="list-main" v-for="(item, index) in userList" :key="index" :class="{active: index == key}" @click="toView(index)">
                <div class="list-cont">
                  <img :src="item.head" alt="">
                  <span class="name">{{ item.author }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="index-main">
            <div class="main-detail">
              <div class="main-top">
                <span>患者详细信息</span>
              </div>
              <div class="main-cont">
                <ul class="info">
                  <li>姓&nbsp;&nbsp;&nbsp;名：<span>辉老狗</span></li>
                  <li>性    别：<span>男</span></li>
                  <li>就医日期: <span>2019-03-14</span></li>
                </ul>
                <ul class="info">
                  <li>年    龄：<span>24岁</span></li>
                  <li>病    室：<span>605</span></li>
                  <li>床    号: <span>14</span></li>
                </ul>
                <ul class="info">
                  <li>主治医生: <span>张张</span></li>
                  <li>联系方式：<span>1648613565</span></li>
                  <li>就医日期: <span>2019-03-14</span></li>
                </ul>
                <ul class="info">
                  <li>家庭住址：<span>安徽省合肥市合肥市合肥学院</span></li>
                </ul>
                <ul class="info">
                  <li>患病详情：<span>安徽省合肥市合肥市合肥学院</span></li>
                </ul>
                <ul class="info">
                  <li>CT照片：<span>已拍照</span></li>
                </ul>
              </div>
              <div class="main-btn">
                <button @click="toDetail">
                  <!-- <router-link to="/info"> -->
                  <span>查看CT</span>
                  <!-- </router-link> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      menuList: [
        {
          name: '首页',
          url: '/',
          icon: 'el-icon-location',
          id: 1
        },
        {
          name: '关于',
          url: 'about',
          icon: 'el-icon-menu',
          id: 2
        },
        {
          name: '内容',
          url: '/',
          icon: 'el-icon-setting',
          id: 3
        },
        {
          name: '我的',
          url: '/',
          icon: 'el-icon-location',
          id: 4
        },
        {
          name: '详情',
          url: '/',
          icon: 'el-icon-location',
          id: 5
        }
      ],
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      userList: [
        // {
        //   id: 0,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 1,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 2,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 3,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 4,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 5,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 6,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // },
        // {
        //   id: 7,
        //   name: '狗哥',
        //   age: '24',
        //   head: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        // }
      ],
      key: null
    }
  },
  methods: {
    getPatient () {
      axios.get('/getData').then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.userList = res.data
        }
      })
    },
    toDetail () {
      this.$router.push({
        path: '/info'
      })
    },
    toView (index) {
      this.key = index
    }
  },
  created () {
    this.getPatient()
  }
}
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}
.index-view {
  height: 100vh;
  .index-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    .index-box {
      display: flex;
      flex: 1;
      .index-list {
        width: 250px;
        height: 100%;
        background: rgb(84, 92, 100);
        .index-des {
          text-align: center;
          border-bottom: 1px solid #cecece;
          span {
            font-size: 14px;
            color: #333;
          }
        }
        .list-content {
          width: 100%;
          padding: 0;
          margin: 0;
          .list-main {
            list-style: none;
            padding: 10px 15px;
            border-bottom: 1px solid #cecece;
            cursor: pointer;
            .list-cont {
              display: flex;
              align-items: center;
              width: 80%;
              margin: 0 auto;
              img {
                width: 25px;
                height: 25px;
                border-radius: 50%;
              }
              span {
                font-size: 13px;
                color: #cecece;
                margin-left: 5px;
              }
            }
            &:hover {
              background-color: #cecece;
              span {
                color: #333;
              }
            }
            &.active {
              background-color: #cecece;
              span {
                color: #333;
              }
            }
          }
        }
      }
      .index-main {
        flex: 1;
        .main-detail {
          .main-top {
            text-align: center;
            height: 45px;
            line-height: 45px;
            span {
              color: #333;
              font-size: 16px;
            }
          }
          .main-cont {
            border-top: 1px solid #333;
            .info {
              display: flex;
              li {
                flex: 1;
              }
            }
          }
          .main-btn {
            button {
              background-color: #409eff;
              border-color: #409eff;
              color: #fff;
              border: none;
              transition: 0.1s;
              cursor: pointer;
              outline: none;
              padding: 12px 33px;
              border-radius: 4px;
              span {
                font-weight: 500;
                font-size: 14px;
              }
              &:hover {
                background-color: #409eff;
                opacity: 0.8;
              }
              &:active {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
