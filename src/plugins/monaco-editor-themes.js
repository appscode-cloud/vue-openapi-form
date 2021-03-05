export default {
  // set theme of monaco editor
  setTheme(editor, themeName) {
    editor.defineTheme(themeName, this[themeName]);
    editor.setTheme(themeName);
  },

  // Themes

  // SlushAndPoppies theme from https://github.com/brijeshb42/monaco-themes/blob/master/themes/Slush%20and%20Poppies.json
  acLightTheme: {
    base: "vs",
    inherit: true,
    rules: [
      {
        foreground: "406040",
        token: "comment",
      },
      {
        foreground: "c03030",
        token: "string",
      },
      {
        foreground: "0080a0",
        token: "constant.numeric",
      },
      {
        fontStyle: "underline",
        token: "source.ocaml constant.numeric.floating-point",
      },
      {
        foreground: "800000",
        token: "constant.character",
      },
      {
        foreground: "2060a0",
        token: "keyword",
      },
      {
        foreground: "2060a0",
        token: "keyword.operator",
      },
      {
        fontStyle: "underline",
        token: "source.ocaml keyword.operator.symbol.prefix.floating-point",
      },
      {
        fontStyle: "underline",
        token: "source.ocaml keyword.operator.symbol.infix.floating-point",
      },
      {
        foreground: "0080ff",
        token: "entity.name.module",
      },
      {
        foreground: "0080ff",
        token: "support.other.module",
      },
      {
        foreground: "a08000",
        token: "storage.type",
      },
      {
        foreground: "008080",
        token: "storage",
      },
      {
        foreground: "c08060",
        token: "entity.name.class.variant",
      },
      {
        fontStyle: "bold",
        token: "keyword.other.directive",
      },
      {
        foreground: "800000",
        token: "entity.name.function",
      },
      {
        foreground: "800080",
        token: "storage.type.user-defined",
      },
      {
        foreground: "8000c0",
        token: "entity.name.type.class.type",
      },
      { token: "", background: "F1F1F1" },
    ],
    colors: {
      "editor.foreground": "#000000",
      "editor.background": "#F1F1F1",
      "editor.selectionBackground": "#B0B0FF",
      "editor.lineHighlightBackground": "#00000026",
      "editorCursor.foreground": "#000000",
      "editorWhitespace.foreground": "#BFBFBF",
    },
  },
};
