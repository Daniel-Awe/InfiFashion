<template>
    <div class="userInfoBox">
        <img class="avatar" :src="avatar" alt="" />
        <div class="text" style="margin-left: 0.5rem">
            <span class="name">{{ name }}</span>
            <span class="region">{{ region }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserInfoBox",
    props: {
        avatar: String,
        name: String,
        region: String,
    },
};
</script>

<style lang="less" scoped>
.userInfoBox {
    display: flex;
    justify-content: center;
    align-items: center;

    height: max-content;
}
.avatar {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    object-fit: cover;
}
.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.name {
    /** 文本1 */
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: @font-color2;
    text-align: left;
    vertical-align: middle;
}
.region {
    /** 文本1 */
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0px;
    color: @font-color3;
    text-align: left;
    vertical-align: middle;
}
</style>