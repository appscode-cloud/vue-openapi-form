<template>
  <div id="app">
    <div class="container vue-form-schema">
      <!-- <vue-form-schema :schema="extendedSchema" v-model="model" /> -->
      <key-value-pairs
        :schema="extendedSchema.properties.matchLabels"
        v-model="model.matchLabels"
      />
    </div>
  </div>
</template>

<script>
// import VueFormSchema from "@/components/VueFormSchema.vue";
import Schema from "@/json-schema";
import ExtendSchema from "@/functional-components/extend-schema";

export default {
  name: "app",
  components: {
    // VueFormSchema,
    "key-value-pairs": () => import("@/components/KeyValuePairs")
  },
  data() {
    return {
      jsonSchema: Schema,
      model: {
        matchLabels: {
          firstName: "chuck",
          lastName: "norris"
        }
      }
    };
  },
  computed: {
    extendedSchema() {
      // return ExtendSchema(this.jsonSchema);
      return ExtendSchema({
        type: "object",
        properties: {
          matchLabels: {
            additionalProperties: {
              type: "string"
            },
            type: "object"
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "@/assets/scss/main.scss";

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
</style>
