<template>
  <q-page class="flex column q-pa-md">
    <h2>
      <q-icon color="primary" name="fa-solid fa-circle-question fa-xl" />
      FAQ
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis placeat laudantium quibusdam, quisquam eveniet. Eos dignissimos ipsa maxime omnis? Voluptatum, fuga odio? Sapiente architecto a praesentium libero nisi minus!
    </p>
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="fa-regular fa-circle-question"
        label="Question one?"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="fa-solid fa-person-circle-question"
        label="Another question?"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="fa-solid fa-file-circle-question"
        label="Any quastions?"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'todoFAQ'
})
</script>
