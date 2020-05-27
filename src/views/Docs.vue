<template>
    <div class="vbox flex stretch main-start cross-start" style="padding: 10px 20px;">
      <div class="spectrum-Typography">
        <MdView
          class="spectrum-Body3"
          :article="article"
        />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Docs',
  data() {
    return {
      article: '',
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.article = to.params.article
      }
    }
  },
}
</script>
