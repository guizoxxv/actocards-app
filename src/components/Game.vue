<template>
  <el-card class="box-card">
    <h2 class="text-center">Feeling Lucky?</h2>
    <div class="my-5">
      <span
        class="underline cursor-pointer hover:font-bold"
        @click="gameInstructionsDialogVisible=true"
      >
        How it works?
      </span>
      <GameInstructionsModal
        :visible="gameInstructionsDialogVisible"
        @close="closeGameInstructionsModal"
      />
    </div>
    <el-form ref="form" :model="form" @submit.native.prevent="handleSubmit">
      <el-form-item class="mb-2">
        <span slot="label" class="text-sm">Name:</span>
        <el-input
          placeholder="Player's name"
          v-model="form.name"
          required
        />
      </el-form-item>
      <el-form-item class="mb-5">
        <span slot="label" class="text-sm">Cards:</span>
        <el-input
          placeholder="Player's cards"
          v-model="form.cards"
          required
        />
      </el-form-item>
      <el-form-item class="text-center">
        <el-button type="primary" native-type="submit">
          Play
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GameInstructionsModal from '@/components/GameInstructionsModal.vue';
import { playRequest } from '@/services/api';

@Component({
  components: {
    GameInstructionsModal,
  },
  data() {
    return {
      gameInstructionsDialogVisible: false,
      form: {
        name: '',
        cards: '',
      },
      errors: {
        name: false,
        cards: false,
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await playRequest(this.$data.form);
        console.log(response);
      } catch (e) {
        if (e.response.status === 422) {
          console.log('validation error!');
        }
      }
    },
    closeGameInstructionsModal() {
      this.$data.gameInstructionsDialogVisible = false;
    },
  },
})
export default class Game extends Vue {}
</script>
