<template>
  <div class="container" style="padding-bottom: 1.25rem">
    <div class="top">
      <TopBar class="topBar">
        <RoutePopButton style="margin-right: 12px" :white="true" />
        <SearchBox class="searchBox" placeholder="输入关键词搜索">
          <div class="button">搜索</div>
        </SearchBox>
        <div class="placeholder"></div>
      </TopBar>
      <el-menu mode="horizontal" :default-active="menuActiveIndex.toString()" @select="handleSelect" style="margin-bottom: 0.625rem">
        <el-menu-item v-for="(item, key) in menuItems" :key="key" :index="key.toString()" @click="turnto(item.type)">
          <p>{{ item.title }}</p>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="gap" style="height: 100px"></div>
    <div class="view" v-loading="!designDatas">
      <DesignFormCard v-for="(item, key) in designDatas" :key="key" :detailsCard="item" style="margin-bottom: 0.625rem" />
    </div>
  </div>
</template>

<script>
import { getDesignDatas } from '@/api'
import TopBar from '../TopBar.vue'
import RoutePopButton from '../RoutePopButton.vue'
import SearchBox from '../SearchBox.vue'
import DesignFormCard from './DesignExtendAgencyPage/DesignFormCard.vue'
export default {
  name: 'DesignTeamsPage',
  components: { TopBar, RoutePopButton, SearchBox, DesignFormCard },
  data() {
    return {
      designDatas: null,
      menuType: 'costume',
      menuActiveIndex: '0',
      menuItems: [
        {
          title: '样衣设计',
          routeName: null,
          type: 'costume'
        },
        {
          title: '面料图案设计',
          routeName: null,
          type: 'pattern'
        },
        {
          title: '其他服饰设计',
          routeName: null,
          type: 'other'
        }
      ]
    }
  },
  created() {
    getDesignDatas(this.menuType).then(response => {
      this.designDatas = response.filter(value => value.type === this.menuType)
    })
  },
  methods: {
    handleSelect(index) {
      this.menuActiveIndex = index
      this.$router.push({ name: this.menuItems[index].routeName }, null, () => {})
    },
    // 筛选 “样衣” “面料图案” “其他服饰”
    // 将所有设计团队的信息数据放在一个库中，点击按钮时获取type值，并根据该值在库中筛选相应的数据并显示
    turnto(type) {
      this.designDatas = null
      this.menuType = type
      getDesignDatas().then(response => {
        this.designDatas = response.filter(value => value.type === this.menuType)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: $--background-color-base;
}
.top {
  position: fixed;
  top: 0;
  z-index: 1;
}
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: $--color-primary;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  .placeholder {
    width: 2rem;
  }
  .searchBox {
    width: 300px;
    border: 1px solid rgba(172, 142, 227, 1);
    .button {
      position: relative;
      left: 1px;
      //   position：用于右侧贴合
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 60px;
      border: none;
      background-color: rgba(172, 142, 227, 1);
      /** 文本1 */
      font-size: 12px;
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
    }
  }
}
.el-menu--horizontal {
  height: max-content;
}
.el-menu {
  width: 100%;
  background: $--color-white;
  padding-top: 0.1875rem;
  @include flex-style(row);
  justify-content: space-between;
  .el-menu-item {
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
.gap {
  background-color: $--background-color-base;
}
.view {
  width: 100%;
  min-height: 100%;
  background-color: $--background-color-base;
}
</style>
