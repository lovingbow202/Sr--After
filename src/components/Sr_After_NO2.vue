<template>
    <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 300px">
            <q-input outlined :name="posts" v-model="text">
            </q-input>
        </div>
    </div>
    <q-btn label="+1" color="primary" @click="handler($emit('textChange', text + 1))"></q-btn>
    <q-btn label="-1" color="primary" @click="handler1($emit('textChange', text - 1))"></q-btn>


</template>

<script>

import { defineComponent, ref } from 'vue'
export default defineComponent({


    props: ['posts'],


    setup(props) {
        console.log(props)
        const text = ref(props.posts)//宣告上面對應的 input:v-model

        const handler = () => {
            text.value++

        }
        function handler1() {
            text.value--

        }
        return { text, handler, handler1 }

    },

})
</script>