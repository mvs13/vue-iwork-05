<template>
  <q-card class="my-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="~/assets/mvs013.svg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ ownersTitle }}</q-item-label>
        <q-item-label caption>{{ ownersSubTitle }}</q-item-label>
      </q-item-section>
    </q-item>

    <img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidePanel',

  setup () {
    return {
      ownersTitle: 'Max V. Shumakov',
      ownersSubTitle: 'This is my todo list'
    }
  }
})
</script>

<style>

</style>
