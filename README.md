# vue3-row-col  还在 开发阶段

vue3的栅栏组件


```shell
yarn add @webbiu/vue3-row-col

# or

npm i @webbiu/vue3-row-col
```


## 按需引入

```html
<template>
    <div>
        <WebBiuRow spacing="20">
            <WebBiuCol span="12">111</WebBiuCol>
            <WebBiuCol span="12">2222</WebBiuCol>
        </WebBiuRow>
    </div>
</template>

<script setup>
    import { WebBiuRow, WebBiuCol } from "@webbiu/vue3-row-col";
    import "@webbiu/vue3-row-col/dist/style.css";
</script>
```


## 全局引入

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import WebBiuVue3RowCol from "@webbiu/vue3-row-col";
import "@webbiu/vue3-row-col/dist/style.css"

const app = createApp(App)

app.use(WebBiuVue3RowCol)

app.mount('#app')
```



## WebBiuRow 参数说明

| 参数      | 类型              | 可选值                                                 | 默认值 | 说明       |
|---------|-----------------|-----------------------------------------------------|-----|----------|
| ui      | String          | -                                                   | -   | 自定义class |
| spacing | String / Number | -                                                   | 0   | 栅栏间隔     |
| col     | String / Number | 12 / 24                                             | 24  | 栅栏类型     |
| align   | String          | start / center / end / space-between / space-around | -   | 对齐方向     |



## WebBiuCol 参数说明

| 参数   | 类型              | 可选值         | 默认值 | 说明       |
|------|-----------------|-------------|-----|----------|
| ui   | String          | -           | -   | 自定义class |
| span | String / Number | 1-12 / 1-24 | 24  | 栅格占据的列数  |


`WebBiuCol` 的 `span` 说明： `WebBiuRow` 的 `col` 为 `24` 时，使用 `1-24`， 为 `12` 时，使用 `1-12`
