<template>
    <div class="groupInfoBox">
        <div class="userInfoBox">
            <RoundAvatar :src="team.leader.avatar" />
            <div class="text" style="margin-left: 0.5rem">
                <span class="name">{{ team.leader.name }}</span>
                <span class="region">{{ team.leader.region }}</span>
            </div>
        </div>
        <TagBox style="margin-top: 0.625rem" :tags="team.leader.tags" />
        <img
            style="margin-top: 0.625rem; margin-bottom: 0.1875rem"
            class="picture"
            :src="team.picture"
            alt=""
        />
    </div>
</template>

<script>
import TagBox from "@/components/TagBox.vue";
import RoundAvatar from "@/components/RoundAvatar.vue";

export default {
    name: "GroupInfoBox",
    components: { TagBox, RoundAvatar },
    props: {
        team: Object
    },
};
</script>

<style lang="less" scoped>
.groupInfoBox {
    width: 10.625rem;
    height: max-content;
    border-radius: 0.3125rem;
    background: @light-color;

    border: 0.0625rem solid rgba(229, 229, 229, 1);

    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    padding: 0.5rem 0.625rem;
}

.picture {
    width: 9.375rem;
    box-sizing: border-box;
    border-radius: 0.125rem;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);

    object-fit: cover;
}
.userInfoBox {
    display: flex;
    justify-content: center;
    align-items: center;

    height: max-content;
}
.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.name {
    /** 文本1 */
    .font-size-style(2);
    font-weight: 700;
    color: @font-color2;
}
.region {
    /** 文本1 */
    .font-size-style(3);
    font-weight: 500;
    color: @font-color3;
}
</style>