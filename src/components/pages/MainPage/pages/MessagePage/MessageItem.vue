<template>
  <div class="box row" @click="handleClick">
    <img style="margin-left: 1rem; margin-right: 0.75rem" :style="tryGet(data, ['other()', 'avatar']) ? 'border-radius: 50%' : ''" class="avatar" :src="tryGet(data, ['other()', 'avatar']) || tryGet(data, ['other()', 'icon', type])" alt="" />
    <div style="flex-grow: 1; margin-right: 1.125rem" class="column">
      <div class="row" style="width: 100%; justify-content: space-between">
        <div class="name">{{ tryGet(data, ['other()', 'name']) }}</div>
        <div class="date">
          {{ tryGet(data, ['newest()', 'date', 'toLocaleDateString()']) }}
        </div>
      </div>
      <div class="message" style="align-self: flex-start">
        {{ tryGet(data, ['newest()', 'text']) }}
      </div>
    </div>
  </div>
</template>

<script>
import { helper } from '@/mixin'
import { mapGetters } from 'vuex'
export default {
  name: 'MessageItem',
  props: {
    data: Object
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'SendMessagePage',
        params: {
          id: this.data.other().id
        }
      })
    }
  },
  mixins: [helper],
  computed: {
    ...mapGetters('loginInfo', ['type'])
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: $--color-white;
  min-height: 3.5rem;

  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
  .name {
    @include font-size-style(3);
    font-weight: 500;
    color: $--color-black;
  }
  .date {
    @include font-size-style(5);
    font-weight: 400;
    color: $--color-text-secondary;
  }
  .message {
    @include font-size-style(4);
    font-weight: 400;
    width: 18rem;
    min-height: 1.25rem;
    max-height: 1.875rem;
    color: $--color-text-secondary;
  }
}
.row {
  @include flex-style(row);
}
.column {
  @include flex-style(column);
}
</style>
