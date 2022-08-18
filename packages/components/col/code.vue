<template>
    <div class="web-biu-col" :class="[ui, colClass]" :style="styleVal">
        <slot></slot>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref, watch } from "vue"
import { setRowSpace, toInt, getObjValue } from "vue-utils-plus"
const props = defineProps({
    ui: {
        type: String,
        default: ''
    },
    //栅格占据的列数,1-24
    span: {
        type: [Number, String],
        default: 24
    }
})

//变量
const parentSpacing = ref(0);
const parentCol = ref(0);
const styleVal = ref('');
const colClass = ref('');

//获取父组件实例
const parent = getObjValue(getCurrentInstance()?.parent);
const parentType = getObjValue(parent?.type);
const parentProps = getObjValue(parent?.props);
if (parentType?.name === 'WebBiuRow') {
    //处理类型
    const spacing = toInt(parentProps?.spacing);
    const cols = toInt(parentProps?.col);
    const spans = toInt(props?.span);
    //改变变量值
    parentSpacing.value = spacing;
    parentCol.value = cols;
    //调用方法函数
    setColVal(cols, spans);
    setStyleValue(spacing);
}

//监听
watch(() => [
    props.span
], ([span]) => {
    setColVal(parentSpacing.value, toInt(span));
    setStyleValue(parentCol.value);
})

//处理样式
function setColVal(col = 0, span = 0) {
    if (col === 24) {
        colClass.value = `web-biu-col-lg-${span}`;
    } else {
        colClass.value = `web-biu-col-${span}`;
    }
}

//处理栅格间隔
function setStyleValue(spacing) {
    styleVal.value = setRowSpace(spacing,'padding')
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
