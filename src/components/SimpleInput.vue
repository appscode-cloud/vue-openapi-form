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
          <validation-provider
            v-slot="{ errors, valid, invalid, validated }"
            :rules="ruleString"
            :name="schema.title"
            slim
          >
            <input
              class="input"
              :type="ui.type"
              :class="{
                'is-success': validated && valid,
                'is-danger': validated && invalid
              }"
              :placeholder="ui.placeholder || ''"
              v-model="modelData"
            />
            <template v-if="validated">
              <span class="icon is-small is-right is-success" v-if="valid">
                <i class="fa fa-check"></i>
              </span>
              <span class="icon is-small is-right is-warning" v-if="invalid">
                <i class="fa fa-times"></i>
              </span>
            </template>
            <p class="is-warning" v-if="errors.length > 0">
              <span class="warning"><i class="fa fa-warning"></i></span>
              {{ errors[0] }}
            </p>
          </validation-provider>
        </div>
      </template>
    </template>

    <template v-if="ui.tag === 'textarea'">
      <div class="control has-icons-right">
        <validation-provider
          v-slot="{ errors, valid, invalid, validated }"
          :rules="ruleString"
          :name="schema.title"
          slim
        >
          <textarea
            class="input"
            :type="ui.type"
            :placeholder="ui.placeholder || ''"
            v-model="modelData"
          />
          <template v-if="validated">
            <span class="icon is-small is-right is-success" v-if="valid">
              <i class="fa fa-check"></i>
            </span>
            <span class="icon is-small is-right is-warning" v-if="invalid">
              <i class="fa fa-times"></i>
            </span>
          </template>
          <p class="is-warning" v-if="errors.length > 0">
            <span class="warning"><i class="fa fa-warning"></i></span>
            {{ errors[0] }}
          </p>
        </validation-provider>
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
import validation from "@/mixins/validation.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  mixins: [model, validation],

  computed: {
    ui() {
      if (!this.schema.ui) console.log(this.schema);

      return this.schema.ui || { tag: "input", type: "text" };
    },

    ruleString() {
      let ans = "";
      if (this.required) ans += "required";
      return ans;
    }
  }
};
</script>
