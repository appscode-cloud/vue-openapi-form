<template>
  <div id="app">
    <div id="header" class="vof-demo-header">
      <a href="https://byte.builders/"
        ><img
          src="https://cdn.appscode.com/images/products/bytebuilders/bytebuilders.png"
          alt="ByteBuilders"
        />
      </a>
      <strong>(Vue OpenAPI Form)</strong>
      <a
        href="https://github.com/appscode/vue-openapi-form"
        class="vof-demo-github"
        aria-label="GitHub"
      >
        <IconGithub aria-hidden="true" />
      </a>
    </div>

    <div class="vof-demo-body">
      <div class="vof-demo-left">
        <div v-if="!modifiedSchema">
          <h5 class="vof-demo-section-title">Select Schema</h5>
          <ac-select
            v-model="selectedTitle"
            label="Schema"
            :options="schemaOptions"
          />
        </div>
        <div v-else class="vof-demo-row">
          <div>Schema has been modified</div>
          <ac-button
            title="Reset"
            color="warning"
            @click.prevent="resetForm()"
          />
        </div>
        <schema-model
          :key="JSON.stringify(selectedJsonSchema)"
          :schema-model="selectedJsonSchema"
          @submit="updateSchema"
        />
      </div>
      <div class="vof-demo-right">
        <vue-openapi-form
          ref="vof"
          :key="JSON.stringify(selectedJsonSchema)"
          v-model="model"
          :schema="jsonSchema"
          :reference-model="referenceModel || ''"
          :form-title="formTitle"
        >
          <template #left-controls>
            <ac-button
              title="Cancel"
              color="danger"
              variant="outlined"
              @click.prevent="cancelFunc"
            />
          </template>
          <template #right-controls="{ validate }">
            <ac-button
              title="Done"
              :loading="isLoading"
              @click.prevent="submitFunc(validate)"
            >
              <template #icon><Check aria-hidden="true" /></template>
            </ac-button>
          </template>
        </vue-openapi-form>
      </div>

      <div>
        <ac-button
          title="Call Validate"
          :loading="isLoading"
          @click.prevent="callValidate"
        >
          <template #icon><Check aria-hidden="true" /></template>
        </ac-button>
      </div>
    </div>
  </div>
</template>

<script>
import Schemas from '@/json-schema.js';
import { defineAsyncComponent, defineComponent } from 'vue';
import { AcButton, AcSelect } from '@mohin4/design-system';
import { Check, Github } from 'lucide-vue-next';

export default defineComponent({
  name: 'App',
  components: {
    VueOpenapiForm: defineAsyncComponent(() =>
      import('@/components/VueOpenapiForm.vue').then((module) => module.default)
    ),
    SchemaModel: defineAsyncComponent(() =>
      import('@/components/SchemaModel.vue').then((module) => module.default)
    ),
    AcButton,
    AcSelect,
    Check,
    IconGithub: Github,
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
      isLoading: false,
    };
  },

  computed: {
    schemaOptions() {
      return this.jsonSchemas.map((schema) => ({
        value: schema.title,
        label: schema.title,
      }));
    },
    selectedTitle: {
      get() {
        return this.selectedJsonSchema.title;
      },
      set(title) {
        const found = this.jsonSchemas.find((schema) => schema.title === title);
        if (found) this.selectedJsonSchema = found;
      },
    },
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
    updateSchema(e) {
      this.modifiedSchema = true;
      this.selectedJsonSchema = e;
    },
    resetForm() {
      this.modifiedSchema = false;
      this.selectedJsonSchema = Schemas[0];
    },
    cancelFunc() {
      console.log('form is canceled');
    },
    async submitFunc(validate) {
      this.isLoading = true;
      const { valid } = await validate();
      if (valid) {
        console.log('form is valid');
      } else {
        console.log('form is invalid');
      }
      this.isLoading = false;
    },
    async callValidate() {
      const { valid } = await this.$refs.vof.$refs['v-form'].validate();
      console.log(valid);
    },
  },
});
</script>
