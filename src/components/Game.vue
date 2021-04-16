<template>
  <el-card class="box-card">
    <h2 class="text-center">Feeling Lucky?</h2>
    <div class="underline my-5">
      How it works?
    </div>
    <form>
      <div class="mb-3">
        <label for="name" class="text-sm">Name:</label>
        <el-input id="name" placeholder="Player's name" v-model="name"></el-input>
      </div>
      <div class="mb-5">
        <label for="cards" class="text-sm">Cards:</label>
        <el-input id="cards" placeholder="Player's cards" v-model="cards"></el-input>
      </div>
      <div class="text-center">
        <el-button type="primary">
          Play
        </el-button>
      </div>
    </form>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      name: '',
      cards: '',
    };
  },
})
export default class Game extends Vue {}
</script>
