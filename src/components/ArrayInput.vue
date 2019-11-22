<template>
  <div class="vue-schema-form-array">
    <h4 class="title">{{ schema.title }}</h4>
    <hr />
    <div
      class="columns is-multiline"
      v-for="(item, index) in modelData"
      :key="`${JSON.stringify(item)}-${index}`"
    >
      <div class="column is-10">
        <template v-if="items.type === 'object'">
          <vue-form-schema :schema="items" :model="item" />
        </template>
        <template v-else-if="items.type === 'array'">
          <array-input :schema="items" :model="item" />
        </template>
        <template v-else>
          <simple-input :schema="items" :model="item" />
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
          <button class="button is-rounded is-danger ac-list-action-button">
            <span class="icon is-small">
              <i class="fa fa-trash"></i>
            </span>
          </button>
        </div>
      </div>
      <div
        v-if="index === modelData.length - 1"
        class="column is-2 is-offset-10"
      >
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

<script>
export default {
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: Array,
      default: () => []
    }
  },

  components: {
    "vue-form-schema": () => import("@/components/VueFormSchema"),
    "array-input": () => import("@/components/ArrayInput"),
    "simple-input": () => import("@/components/SimpleInput")
  },

  data() {
    return {
      modelData: []
    };
  },

  computed: {
    items() {
      return this.schema.items || {};
    }
  },

  methods: {
    initModelData() {
      this.modelData = this.model;
    },

    swapElems(index1, index2) {
      const temp = this.modelData[index1];
      this.$set(this.modelData, index1, this.modelData[index2]);
      this.$set(this.modelData, index2, temp);
    },

    addNewValue() {}
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

<style></style>
