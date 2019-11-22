<template>
  <div class="field">
    <label class="label">{{ schema.title }}</label>
    <div v-if="schema.ui.tag === 'input'" class="control has-icons-right">
      <input
        class="input"
        :type="schema.ui.type"
        :placeholder="schema.ui.placeholder || ''"
        v-model="modelData"
      />
      <!-- <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span> -->
    </div>

    <div v-if="schema.ui.tag === 'textarea'" class="control has-icons-right">
      <textarea
        class="input"
        :type="schema.ui.type"
        :placeholder="schema.ui.placeholder || ''"
        v-model="modelData"
      />
      <!-- <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span> -->
    </div>
    <!-- <p class="help is-danger">This username is available</p> -->
  </div>
</template>

<script>
export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    model: {
      default: null
    }
  },

  data() {
    return {
      modelData: null
    };
  },

  methods: {
    initModelData() {
      this.modelData = this.model;
    }
  },

  created() {
    this.initModelData();
  },

  watch: {
    model() {
      this.initModelData();
    }
  }
};
</script>
