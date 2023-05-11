<template>
  <q-layout view="hHr lpR ffr">

    <q-header elevated class="bg-primary text-white">
      <q-img
          class="header__image"
          src="https://www.stockvault.net/data/2014/05/16/157358/preview16.jpg"
          fit="cover"
        />
      <q-toolbar>
        <q-avatar>
          <img src="~assets/mvs013.svg">
        </q-avatar>

        <q-toolbar-title>
          {{ mainTitle }}
        </q-toolbar-title>

        <div class="today-date">
          {{ todaysDate }}
        </div>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered
      :width="250"
      :breakpoint="600"
    >
      <!-- drawer content -->
      <SidePanel/>
    </q-drawer>

    <q-page-container>
      <!-- keep-alive - Сохранение данных при обновлении страницы путём кеширования неактивных компонентов-->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <!-- <keep-alive>
        <router-view />
      </keep-alive> -->
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-img
          class="header__image"
          src="https://www.stockvault.net/data/2014/05/16/157358/preview16.jpg"
          fit="cover"
        />
      <q-toolbar>
        <q-avatar>
          <img src="~assets/mvs013.svg">
        </q-avatar>
        <q-toolbar-title>
          {{ mainSlogan }}
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SidePanel from '../components/SidePanel.vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SidePanel
  },

  setup () {
    const rightDrawerOpen = ref(false)

    return {
      mainTitle: 'MVS`s procrastinator',
      mainSlogan: 'Don`t put it off until tomorrow, put it off today',

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },

  computed: {
    todaysDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd - DD.MMMM.YYYY - HH:mm')
    }
  }
})
</script>

<style lang="scss">
.header__image{
  height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.2;
}
</style>
