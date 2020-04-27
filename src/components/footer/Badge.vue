<!-- Github 徽章 https://shields.io/ -->

<template>
    <div>
        <!-- license -->
        <a href="https://github.com/zy84338719/cv/blob/master/LICENSE" target="_blank">
            <img alt="GitHub" src="https://img.shields.io/github/license/zy84338719/cv">
        </a>
        <!-- 版本号 -->
        <a href="https://github.com/zy84338719/cv/" target="_blank">
            <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/zy84338719/cv">
        </a>
        <!-- stars -->
        <a href="https://github.com/zy84338719/cv/" target="_blank">
            <img alt="GitHub stars" src="https://img.shields.io/github/stars/zy84338719/cv">
        </a>
        <!-- fork -->
        <a href="https://github.com/manerfan/vuesume/fork" target="_blank">
            <img alt="GitHub forks" src="https://img.shields.io/github/forks/zy84338719/cv">
        </a>
        <!-- 下载 -->
        <a href="https://github.com/zy84338719/cv/releases" target="_blank">
            <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/zy84338719/cv/total">
        </a>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Badge extends Vue {
    }
</script>

<style scoped lang="scss">
    a {
        margin: 0.5em;
    }
</style>
