// monaco editor
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import yamlWorker from 'monaco-yaml/yaml.worker.js?worker';

export function useMonaco() {
  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json') {
        return new jsonWorker();
      }
      if (label === 'yaml') {
        return new yamlWorker();
      }
      return new editorWorker();
    },
  };
}
