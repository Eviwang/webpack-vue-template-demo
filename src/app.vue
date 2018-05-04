<template>
  <div :class="$style.txt" id="test">
      {{txt}}

      <div class="box">

      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt: 'hello !'
    }
  }
}
</script>


<style lang="stylus" module>
.txt{
    color:red;
}

</style>
