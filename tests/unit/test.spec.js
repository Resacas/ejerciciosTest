import {createLocalVue, mount } from '@vue/test-utils'
import { Plugin } from '@/components/Plugin.vue'

const localVue = createLocalVue()
localVue.use(Plugin)

const $route = {
    path: '/',
    hash: '',
    params: {id:'123'},
    query: {msg: 'hello'}
  
  }
  mount(Component,{
    mocks: {
      $route
    }
  })
// mount(Component, { localVue })
