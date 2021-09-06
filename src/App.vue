<template>
  <ProjectPanel :config="config"></ProjectPanel>
</template>

<script lang="ts" setup>
import { ProjectPanel, useProjectConfig } from "$/index"
const config = useProjectConfig()
</script>

<style>
body,
html,
#app {
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
