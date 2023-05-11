<template>
  <q-page class="flex column q-pa-md bg-cyan-3" >
    <h2>
      <q-icon color="primary" name="fa-solid fa-list-check" />
      Todo list
    </h2>
    <div class="add__todo q-pa-md bg-primary">
      <q-input
        @keyup.enter="addTodo"
        filled
        bg-color="cyan-1"
        v-model="newTodo"
        placeholder="What to do?"
        dense>
        <template v-slot:before>
          <q-icon name="fa-solid fa-list-check" />
        </template>

        <template v-slot:append>
          <q-btn
            @click="addTodo"
            round dense flat icon="fa-regular fa-square-plus" />
        </template>
      </q-input>
    </div>
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
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'todoList',
  data() {
    return {
      newTodo: '',
      todoList: [
        {
          id: uuidv4(),
          whatDo: 'Just do it',
          isDone: false
        },
        {
          id: uuidv4(),
          whatDo: 'Just do this',
          isDone: false
        },
        {
          id: uuidv4(),
          whatDo: 'Do that',
          isDone: false
        }
      ]
    }
  },
  methods: {
    removeItem(id) {
      // Не забыть добавить Dialog в настройках Quasar в quasar.config.js
      this.$q.dialog({
        dark: true,
        title: 'Remove',
        message: 'Do you understand that recovery will be impossible?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        let index4Remove = this.todoList.findIndex(item => item.id === id)
        this.todoList.splice(index4Remove, 1)
        this.$q.notify({
          message: 'The case is completed. At all.',
          icon: 'fa-solid fa-skull'
        })
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })

    },
    addTodo() {
      if (this.newTodo != "") {
        this.todoList.push(
          {
            id: uuidv4(),
            whatDo: this.newTodo,
            isDone: false
          }
        )
        this.newTodo = ''
      } else {
        let seconds = 5

        const dialog = this.$q.dialog({
          title: 'Attention!',
          message: `You didn't come up with the task. You have ${seconds} seconds for that.`
        }).onOk(() => {
          // console.log('OK')
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          clearTimeout(timer)
          // console.log('I am triggered on both OK and Cancel')
        })

        const timer = setInterval(() => {
          seconds--

          if (seconds > 0) {
            dialog.update({
              message: `You didn't come up with the task. You have ${seconds} second${seconds > 1 ? 's' : ''} for that.`
            })
          }
          else {
            clearInterval(timer)
            dialog.hide()
          }
        }, 1000)
      }

      console.log('addTodo')
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
