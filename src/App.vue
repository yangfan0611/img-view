<template>
  <div id="app">
    <div id="nav">
      <el-container class="content">
        <el-aside width="200px">
          <div class="user-info">
            <dl>
              <dt>
                <img src="../src/assets/img-icon/school.jpg" alt="">
              </dt>
              <p>
                <span>中国科学技术大学</span>
              </p>
            </dl>
          </div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <router-link to="/" slot="title">
                <span>首页</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <router-link to="/about" slot="title">
                <span>关于</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <router-link to="/info" slot="title">
                <span>信息</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <router-link slot="title" to="/user">
                <span>导航四</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">导航五</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">导航六</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span slot="title">导航七</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>关于我的</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="block"><el-avatar :size="25" :src="circleUrl"></el-avatar></div>
          <span class="user-name">辉老狗</span>
          </el-header>
          <el-container>
            <el-main>
              <router-view/>
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
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
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
#nav {
  height: 100vh;
  /deep/ .user-info {
    // width: 100%;
    height: 150px;
    background-color: rgb(84, 92, 100);
    dl {
      text-align: center;
      dt {
        display: flex;
        justify-content: center;
        img {
          width: 80px;
          height: 80px;
        }
      }
      p {
        text-align: center;
      }
    }
  }
  /deep/ .el-header {
    background-color: #e3e3e3;
  }
  .content {
    height: 100%;
  }
  /deep/ .el-container {
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
      cursor: pointer;
      .block {
        display: inline-block;
        span {
          vertical-align: middle;
        }
      }
      .user-name {
        margin-left: 6px;
      }
    }
    .el-main {
      padding: 0;
    }
    .el-aside {
      background-color: rgb(84, 92, 100);
      .el-menu {
        height: 100%;
        .el-menu-item {
          a {
            text-decoration: none;
            span {
              font-size: 14px;
              color: rgb(255, 255, 255);
            }
          }
          &.is-active {
            a span {
              color: rgb(255, 208, 75);
            }
          }
        }
      }
    }
    .el-footer {
      background-color: #cdcdcd;
    }
  }
  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
