<template>
  <q-page class="flex column q-pa-md bg-cyan-3" >
    <h2>
      <q-icon color="primary" name="fa-solid fa-list-check" />
      Todo list
    </h2>
    <q-list separator>
      <q-item
        @click="item.isDone = !item.isDone"
        clickable
        v-for="item in todoList"
        :key="item.id"
        :class="{'item_is_done bg-blue-grey-3': item.isDone}"
        v-ripple
        side top>
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="item.isDone" :val="item.isDone" color="info" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.whatDo }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="item.isDone"
          side>
          <q-btn
            @click.stop="removeItem(item.id)"
            square color="accent" icon="fa-solid fa-delete-left" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'todoList',
  data() {
    return {
      todoList: [
        {
          id: '01',
          whatDo: 'Just do it',
          isDone: false
        },
        {
          id: '02',
          whatDo: 'Just do this',
          isDone: false
        },
        {
          id: '03',
          whatDo: 'Do that',
          isDone: false
        }
      ]
    }
  },
  methods: {
    removeItem(id) {
      let index4Remove = this.todoList.findIndex(item => item.id === id)
      this.todoList.splice(index4Remove, 1)
    }
  }
})
</script>

<style lang="scss">
.item_is_done{
  .q-item__section {
    // background-color: lightgray;
  }
  .q-item__label {
    text-decoration: line-through;
    color: gray;
  }
}
</style>
