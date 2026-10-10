<template>
  <div id="app">
    <div
      id="header"
      class="flex h-[50px] items-center gap-3 border-b border-border bg-surface px-5 text-heading"
    >
      <a href="https://byte.builders/" class="shrink-0"
        ><img
          src="https://cdn.appscode.com/images/products/bytebuilders/bytebuilders.png"
          alt="ByteBuilders"
          class="h-[30px]"
        />
      </a>
      <strong class="truncate">(Vue OpenAPI Form)</strong>
      <a
        href="https://github.com/appscode/vue-openapi-form"
        class="ml-auto text-heading [&>svg]:size-5"
        aria-label="GitHub"
      >
        <IconGithub aria-hidden="true" />
      </a>
    </div>

    <div class="mt-5 flex flex-col gap-5 lg:flex-row">
      <div
        class="border-b border-border bg-surface-muted p-4 lg:w-[500px] lg:shrink-0 lg:border-r lg:border-b-0 lg:p-[30px]"
      >
        <div v-if="!modifiedSchema">
          <h5 class="mb-3 text-lg font-semibold text-heading">Select Schema</h5>
          <ac-select
            v-model="selectedTitle"
            label="Schema"
            :options="schemaOptions"
          />
        </div>
        <div v-else class="flex items-center justify-between gap-3">
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
      <div class="min-w-0 flex-1 px-4 lg:mt-[30px] lg:px-0">
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

      <div class="px-4 pb-4 lg:pl-0">
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
import { AcButton, AcSelect } from '@ac-design/design-system';
import { Check, Code } from '@lucide/vue';

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
    IconGithub: Code,
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
