<template>
  <q-layout view="hHr lpR ffr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/mvs013.svg">
          </q-avatar>
          {{ mainTitle }}
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <SidePanel/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/mvs013.svg">
          </q-avatar>
          <div>{{ mainTitle }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SidePanel from '../components/SidePanel.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SidePanel
  },

  setup () {
    const rightDrawerOpen = ref(false)

    return {
      mainTitle: 'MVS`s todo list',

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
})
</script>
