/*
 * @Description: 
 * @Author: Chengbotao
 * @Date: 2021-12-29 12:55:14
 * @LastEditors: Chengbotao
 * @FilePath: \bee-design-vue2x\src\components\button\index.ts
 */

import Button from "./button.vue";

Button.install = (Vue) => {
  Vue.component(Button.name, Button);
};

export default Button;