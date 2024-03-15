<template>
  <div class="tabs ac-tabs is-line" :style=" showTab ? 'opacity: 1; visibility: visible;': ''">
    <ul>
      <li :class="{ 'is-active': activeTab === 'form' }">
        <a @click.prevent="showForm()">
          <span class="icon is-small"
            ><i
              class="fa fa-file-text fa-flip-horizontal"
              aria-hidden="true"
            ></i
          ></span>
          <span>Form</span>
        </a>
      </li>
      <li :class="{ 'is-active': activeTab === 'yaml' }">
        <a @click.prevent="showYaml()">
          <span class="icon is-small"
            ><i class="fa fa-code" aria-hidden="true"></i
          ></span>
          <span>YAML</span>
        </a>
      </li>
      <li :class="{ 'is-active': activeTab === 'json' }">
        <a @click.prevent="showJson()">
          <span class="icon is-small"
            ><i class="fa fa-code" aria-hidden="true"></i
          ></span>
          <span>JSON</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  props: {
    modelValue: {
      type: String,
      default: 'form',
    },
    showTab: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:modelValue'],

  data() {
    return {
      activeTab: 'form',
    };
  },

  methods: {
    showForm() {
      this.activeTab = 'form';
      this.$emit('update:modelValue', 'form');
    },
    showJson() {
      this.activeTab = 'json';
      this.$emit('update:modelValue', 'json');
    },
    showYaml() {
      this.activeTab = 'yaml';
      this.$emit('update:modelValue', 'yaml');
    },
  },
});
</script>
