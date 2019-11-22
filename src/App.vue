<template>
  <div id="app">
    <div class="container vue-form-schema">
      <vue-form-schema :schema="jsonSchema" :model="model" />
    </div>
  </div>
</template>

<script>
import VueFormSchema from "@/components/VueFormSchema.vue";

export default {
  name: "app",
  components: {
    VueFormSchema
  },
  data() {
    return {
      jsonSchema: {
        title: "A registration form",
        description: "A simple form example.",
        type: "object",
        properties: {
          firstName: {
            type: "string",
            title: "First name",
            default: "Chuck",
            ui: {
              tag: "input",
              type: "text"
            }
          },
          lastName: {
            type: "string",
            title: "Last name",
            ui: {
              tag: "input",
              type: "text"
            }
          },
          job: {
            title: "Job description",
            description: "Fillup your job informations",
            type: "object",
            properties: {
              jobTitle: {
                type: "string",
                title: "Job Title",
                default: "Software Engineer",
                ui: {
                  tag: "input",
                  type: "text"
                }
              },
              salary: {
                type: "string",
                title: "Salary",
                default: "200",
                ui: {
                  tag: "input",
                  type: "number"
                }
              }
            }
          },
          age: {
            type: "integer",
            title: "Age",
            ui: {
              tag: "input",
              type: "number"
            }
          },
          bio: {
            type: "string",
            title: "Bio",
            ui: {
              tag: "textarea",
              type: "text"
            }
          },
          password: {
            type: "string",
            title: "Password",
            minLength: 3,
            ui: {
              tag: "input",
              type: "password"
            }
          },
          telephone: {
            type: "string",
            title: "Telephone",
            minLength: 10,
            ui: {
              tag: "input",
              type: "text"
            }
          },
          listOfStrings: {
            type: "array",
            title: "A list of strings",
            items: {
              type: "string",
              default: "bazinga",
              ui: {
                tag: "input",
                type: "text"
              }
            }
          }
        }
      },
      model: {
        firstName: "Chuck",
        lastName: "Norris",
        job: {
          jobTitle: "Software Enginner",
          salary: 200
        },
        age: 75,
        bio: "Roundhouse kicking asses since 1940",
        password: "noneed",
        telephone: "01716303505",
        listOfStrings: ["Happy", "Birthday"]
      }
    };
  }
};
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "@/assets/scss/main.scss";

.vue-schema-form-object {
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px blue;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.vue-schema-form-array {
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px green;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.buttons .ac-list-action-button {
  margin-bottom: -3.375rem;
}
</style>
