<template>
 <div>
     <h1>
      hola
    </h1>
  </div>
</template>

<script>
import {mount} from '@vue/test-utils'


export default {

};

const $route = {
  path: "/",
  hash: "",
  params: { id: "123" },
  query: { msg: "Plugins" },
};
// mount(component, {
//   mocks: { $route },
// });

</script>

<style>

</style>
