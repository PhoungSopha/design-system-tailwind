<script setup>
import * as Ui from './components/ui'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="theme-base">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="flex gap-2">
      <Ui.SdButton>My Button</Ui.SdButton>
      <Ui.SdButton disabled />
      <Ui.SdButton loading />
      <Ui.SdButton status="primary" />
      <Ui.SdButton status="success" />
      <Ui.SdButton status="warning" />
      <Ui.SdButton status="danger" />
    </div>

    <div class="flex gap-2 items-start mt-5">
      <Ui.SdButton size="sm">My Button</Ui.SdButton>
      <Ui.SdButton size="sm" disabled />
      <Ui.SdButton size="sm" loading />
      <Ui.SdButton size="sm" status="primary" />
      <Ui.SdButton size="sm" status="success" />
      <Ui.SdButton size="sm" status="warning" />
      <Ui.SdButton size="sm" status="danger" />
    </div>

    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>
