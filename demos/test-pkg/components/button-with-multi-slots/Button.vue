// Button.vue
<template>
    <button>
        <span class="pre-icon">
            <slot name="preIcon"></slot>
        </span>
        <span>我是按钮</span>
        <span class="post-icon">
            <slot name="postIcon"></slot>
        </span>
    </button>
</template>