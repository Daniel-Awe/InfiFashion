<template>
  <div class="container" style="padding-bottom: 1.25rem">
    <div class="top">
      <TopBar class="topBar">
        <RoutePopButton style="margin-right: 12px" />
        <div class="title">我的需求</div>
        <div class="edit"></div>
      </TopBar>
      <el-menu mode="horizontal" :default-active="menuActiveIndex.toString()" @select="handleSelect" style="margin-bottom: 0.625rem">
        <el-menu-item v-for="(item, key) in menuItems" :key="key" :index="key.toString()" @click="turnto(item.title)">
          <p>{{ item.title }}</p>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="gap" style="height: 90px"></div>
    <!-- 感觉有个bug, .gap与.view之间多出来一个高为10px的间隔 -->
    <div class="view" v-loading="!demandsDatas">
      <DemandCard v-for="(item, index) in demandsDatas" :key="index" :demand="item" :menustate="menuState" />
    </div>
  </div>
</template>

<script>
import { getDemandsDatas } from '@/api/index.js'
import TopBar from '../TopBar.vue'
import RoutePopButton from '../RoutePopButton.vue'
import DemandCard from './DemandPage/DemandCard.vue'
export default {
  name: 'DemandPage',
  components: { TopBar, RoutePopButton, DemandCard },
  data() {
    return {
      menuState: '全部',
      menuActiveIndex: '0',
      menuItems: [
        {
          title: '全部',
          routeName: null
        },
        {
          title: '待公开',
          routeName: null
        },
        {
          title: '匹配中',
          routeName: null
        },
        {
          title: '选标中',
          routeName: null
        },
        {
          title: '已结束',
          routeName: null
        }
      ],
      demandsDatas: null
    }
  },
  methods: {
    turnto(state) {
      this.menuState = state
      this.demandsDatas = null

      if (this.menuState === '全部') {
        getDemandsDatas().then(response => {
          this.demandsDatas = response
        })
      } else {
        getDemandsDatas().then(response => {
          this.demandsDatas = response.filter(value => value.state === this.menuState)
        })
      }
    }
  },
  created() {
    getDemandsDatas().then(response => {
      this.demandsDatas = response
    })
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
  width: 100%;
  z-index: 1;
}

.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
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
.gap {
  background-color: $--background-color-base;
}
.view {
  width: 100%;
  min-height: 100%;
  background-color: $--background-color-base !important;
}
</style>
