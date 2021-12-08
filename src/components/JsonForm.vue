<template>
  <div class="ml-30">
    <!-- tabs start  -->
    <div class="tabs ac-tabs is-line">
      <ul>
        <li :class="{ 'is-active': activeTab === 'file' }">
          <a @click.prevent="activeTab = 'file'">
            <span>File</span>
          </a>
        </li>
        <li :class="{ 'is-active': activeTab === 'preview-changes' }">
          <a @click.prevent="activeTab = 'preview-changes'">
            <span>Preview Changes</span>
          </a>
        </li>
      </ul>
    </div>
    <div v-if="activeTab === 'file'">
      <monaco-editor
        ref="monacoEditor"
        :key="editorTheme"
        @editorDidMount="onEditorMount"
        v-model="valueString"
        :options="{
          minimap: {
            enabled: true,
          },
          theme: editorTheme,
          readOnly: false,
        }"
        :diff-editor="activeTab === 'preview-changes'"
        language="yaml"
        class="editor-writable vh-80 is-clipped"
      />
    </div>

    <div v-else>
      <monaco-editor
        :key="activeTab + editorTheme"
        ref="monacoDiffEditor"
        class="editor-writable vh-80 is-clipped"
        :options="{
          minimap: {
            enabled: true,
          },
          theme: editorTheme,
          readOnly: true,
        }"
        :value="valueString"
        :diff-editor="true"
        :original="originalValueString"
        language="yaml"
      />
    </div>
  </div>
</template>

<script>
import { model } from "../mixins/model.js";
import jsyaml from "js-yaml";
import MonacoEditor from "vue-monaco";

export default {
  name: "yaml-form",
  props: {
    value: {
      type: null,
      default: () => ({}),
    },
  },
  inject: ["providedData"],

  mixins: [model],

  components: {
    MonacoEditor,
  },

  data() {
    return {
      activeTab: "file",

      valueString: "",
    };
  },

  computed: {
    originalValueString() {
      return JSON.stringify(this.referenceModel, null, 2);
    },
    theme() {
      return this.providedData.theme || "light";
    },
    editorTheme() {
      return this.theme === "dark" ? `vs-${this.theme}` : "vs";
    },
  },

  methods: {
    initValueString() {
      this.valueString = JSON.stringify(this.value, null, 2);
    },

    updateModelData() {
      let ans = null;
      try {
        ans = jsyaml.safeLoad(this.valueString, {
          json: true,
        }); // yaml => jsObject
      } catch (e) {
        ans = this.modelData;
      }

      this.modelData = ans;
      this.$emit("code::model-data-updated", ans);
    },

    onEditorMount() {
      const editor = this.$refs.monacoEditor.getEditor();

      // add event listeners
      editor.onDidBlurEditorText(this.updateModelData);
    },
  },

  created() {
    this.initValueString();
  },

  watch: {
    value() {
      this.initValueString();
    },
  },
};
</script>
