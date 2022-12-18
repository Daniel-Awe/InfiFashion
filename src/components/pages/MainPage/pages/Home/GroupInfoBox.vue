<template>
    <div class="groupInfoBox">
        <UserInfoBox
            v-if="teamInfo && teamInfo.leader"
            :avatar="teamInfo.leader.avatar"
            :name="teamInfo.leader.name"
            :region="teamInfo.leader.region"
        />
        <TagBox
            v-if="teamInfo && teamInfo.leader"
            :datas="teamInfo.leader.tags"
        />
    </div>
</template>

<script>
import UserInfoBox from "@/components/UserInfoBox.vue";
import TagBox from "@/components/TagBox.vue";
import { getTeamInfo } from "@/api";

export default {
    name: "GroupInfoBox",
    components: { UserInfoBox, TagBox },
    data() {
        return {
            teamInfo: undefined,
        };
    },
    methods: {
        async updateTeamInfo() {
            const response = await getTeamInfo(this.teamId);
            if (response) this.teamInfo = response;
            else this.teamInfo = undefined;
        },
    },
    props: {
        teamId: String,
    },
    watch: {
        teamId() {
            this.updateTeamInfo();
        },
    },
    async created() {
        this.updateTeamInfo();
    },
};
</script>

<style lang="less" scoped>
.groupInfoBox {
    width: 10.625rem;
    height: 12.5rem;
    border-radius: 0.3125rem;
    background: @light-color;

    border: 0.0625rem solid rgba(229, 229, 229, 1);

    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    padding: 0.5rem 0.625rem 0.8125rem 0.625rem;
}
</style>