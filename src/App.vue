<template>
  <div id="app">
    <div id="header" class="ac-navbar-area is-fixed">
      <div class="ac-navbar-inner">
        <!-- navbar start  -->
        <nav class="ac-navbar">
          <!-- navbar logo start  -->
          <div class="ac-navbar-brand">
            <a href="https://byte.builders/"
              ><img
                class="desktop-only"
                src="@/assets/images/bytebuilders-logo-white.svg"
              />

              <img
                class="responsive-only"
                src="https://cdn.appscode.com/images/products/bytebuilders/bytebuilders.png"
                alt=""
              />
            </a>
          </div>
          <!-- navbar logo end -->
          <p class="pl-20" style="color: white">(Vue OpenAPI Form)</p>
          <!-- navbar menus start  -->
          <div class="ac-navbar-menu">
            <!-- single navbar menu item start  -->
            <div class="ac-menu-item">
              <div class="social-link">
                <a
                  href="https://github.com/appscode/vue-openapi-form"
                  class="icon-rounded"
                >
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <!-- single navbar menu item end  -->
          </div>
          <!-- navbar menus end -->
        </nav>
        <!-- navbar end -->
      </div>
    </div>

    <div class="vue-form-scema-body mb-50 mt-50">
      <div class="is-flex p-30">
        <div class="left-content">
          <div class="left-content-wrapper">
            <div v-if="!modifiedSchema" class="select-box-wrapper">
              <label class="mb-10 is-block" for="schema-selection"
                >Select Schema</label
              >
              <div class="select is-fullwidth">
                <select id="schema-selection" v-model="selectedJsonSchema">
                  <option
                    v-for="schema in jsonSchemas"
                    :key="schema.title"
                    :value="schema"
                  >
                    {{ schema.title }}
                  </option>
                </select>
              </div>
            </div>
            <div v-else class="level">
              <div class="level-left">Schema has been modified</div>
              <div class="level-right">
                <button class="button is-warning" @click.prevent="resetForm()">
                  Reset
                </button>
              </div>
            </div>
            <schema-model
              :key="JSON.stringify(selectedJsonSchema)"
              :schema-model="selectedJsonSchema"
              @submit="updateSchema"
            />
          </div>
        </div>
        <div class="right-content">
          <vue-openapi-form
            :key="JSON.stringify(selectedJsonSchema)"
            v-model="model"
            class="ml-10"
            :schema="jsonSchema"
            :reference-model="referenceModel || ''"
            :form-title="formTitle"
            :on-valid="onValid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Schemas from '@/json-schema.js';
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    VueOpenapiForm: defineAsyncComponent(() =>
      import('@/components/VueOpenapiForm.vue').then((module) => module.default)
    ),
    SchemaModel: defineAsyncComponent(() =>
      import('@/components/SchemaModel.vue').then((module) => module.default)
    ),
  },

  data() {
    return {
      jsonSchemas: Schemas,
      selectedJsonSchema: Schemas[0],
      jsonSchema: {},
      model: {},
      referenceModel: {},
      formTitle: '',
      modifiedSchema: false,
    };
  },

  watch: {
    selectedJsonSchema: {
      deep: true,
      immediate: true,
      async handler(newVal) {
        this.jsonSchema = JSON.parse(JSON.stringify(newVal.schema));
        await setTimeout(() => {
          this.model = JSON.parse(JSON.stringify(newVal.model));
          this.referenceModel = JSON.parse(JSON.stringify(this.model));
        }, 2000);
        this.formTitle = newVal.title;
      },
    },
  },

  methods: {
    onValid() {
      // console.log("Form is Valid");
      // console.log(this.model);
    },
    updateSchema(e) {
      this.modifiedSchema = true;
      this.selectedJsonSchema = e;
    },
    resetForm() {
      this.modifiedSchema = false;
      this.selectedJsonSchema = Schemas[0];
    },
  },
});
</script>
