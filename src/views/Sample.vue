<template>
  <LiveCode class="vbox flex main-start cross-start"
    :sample="sample"
  />
</template>

<script>
export default {
  name: 'Sample',
  data() {
    return {
      sample: ''
    }
  },
  watch: {
    $route(to) {
      this.sample = to.params.component
    },
  },
  mounted() {
    this.sample = this.$route.params.component
  }
}
</script>
