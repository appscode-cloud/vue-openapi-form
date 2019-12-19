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
            :class="{
              'is-success': validationOb.validated && validationOb.valid,
              'is-danger': validationOb.validated && validationOb.invalid
            }"
            :placeholder="ui.placeholder || ''"
            v-model="modelData"
            @change="modelData = $event.target.value"
          />
          <template v-if="validationOb.validated">
            <span
              class="icon is-small is-right is-success"
              v-if="validationOb.valid"
            >
              <i class="fa fa-check"></i>
            </span>
            <span
              class="icon is-small is-right is-warning"
              v-if="validationOb.invalid"
            >
              <i class="fa fa-times"></i>
            </span>
          </template>
          <p
            class="is-warning"
            v-if="
              validationOb &&
                validationOb.errors &&
                validationOb.errors.length > 0
            "
          >
            <span class="warning"><i class="fa fa-warning"></i></span>
            {{ validationOb.errors[0] }}
          </p>
        </div>
      </template>
    </template>

    <template v-if="ui.tag === 'textarea'">
      <div class="control has-icons-right">
        <textarea
          class="input"
          :type="ui.type"
          :class="{
            'is-success': validationOb.validated && validationOb.valid,
            'is-danger': validationOb.validated && validationOb.invalid
          }"
          :placeholder="ui.placeholder || ''"
          v-model="modelData"
          @change="modelData = $event.target.value"
        />
        <template v-if="validationOb.validated">
          <span class="icon is-small is-right is-success" v-if="valid">
            <i class="fa fa-check"></i>
          </span>
          <span class="icon is-small is-right is-warning" v-if="invalid">
            <i class="fa fa-times"></i>
          </span>
        </template>
        <p class="is-warning" v-if="validationOb.errors.length > 0">
          <span class="warning"><i class="fa fa-warning"></i></span>
          {{ validationOb.errors[0] }}
        </p>
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
import { model } from "@appscode/vue-openapi-form/src/mixins/model.js";
import validation from "@appscode/vue-openapi-form/src/mixins/validation.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      default: ""
    },
    validationOb: {
      type: Object,
      default: () => ({})
    }
  },

  mixins: [model, validation],

  computed: {
    ui() {
      return this.schema.ui || { tag: "input", type: "text" };
    }
  }
};
</script>
