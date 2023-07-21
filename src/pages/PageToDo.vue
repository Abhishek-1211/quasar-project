<template>
   <q-page class="q-pa-lg">
      <q-list bordered separator>
         <task
          v-for="(task, key) in tasks" :key="key"
          :task="task"
          :id="key">
         </task>
      </q-list>
      <!-- to align center use text-center -->
      <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      round
      color="primary"
      icon= "add"
      @click="alert = true"
    />
  </div>
  <q-dialog v-model="alert">
  <addTask></addTask>
  </q-dialog>
   </q-page>
</template>

<script>
import Task from 'components/Tasks/Task.vue'
import AddTask from 'components/Tasks/Modals/AddTask.vue'

export default {
  data () {
    return {
      alert: true
    }
  },
  computed: {
    tasks () {
      return this.$store.getters['tasks/tasks']
    }
  },
  components: {
    task: Task, // syntax----------<html-tag-name>:component name
    addTask: AddTask
  }
}
</script>
