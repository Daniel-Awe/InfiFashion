<template>
  <div class="container">
    <TopBar class="topBar">
      <RoutePopButton style="margin-right: 12px" />
      <div class="title">历史记录</div>
      <div class="edit">编辑</div>
    </TopBar>
    <el-menu mode="horizontal" :default-active="menuActiveIndex.toString()" @select="handleSelect">
      <el-menu-item v-for="(item, key) in menuItems" :key="key" :index="key.toString()">
        <p>{{ item.title }}</p>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import RoutePopButton from '../RoutePopButton.vue'
import TopBar from '../TopBar.vue'
export default {
  components: { TopBar, RoutePopButton },
  name: 'HistoryPage',
  data() {
    return {
      menuActiveIndex: '0',
      menuItems: [
        {
          title: '服务',
          routeName: 'ServicePage'
        },
        {
          title: '帖子',
          routeName: undefined
        }
      ]
    }
  },
  methods: {
    handleSelect(index) {
      this.menuActiveIndex = index
      this.$router.push({ name: this.menuItems[index].routeName }, null, () => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: $--background-color-base;
  overflow-y: hidden;
}
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
  align-self: center;
}
.edit {
  margin-right: 16px;
  /** 文本1 */
  font-size: 12px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);

  width: 2rem;
}
.el-menu--horizontal {
  height: max-content;
}
.el-menu {
  width: 100%;
  background: $--color-white;

  @include flex-style(row);
  justify-content: left;
  .el-menu-item:first-child {
    margin-left: 1.875rem;
  }
  .el-menu-item {
    margin-left: 1.5rem;
    padding: 0;

    height: max-content;

    text-align: center;

    @include font-size-style(4);
    color: $--color-black;

    p {
      line-height: 100%;
      margin: 5px;
      font-weight: 400;
    }

    &.is-active {
      p {
        font-weight: 700;
      }
    }
  }
}
</style>
