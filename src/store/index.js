import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './store-task'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks
    }

  })

  return Store
}
