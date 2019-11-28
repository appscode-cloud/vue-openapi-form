<template>
  <div class="vue-schema-form-key-value-pairs">
    <h4 class="title">{{ schema.title }}</h4>
    <hr />
    <div
      class="columns is-multiline"
      v-for="(prop, index) in keyValueArray"
      :key="index"
    >
      <div class="column is-5">
        <div class="field">
          <label class="label">Key</label>
          <div class="control has-icons right">
            <input class="input" type="text" v-model="prop.key" />
          </div>
        </div>
      </div>
      <div class="column is-5">
        <template v-if="additionalProperties.type === 'object'">
          <vue-form-schema
            :schema="additionalProperties"
            type="object"
            v-model="prop.value"
          />
        </template>
        <template v-else-if="additionalProperties.type === 'array'">
          <array-input
            :schema="additionalProperties"
            type="array"
            v-model="prop.value"
          />
        </template>
        <template v-else>
          <simple-input
            :schema="additionalProperties"
            type="string"
            v-model="prop.value"
          />
        </template>
      </div>
    </div>
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
      type: Object,
      default: () => ({})
    }
  },

  mixins: [model],

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput")
  },

  data() {
    return {
      newData: null,
      updatePass: 0,
      keyValueArray: []
    };
  },

  computed: {
    additionalProperties() {
      return this.schema.additionalProperties || {};
    }
  },

  methods: {
    initKeyValueArray() {
      return Object.keys(this.value).map(key => ({
        key,
        value: this.value[key]
      }));
    },

    reconstructObject(arr) {
      let result = {};
      arr.forEach(item => {
        result = Object.assign(
          {},
          { ...result },
          {
            [`${item.key}`]: item.value
          }
        );
      });
      return result;
    }
  },

  created() {
    this.keyValueArray = this.initKeyValueArray();
  },

  watch: {
    keyValueArray: {
      deep: true,
      handler(newVal) {
        this.modelData = this.reconstructObject(newVal);
      }
    }
  }
};
</script>
