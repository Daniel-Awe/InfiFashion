<template>
    <div>
        <div class="files">
            <span class="item" v-for="(item, key) in files" :key="key">
                <slot name="fileBox" :file="item" />
            </span>
            <span class="item" @click="handleAddBoxClick">
                <slot name="addBox" />
            </span>
        </div>
        <input ref="input" @change="handleInputChange" type="file" hidden />
    </div>
</template>

<script>
export default {
    name: "UploadBox",
    data() {
        return {
            files: [],
        };
    },
    methods: {
        addFile(file) {
            file.url = URL.createObjectURL(file);
            this.files.push(file);
            console.log(file);
        },
        addFiles(files) {
            for (const file of files) {
                this.addFile(file);
            }
        },
        removeFile(file) {
            const index = this.files.indexOf(file);
            if (index >= 0) this.files.splice(index, 1);
            URL.revokeObjectURL(file.url);
        },
        removeFiles(files) {
            for (const file of files) {
                this.removeFile(file);
            }
        },
        handleAddBoxClick() {
            const input = this.$refs.input;
            input.click();
        },
        handleInputChange(ev) {
            for (const file of ev.target.files) {
                this.addFile(file);
            }
            ev.target.value = "";
        },
    },
    props: {},
};
</script>

<style lang="scss" scoped>
.files {
    display: flex;
    flex-direction: row;
    gap: 0.9375rem;
    flex-wrap: wrap;
    justify-content: center;

    .item {
        width: max-content;
        height: max-content;
    }
}
</style>