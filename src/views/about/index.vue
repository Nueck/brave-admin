<script setup lang="ts">
</script>

<template>
  <AppPage :show-footer="true" min-w-375>
    <div flex-1 min-w-375>
      <n-card rounded-10>
        <div flex items-center>
          <div ml-20>
            <p text-16>
              本站作者是Nueck
            </p>
            <n-gradient-text
              mt-5
              text-12
              op-60
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >
              纽扣
            </n-gradient-text>
          </div>
        </div>
      </n-card>
    </div>
  </AppPage>
</template>
