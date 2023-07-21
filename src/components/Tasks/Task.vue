<template>
  <!-- <q-item tag="label" v-ripple> -->
  <!-- @click="this.$emit.task.completed = !this.$emit.task.completed"-->
  <q-item v-ripple clickable @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-deep-orange-1' : 'bg-green-3'">
    <q-item-section side top>
      <q-checkbox :value="task.completed" />
    </q-item-section>

    <q-item-section :class="{ 'text-strike': task.completed }">
      <q-item-label>{{ task.name }}</q-item-label>
      <!-- <q-item-label caption>
                Notify me about updates to apps or games that I downloaded
              </q-item-label> -->
    </q-item-section>

    <q-item-section side top>
      <q-icon name="event" size="18px" />
      <q-item-label caption>{{ task.duedate }}</q-item-label>
      <q-item-label caption>{{ task.dueTime }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <!--click.stop to stop click on parent item-->
      <!-- <q-btn @click.stop="promptToDelete(id)"  /> -->
      <q-btn flat round dense color="red" icon="delete" class="q-mt-xs" @click.stop="confirm=true" />
      <q-dialog v-model="confirm" persistant>
        <q-card>
          <q-card-section class="row items-center">
            <!-- <q-avatar icon="signal_wifi_off" color="red" text-color="white" /> -->
            <span class="q-ml-sm">Please confirm to delete</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="OK" color="primary" @click="deleteTask(id)" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      confirm: false
    }
  },
  props: ['task', 'id'], // props down and events up
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask'])
  }
}
</script>

<style></style>
