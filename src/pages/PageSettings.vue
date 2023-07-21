<template>
  <div>
    <q-toolbar padding>
      <q-toolbar-title>
        Settings Page
      </q-toolbar-title>
    </q-toolbar>
    <q-list separator class="q-pa-xl">
        <q-item v-for="nav in navs" :key="nav.id" clickable v-ripple>
            <q-item-section>
                <q-item-label>{{ nav.name }}</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          id: 1,
          name: 'Account Settings'

        },
        {
          id: 2,
          name: 'Privacy Settings'

        },
        {
          id: 3,
          name: 'Genral Preferences'

        },
        {
          id: 4,
          name: 'Email preferences'

        },
        {
          id: 5,
          name: 'Security'

        },
        {
          id: 6,
          name: 'Help and Support'

        },
        {
          id: 7,
          name: 'Appearance'

        },
        {
          id: 8,
          name: 'Connected Accounts'

        }
      ]
    }
  }
}
</script>
