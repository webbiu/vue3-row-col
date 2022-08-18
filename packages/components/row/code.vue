<template>
    <div class="web-biu-row" :class="[align ? `web-biu-align-${align}` : '', ui]" :style="styleVal">
        <slot></slot>
    </div>
</template>

<script>
export default {name: 'WebBiuRow'}
</script>

<script setup>
import { ref, watch } from "vue";
import { setRowSpace } from "vue-utils-plus"
const props = defineProps({
    ui: {
        type: String,
        value: ''
    },
    //栅格间隔
    spacing: {
        type: [Number, String],
        default: 0
    },
    //类型，12、24
    col: {
        type: [Number, String],
        default: 24
    },
    //对齐方向, // start | center | end | space-between | space-around
    align: {
        type: String,
        default: ''
    }
})

//变量
const styleVal = ref('');
setStyleValue(props.spacing)

//监听
watch(() => [
    props.spacing
], ([spacing]) => {
    setStyleValue(spacing)
})

//处理栅格间隔
function setStyleValue(spacing) {
    styleVal.value = setRowSpace(spacing,'margin')
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
