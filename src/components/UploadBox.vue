<template>
    <div>
        <slot name="head"></slot>
        <div></div>
        <slot name="foot"></slot>
        <input type="file" hidden />
    </div>
</template>

<script>
export default {
    name: "UploadBox",
    props: {},
};
</script>

<style>
</style>