<template>
  <div id="app">
    <div class="container vue-form-schema">
      <vue-form-schema
        :isRoot="true"
        :schema="extendedSchema"
        v-model="model"
      />
      <!-- <key-value-pairs
        :schema="extendedSchema.properties.matchLabels"
        v-model="model.matchLabels"
      /> -->
    </div>
  </div>
</template>

<script>
import VueFormSchema from "@/components/VueFormSchema.vue";
import Schema from "@/json-schema";
import ExtendSchema from "@/functional-components/extend-schema";

export default {
  name: "app",
  components: {
    VueFormSchema
    // "key-value-pairs": () => import("@/components/KeyValuePairs")
  },
  data() {
    return {
      jsonSchema: Schema,
      model: {
        additionalPodSecurityPolicies: []
        // affinity: {},
        // annotations: {},
        // apiserver: {
        //   bypassValidatingWebhookXray: false,
        //   ca: "not-ca-cert",
        //   disableStatusSubresource: false,
        //   enableMutatingWebhook: true,
        //   enableValidatingWebhook: true,
        //   groupPriorityMinimum: 10000,
        //   healthcheck: {
        //     enabled: true
        //   },
        //   useKubeapiserverFqdnForAks: true,
        //   versionPriority: 15
        // },
        // cleaner: {
        //   registry: "appscode",
        //   repository: "kubectl",
        //   tag: "v1.12"
        // },
        // criticalAddon: false,
        // enableAnalytics: true,
        // imagePullPolicy: "IfNotPresent",
        // logLevel: 3,
        // monitoring: {
        //   agent: "none",
        //   backup: false,
        //   operator: false,
        //   prometheus: {
        //     namespace: ""
        //   },
        //   serviceMonitor: {
        //     labels: {}
        //   }
        // },
        // nodeSelector: {
        //   "beta.kubernetes.io/arch": "amd64",
        //   "beta.kubernetes.io/os": "linux"
        // },
        // operator: {
        //   registry: "appscode",
        //   repository: "stash",
        //   tag: "0.8.3"
        // },
        // pushgateway: {
        //   registry: "prom",
        //   repository: "pushgateway",
        //   tag: "v0.5.2"
        // },
        // rbac: {
        //   create: true
        // },
        // replicaCount: 1,
        // serviceAccount: {
        //   create: true,
        //   name: null
        // },
        // tolerations: []
      }
    };
  },
  computed: {
    extendedSchema() {
      return ExtendSchema(this.jsonSchema);
      // return ExtendSchema({
      //   type: "object",
      //   properties: {
      //     matchLabels: {
      //       additionalProperties: {
      //         type: "string"
      //       },
      //       type: "object"
      //     }
      //   }
      // });
    }
  }
};
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "@/assets/scss/main.scss";
@import "~codemirror/lib/codemirror.css";

.vue-schema-form-object {
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgb(68, 0, 255);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.vue-schema-form-array {
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgb(0, 124, 128);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.vue-schema-form-key-value-pairs {
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgb(119, 128, 0);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.buttons .ac-list-action-button {
  margin-bottom: -3.375rem;
}

.buttons .ac-key-value-action-button {
  margin-bottom: -3.375rem;
  margin-top: 1.9rem;
}

.form-json-toggle-tabs,
.tabs:not(:last-child) {
  margin-bottom: 0;
  margin-right: 2rem;
}

.control.has-icons-right .icon.is-success {
  color: green;
}
.control.has-icons-right .icon.is-warning {
  color: red;
}

p.is-warning {
  color: red;
}
</style>
