<script setup lang="ts">
import { useUserStore } from '@/store'
const userStore = useUserStore()
</script>

<template>
  <AppPage :show-footer="true" min-w-375>
    <div flex-1 min-w-375>
      <n-card rounded-10>
        <div flex items-center>
          <img rounded-full width="60" :src="userStore.avatar">
          <div ml-20>
            <p text-16>
              Hello, {{ userStore.name }} ！
            </p>
            <n-gradient-text
              mt-5
              text-12
              op-60
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >
              他日若遂凌云志，敢笑黄巢不丈夫~
            </n-gradient-text>
          </div>
        </div>
      </n-card>
    </div>
  </AppPage>
</template>
