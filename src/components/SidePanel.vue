<template>
  <q-card class="my-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="../assets/img/mvs-userpic.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ ownersTitle }}</q-item-label>
        <q-item-label caption>{{ ownersSubTitle }}</q-item-label>
      </q-item-section>
    </q-item>

    <img src="../assets/img/sidepanel-bg.jpg"/>
  </q-card>
  <q-list padding>
    <!-- to - путь к странице по роутингу, exact - точное совпадение с указанным маршрутом -->
    <q-item to="/" exact clickable v-ripple>
      <q-item-section side>
        <q-icon color="primary" name="fa-solid fa-list-check" />
      </q-item-section>
      <q-item-section>Todo list</q-item-section>
    </q-item>
    <q-item to="/stat" exact clickable v-ripple>
      <q-item-section side>
        <q-icon color="primary" name="fa-solid fa-ranking-star" />
      </q-item-section>
      <q-item-section>Deal`s statistics</q-item-section>
    </q-item>
    <q-item to="/faq" exact clickable v-ripple>
      <q-item-section side>
        <q-icon color="primary" name="fa-solid fa-circle-question" />
      </q-item-section>
      <q-item-section>FAQ</q-item-section>
    </q-item>
    <q-item to="/contacts" exact clickable v-ripple>
      <q-item-section side>
        <q-icon color="primary" name="fa-solid fa-address-book" />
      </q-item-section>
      <q-item-section>Contacts</q-item-section>
    </q-item>
    <q-item to="/about" exact clickable v-ripple>
      <q-item-section side>
        <q-icon color="primary" name="fa-solid fa-circle-info" />
      </q-item-section>
      <q-item-section>About</q-item-section>
    </q-item>
  </q-list>

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
