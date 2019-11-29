<template>
  <div class="vue-schema-form-array" :key="updatePass">
    <div class="level">
      <div class="level-left">
        <h4 class="title is-5">
          {{ schema.title || "Array Item Description" }}
        </h4>
      </div>
      <div class="level-right">
        <tabs v-model="formShow" />
      </div>
    </div>
    <hr />
    <template v-if="formShow">
      <div
        class="columns is-multiline"
        v-for="(item, index) in modelData"
        :key="index"
      >
        <div class="column is-10">
          <template v-if="items.type === 'object'">
            <vue-form-schema
              :schema="items"
              :type="items.type"
              v-model="modelData[index]"
            />
          </template>
          <template v-else-if="items.type === 'key-value-pairs'">
            <key-value-pairs
              :schema="items"
              :type="items.type"
              v-model="modelData[index]"
            />
          </template>
          <template v-else-if="items.type === 'array'">
            <array-input
              :schema="items"
              :type="items.type"
              v-model="modelData[index]"
            />
          </template>
          <template v-else>
            <simple-input
              :schema="items"
              :type="items.type"
              v-model="modelData[index]"
            />
          </template>
        </div>
        <div class="column is-2">
          <div class="buttons">
            <button
              class="button is-rounded is-info ac-list-action-button"
              :disabled="index === 0"
              @click.prevent="swapElems(index - 1, index)"
            >
              <span class="icon is-small">
                <i class="fa fa-arrow-up"></i>
              </span>
            </button>
            <button
              class="button is-rounded is-info ac-list-action-button"
              :disabled="index === modelData.length - 1"
              @click.prevent="swapElems(index, index + 1)"
            >
              <span class="icon is-small">
                <i class="fa fa-arrow-down"></i>
              </span>
            </button>
            <button
              class="button is-rounded is-danger ac-list-action-button"
              @click.prevent="deleteValue(index)"
            >
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-10">
          <template v-if="items.type === 'object'">
            <vue-form-schema
              :schema="items"
              :type="items.type"
              v-model="newData"
            />
          </template>
          <template v-else-if="items.type === 'key-value-pairs'">
            <key-value-pairs
              :schema="items"
              :type="items.type"
              v-model="newData"
            />
          </template>
          <template v-else-if="items.type === 'array'">
            <array-input :schema="items" :type="items.type" v-model="newData" />
          </template>
          <template v-else>
            <simple-input
              :schema="items"
              :type="items.type"
              v-model="newData"
            />
          </template>
        </div>
        <div class="column is-2">
          <div class="buttons">
            <button
              class="button is-rounded is-success ac-list-action-button"
              @click.prevent="addNewValue()"
            >
              <span class="icon is-small">
                <i class="fa fa-plus"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <!-- declared in tabs component -->
      <json-form v-model="modelData" />
    </template>
  </div>
</template>

<script>
import { model } from "@/mixins/model.js";
import tabs from "@/mixins/tabs.js";

export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: null,
      default: () => []
    }
  },

  mixins: [model, tabs],

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput"),
    "key-value-pairs": () => import("@/components/KeyValuePairs")
  },

  data() {
    return {
      newData: null,
      updatePass: 0
    };
  },

  computed: {
    items() {
      return this.schema.items || {};
    }
  },

  methods: {
    swapElems(index1, index2) {
      const temp = this.modelData[index1];
      this.$set(this.modelData, index1, this.modelData[index2]);
      this.$set(this.modelData, index2, temp);
      this.updatePass += 1;
    },

    addNewValue() {
      this.modelData.push(this.newData);
      this.newData = null;
      this.updatePass += 1;
    },

    deleteValue(index) {
      this.$delete(this.modelData, index);
      this.updatePass += 1;
    }
  }
};
</script>
