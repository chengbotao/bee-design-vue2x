/*
 * @Description: 
 * @Author: Chengbotao
 * @Date: 2021-12-29 15:56:50
 * @LastEditors: Chengbotao
 * @FilePath: \bee-design-vue2x\src\shims-component.d.ts
 */

import _Vue from 'vue';

declare module 'vue/types/vue' {
  interface VueConstructor {
    install: (Vue: typeof _Vue) => void
  }
}