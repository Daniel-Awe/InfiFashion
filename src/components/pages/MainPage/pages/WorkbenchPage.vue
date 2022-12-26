<template>
  <div class="container">
    <TopBar class="topbar"><div class="title">工作台</div></TopBar>
    <div class="view">
      <div class="colorBoard"></div>
      <div class="viewContent">
        <div class="incomeInfoContainer">
          <!-- balance:余额 -->
          <div class="balanceContainer">
            <div class="label">账户余额(元)</div>
            <div class="balance">￥{{ balance.toFixed(2) }}</div>
          </div>
          <div class="incomeContainer">
            <div class="thisMonthIncome">
              <div class="label">本月收入</div>
              <div class="incomeNumber">￥{{ thisMonthIncome.toFixed(2) }}</div>
            </div>
            <div class="line"></div>
            <div class="lastMonthIncome">
              <div class="label">上月收入</div>
              <div class="incomeNumber">￥{{ lastMonthIncome.toFixed(2) }}</div>
            </div>
          </div>
        </div>
        <div class="menuContainer">
          <div class="menu">
            <div class="billInfo">
              <img
                :src="require('@/assets/svg/wallet_line.svg')"
                alt=""
                class="menuIcon"
              />
              <div>账单明细</div>
            </div>
            <div class="line" style="height: 28px"></div>
            <div class="withdraw">
              <img
                :src="require('@/assets/svg/coin_line.svg')"
                alt=""
                class="menuIcon"
              />
              <div>去提现</div>
            </div>
          </div>
          <div class="message">每月1日结算上月收入，建议2日再进行提现</div>
        </div>
        <InfoCard
          class="infoCard"
          title="数据统计"
          :infoItems="dataStatisticsInfoItems"
        />
        <InfoCard
          class="infoCard"
          title="活动和推广"
          :infoItems="activityInfoItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import InfoCard from "./WorkbenchPage/InfoCard.vue";
export default {
  name: "WorkbenchPage",
  components: { TopBar, InfoCard },
  data() {
    return {
      balance: 10000,
      thisMonthIncome: 2000,
      lastMonthIncome: 8000,
      dataStatisticsInfoItems: [
        { title: "点击数", value: 23 },
        { title: "实付人数", value: 1 },
        { title: "付款成交金额（元）", value: 2000.0 },
        { title: "付款订单数（笔）", value: 1 },
      ],
      activityInfoItems: [
        {
          title: "发布文章数（篇）",
          value: 2,
        },
        {
          title: "文章阅读量",
          value: 100,
        },
        {
          title: "点赞数",
          value: 3999,
        },
        {
          title: "评论数",
          value: 489,
        },
        {
          title: "收藏数",
          value: 56,
        },
        {
          title: "转发数",
          value: 99,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.test {
  height: 50px;
  width: 50px;
  border: 1px solid red;
}
.container {
  height: 100%;
  width: 100%;
}
.topbar {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.title {
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(249, 249, 249, 1);
}
.view {
  overflow-y: scroll;
}
.colorBoard {
  background-color: $--color-primary;
  //   background-color: black;
  height: 16.5rem;
  width: 100%;
  //   position: relative;
  //   top: 0px;
}
.viewContent {
  position: relative;
  top: -11.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.incomeInfoContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: 700;
  color: rgba(249, 249, 249, 1);
}
.balanceContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.incomeContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
}
.line {
  width: 0px;
  height: 40px;
  border-left: 1px solid rgba(166, 166, 166, 1);
}
.thisMonthIncome,
.lastMonthIncome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.incomeNumber {
  font-weight: 700;
}
.incomeNumber,
.balance {
  margin-top: 5px;
}
.menuContainer {
  margin-top: 20px;
  padding: 15px 0 10px 0;
  width: 350px;
  opacity: 1;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.billInfo,
.withdraw {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
}
.menuIcon {
  margin-right: 12px;
}
.message {
  margin-top: 20px;
  width: 100%;
  opacity: 1;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: rgba(166, 166, 166, 1);
}
.infoCard {
  margin-top: 15px;
}
</style>