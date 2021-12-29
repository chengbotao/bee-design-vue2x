<!--
 * @Description: 
 * @Author: Chengbotao
 * @Date: 2021-12-29 15:54:01
 * @LastEditors: Chengbotao
 * @FilePath: \bee-design-vue2x\src\components\button\button.vue
-->
<template>
  <button
    v-if="!isLink"
    v-bind="$attrs"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
    key="btn"
  >
    <!-- 
      @slot The text on the button
    -->
    <slot></slot>
  </button>
  <a
    v-else
    v-bind="$attrs"
    :class="classes"
    @click="handleClick"
    :href="href"
    key="btn-a"
  >
    <!-- 
      @slot The text on the button
    -->
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Component, Prop } from "vue-property-decorator";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

@Component<BeeButton>({
  name: "bee-button",
  inheritAttrs: false,
  computed: {
    classes() {
      return classNames("bee-button", this.className, {
        [`bee-button-${this.btnType}`]: this.btnType,
        [`bee-button-${this.size}`]: this.size,
        disabled: this.btnType === ButtonType.Link && this.disabled,
      });
    },
    isLink() {
      return this.btnType === ButtonType.Link && !!this.href;
    },
  },
})
export default class BeeButton extends Vue {
  /** 是否禁用 */
  @Prop({ type: Boolean, default: false })
  disabled!: boolean;
  /** 自定义 css 类名 */
  @Prop({ type: String, default: "" })
  className!: string;
  /** 按钮大小 */
  @Prop({ type: String as PropType<ButtonSize>, default: ButtonSize.Large })
  size!: string;
  /** 按钮的类型 */
  @Prop({ type: String as PropType<ButtonType>, default: ButtonType.Default })
  btnType!: string;
  /** href URL 只在 btnType 类型为 link 时 生效 */
  @Prop({ type: String, default: "#" })
  href!: string;

  handleClick(event: Event): void {
    /**
     * Click event.
     *
     * @event click
     * @type {Event}
     */
    this.$emit("click", event);
  }
}
</script>

<style lang="scss" scoped>
</style>