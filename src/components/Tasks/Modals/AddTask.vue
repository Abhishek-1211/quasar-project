<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round color="primary" icon="close" v-close-popup />
    </q-card-section>
<form submit="">
    <q-card-section class="q-pt-none">
      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.name" label="Add Task" class="col" :rules="[val => !!val || 'Field is required']"/>
      </div>
      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.duedate" label="Due Date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSubmit.duedate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.dueTime" label="Due Time">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" type="submit" />
    </q-card-actions>
  </form>
  </q-card>

</template>

<script>
export default {
  data () {
    return {
      taskToSubmit: {
        name: 'Hello ',
        completed: false,
        duedate: ' ',
        dueTime: ' '
      }
    }
  }
}
</script>
<style></style>
