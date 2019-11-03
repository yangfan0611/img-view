<template>
  <div id="app">
    <div class="index-header">
      <div class="header-left"></div>
      <div class="header-nav">
        <ul class="nav-tab">
          <li class="nav-item" v-for="(item, index) in navList" :key="index" :class="{active: item.url == ins}">
            <router-link :to="item.url">
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="block"><el-avatar :size="25" :src="circleUrl"></el-avatar></div>
        <span class="header-name">辉老狗</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name: '首页',
          url: '/',
          id: 1
        },
        {
          name: '关于',
          url: '/about',
          id: 2
        },
        {
          name: '内容',
          url: '/info',
          id: 3
        },
        {
          name: '我的',
          url: '/user',
          id: 4
        },
        {
          name: '详情',
          url: '/dd',
          id: 5
        }
      ],
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      ins: ''
    }
  },
  methods: {
    rePath (url) {
      let arr = url.split('/')
      this.ins = '/' + arr[1]
    }
  },
  created () {
  },
  watch: {
    $route (to, from) {
      this.rePath(to.path)
      // this.ins = to.path
    }
  }
}
</script>

<style lang="scss">
ul {
  padding: 0;
  li {
    list-style: none;
  }
}
a {
  text-decoration: none;
}
.index-header {
  width: 100%;
  height: 60px;
  background-color: #e3e3e3;
  display: flex;
  .header-left {
    width: 250px;
    border-right: 1px solid #333;
  }
  .header-nav {
    flex: 1;
    .nav-tab {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .nav-item {
        a {
          span {
            color: #333;
          }
        }
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 1px;
          height: 16px;
          margin-top: -8px;
          background-color: #ccc;
          position: absolute;
          left: -48px;
          top: 50%;
        }
        &.active {
          a {
            span {
              color: #ff3c54;
            }
          }
        }
      }
    }
  }
  .header-right {
    width: 180px;
    border-left: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-name {
      margin-left: 7px;
    }
  }
}
</style>
