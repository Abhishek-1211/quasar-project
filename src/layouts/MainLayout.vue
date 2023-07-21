<template>
  <q-layout view="hHh lpR lFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title class="absolute-center">
          Awesome ToDo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs inline-label>
        <q-route-tab v-for="nav in navs" :key="nav.label" :icon="nav.icon" :label="nav.label" :to="nav.to" />
      </q-tabs>
    </q-footer>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered content-class="bg-grey-2">
      <!-- drawer content -->
      <q-list>

        <q-item-label header>
          Links
        </q-item-label>

        <q-item v-for="nav in navs" :key="nav.label" :to="nav.to" exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-item clickable to="/settings" exact>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Settings</q-item-label>
            </q-item-section>
          </q-item> -->

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MainLayout',

  data () {
    return {
      navs: [
        {
          to: '/',
          icon: 'list',
          label: 'ToDo'
        },
        {
          to: '/settings',
          icon: 'settings',
          label: 'Settings'
        },
        {
          to: '/aboutUs',
          icon: 'info',
          label: 'About US'
        }
      ]
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}

</script>

<style lang="scss">
</style>
