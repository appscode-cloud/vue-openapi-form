<template>
  <div class="field">
    <template v-if="ui.tag === 'input'">
      <template v-if="ui.type === 'checkbox'">
        <input
          :id="schema.title.replace(' ', '-')"
          type="checkbox"
          name="switchRoundedDefault"
          class="switch is-rounded"
          v-model="modelData"
        />
        <label class="label" :for="schema.title.replace(' ', '-')">{{
          schema.title
        }}</label>
      </template>
      <template v-else>
        <label class="label">{{ schema.title }}</label>
        <div v-if="ui.tag === 'input'" class="control has-icons-right">
          <input
            class="input"
            :type="ui.type"
            :placeholder="ui.placeholder || ''"
            v-model="modelData"
          />
          <!-- <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span> -->
        </div>
      </template>
    </template>

    <template v-if="ui.tag === 'textarea'">
      <div class="control has-icons-right">
        <textarea
          class="input"
          :type="ui.type"
          :placeholder="ui.placeholder || ''"
          v-model="modelData"
        />
        <!-- <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span> -->
      </div>
    </template>

    <!-- <div v-if="ui.tag === 'checkbox'" class="field">
      <label>Switch rounded default</label>
      <input
        type="checkbox"
        name="switchRoundedDefault"
        class="switch is-rounded"
        v-model="modelData"
      />
    </div> -->
    <!-- <p class="help is-danger">This username is available</p> -->
  </div>
</template>

<script>
import { model } from "@/mixins/model.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      default: ""
    }
  },

  mixins: [model],

  computed: {
    ui() {
      if (!this.schema.ui) console.log(this.schema);

      return this.schema.ui || { tag: "input", type: "text" };
    }
  }
};
</script>
