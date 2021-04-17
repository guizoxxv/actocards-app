<template>
  <el-card class="box-card">
    <h2 class="text-center">Feeling Lucky?</h2>
    <div class="my-5">
      <span
        class="underline cursor-pointer hover:font-bold"
        @click="gameInstructionsModalVisible=true"
      >
        How it works?
      </span>
      <GameInstructionsModal
        :visible="gameInstructionsModalVisible"
        @close="closeGameInstructionsModal"
      />
    </div>
    <el-form
      ref="form"
      :model="form"
      @input.native="handleInput"
      @submit.native.prevent="handleSubmit"
    >
      <el-form-item :error="errors.name">
        <span slot="label" class="text-sm">Name:</span>
        <el-input
          placeholder="Player's name"
          v-model="form.name"
          required
        />
      </el-form-item>
      <el-form-item :error="errors.cards" class="mb-8">
        <span slot="label" class="text-sm">Cards:</span>
        <el-input
          placeholder="Player's cards"
          v-model="form.cards"
          required
        />
      </el-form-item>
      <el-form-item class="text-center">
        <el-button
          type="warning"
          native-type="button"
          @click="clearForm"
        >
          <font-awesome-icon icon="times" />
          Clear
        </el-button>
        <el-button type="primary" native-type="submit">
          <font-awesome-icon icon="play" />
          Play
        </el-button>
      </el-form-item>
    </el-form>
    <GameResultsModal
      v-if="game"
      :visible="gameResultsModalVisible"
      :game="game"
      @close="closeGameResultsModal"
    />
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import GameInstructionsModal from '@/components/GameInstructionsModal.vue';
import GameResultsModal from '@/components/GameResultsModal.vue';
import { playRequest } from '@/services/api';

export default Vue.extend({
  components: {
    GameInstructionsModal,
    GameResultsModal,
  },
  data() {
    return {
      gameInstructionsModalVisible: false,
      gameResultsModalVisible: false,
      game: null,
      form: {
        name: '',
        cards: '',
      },
      errors: {
        active: false,
        name: '',
        cards: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await playRequest(this.form);

        // TODO: Add loading spinner

        this.gameResultsModalVisible = true;
        this.game = response;
      } catch (e) {
        if (e.response.status === 422) {
          const errorMsgs = e.response.data.errors;

          this.errors = {
            active: true,
            name: errorMsgs.name?.[0] || '',
            cards: errorMsgs.cards?.[0] || '',
          };
        }
      }
    },
    handleInput() {
      if (this.errors.active) {
        this.errors = {
          active: false,
          name: '',
          cards: '',
        };
      }
    },
    clearForm() {
      this.form = {
        name: '',
        cards: '',
      };
    },
    closeGameInstructionsModal() {
      this.gameInstructionsModalVisible = false;
    },
    closeGameResultsModal() {
      this.gameResultsModalVisible = false;

      this.clearForm();
    },
  },
});
</script>
