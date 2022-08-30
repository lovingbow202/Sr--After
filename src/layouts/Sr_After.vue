<template>

  <div id="app">
    <h1>{{ msg }}</h1>
    <Sr_After_NO2 :posts="posts" @textChange="msg = $event" />
    <Sr_After_NO2 :posts="posts" @textChange="msg = $event" />

  </div>


</template>
<script>
import { defineComponent, ref } from 'vue'
import Sr_After_NO2 from 'components/Sr_After_NO2.vue'

export default defineComponent({
  name: 'Sr_After',
  components: { Sr_After_NO2 },
  setup() {
    const posts = ref(1)
    const msg = ref(1)
    return { posts, msg }
  }
})
</script>