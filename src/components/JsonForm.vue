<template>
  <div>
    <monaco-editor
      ref="monacoEditor"
      @editorDidMount="onEditorMount"
      v-model="valueString"
      :options="editorOptions"
      language="json"
      class="editor-writable vh-80 is-clipped"
    />
  </div>
</template>

<script>
import { model } from "../mixins/model.js";
import MonacoEditor from "vue-monaco";
import monacoEditorThemes from "@/plugins/monaco-editor-themes.js";
import { mapGetters } from "vuex";

export default {
  name: "json-form",
  props: {
    value: {
      type: null,
      default: () => ({}),
    },
  },

  mixins: [model],

  components: {
    MonacoEditor,
  },

  data() {
    return {
      valueString: "",

      editorOptions: {
        minimap: {
          enabled: true,
        },
        readOnly: false,
      },
    };
  },

  computed: {
    ...mapGetters({
      editorTheme: "editorTheme",
    }),
  },

  methods: {
    initValueString() {
      this.valueString = JSON.stringify(this.value, null, 2);
    },

    updateModelData() {
      let ans = null;
      try {
        ans = JSON.parse(this.valueString);
      } catch {
        ans = this.modelData;
      }

      this.modelData = ans;
      this.$emit("code::model-data-updated", ans);
    },

    onEditorMount() {
      const editor = this.$refs.monacoEditor.getEditor();

      // add event listeners
      editor.onDidBlurEditorText(this.updateModelData);

      // set theme
      monacoEditorThemes.setTheme(
        this.$refs.monacoEditor.monaco.editor,
        this.editorTheme
      );
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
