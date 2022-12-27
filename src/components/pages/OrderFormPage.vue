<template>
  <div class="container">
    <TopBar class="topBar">
      <RoutePopButton style="margin-right: 12px" />
      <SearchBox class="searchBox" placeholder="搜索订单号/订单名称">
        <div class="button">搜索</div>
      </SearchBox>
      <div class="placeholder"></div>
    </TopBar>
    <el-menu
      mode="horizontal"
      :default-active="menuActiveIndex.toString()"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, key) in menuItems"
        :key="key"
        :index="key.toString()"
      >
        <p>{{ item.title }}</p>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div class="view">
      <OrderFormCard
        v-for="(item, index) in orders"
        :key="index"
        :order="item"
      />
    </div>
  </div>
</template>

<script>
import RoutePopButton from "../RoutePopButton.vue";
import SearchBox from "../SearchBox.vue";
import TopBar from "../TopBar.vue";
import OrderFormCard from "./OrderFormPage/OrderFormCard.vue";
import { getOrdersDatas } from "@/api/index.js";
export default {
  components: { TopBar, RoutePopButton, SearchBox, OrderFormCard },
  name: "OrderFormPage",
  data() {
    return {
      menuActiveIndex: "0",
      menuItems: [
        {
          title: "服务",
          routeName: "ServicePage",
        },
        {
          title: "帖子",
          routeName: undefined,
        },
      ],
      orders: null,
    };
  },
  created() {
    getOrdersDatas().then((response) => {
      this.orders = response;
    });
  },
  methods: {
    handleSelect(index) {
      this.menuActiveIndex = index;
      //   this.$router.push(
      //     { name: this.menuItems[index].routeName },
      //     null,
      //     () => {}
      //   );
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100% !important;
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
.placeholder {
  width: 2rem;
}
.searchBox {
  width: 300px;
  .button {
    position: relative;
    left: 1px;
    //   position：用于右侧贴合
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 60px;
    background-color: $--color-primary;
    /** 文本1 */
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
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
  .el-menu-item {
    margin-left: 23px;
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
.view {
  height: 100%;
  background-color: $--background-color-base !important;
}
</style>