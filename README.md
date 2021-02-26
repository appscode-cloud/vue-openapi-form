# vue-openapi-form

## Validation structure

The Object and Array type components are wrapped inside `ValidationProvider` and a `ValidationObserver`. The

- `ValidationProvider` ensures that the Object/Array itself is not empty if required. And also other validations if necessary.
- `ValidationObserver` ensures to report all the errors occuring in it's nested child components.

## Props

- `reference-model` - A deep copy of the model object that we are modifying using vue-openapi-form component

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
