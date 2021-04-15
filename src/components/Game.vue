<template>
  <div>
    <h2>Feeling Lucky?</h2>
    <form>
      <div>
        <div>Name:</div>
        <input type="text">
      </div>
      <div>
        <div>Cards:</div>
        <input type="text">
      </div>
      <div>
        How it works?
      </div>
      <div>
        <button type="submit">
          Play
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Game extends Vue {}
</script>
