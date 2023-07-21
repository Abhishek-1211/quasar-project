import Vue from 'vue'

const state = {
  tasks: {
    ID1: {
      name: 'Purchase retail items',
      completed: false,
      duedate: '05/06/2023',
      dueTime: '14:00'
    },
    ID2: {
      name: 'Read quasar',
      completed: false,
      duedate: '10/06/2023',
      dueTime: '16:00'
    },
    ID3: {
      name: 'Making sample app',
      completed: false,
      duedate: '06/06/2023',
      dueTime: '18:00'
    }
  }
//   tasks: [
//     {
//       id: 1,
//       name: 'Purchase retail items',
//       completed: false,
//       duedate: '05/06/2023',
//       dueTime: '14:00'
//     },
//     {
//       id: 2,
//       name: 'Read quasar',
//       completed: false,
//       duedate: '10/06/2023',
//       dueTime: '16:00'
//     },
//     {
//       id: 3,
//       name: 'Making sample app',
//       completed: false,
//       duedate: '06/06/2023',
//       dueTime: '18:00'
//     }
//   ]
}

// only synchronous methods here---which manipulate the state directly and instantly
const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    console.log(id)
    Vue.delete(state.tasks, id)
  }
}

// Asynchronous methods-which reaches out to a  server,waits for response and then manipulate the data
const actions = {
  updateTask: ({ commit }, payload) => {
    commit('updateTask', payload)
  },
  deleteTask: ({ commit }, id) => {
    commit('deleteTask', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true, // when u need to create multiple store module
  state,
  mutations,
  actions,
  getters
}
