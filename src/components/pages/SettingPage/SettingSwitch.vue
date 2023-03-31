<template>
  <div>
    <div class="Switch" style="margin-top: 0">
      <div class="setting">{{ points.setting }}</div>
      <div class="right" @click="inputValue">
        <el-switch v-model="Value"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingSwitch',
  props: {
    points: Object
  },
  data() {
    return {
      Value: this.points.value
    }
  },
  methods: {
    inputValue() {
      this.$emit('update-value', this.points.id, this.Value)
    }
  }
}
</script>

<style lang="scss" scoped>
.Switch {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid $--border-color-base;
  box-sizing: border-box;
  padding: 12px 16px 12px 20px;
  .setting {
    height: 20px;
    font-size: 14px;
    text-align: left;
    font-weight: 500;
  }
}
</style>
