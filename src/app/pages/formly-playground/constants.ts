import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormAnswer {
  firstname?: string; // hold a value of an input
  lastname?: string; // hold a value of an input
  password?: string; // hold a value of an input
  email?: string; // hold a value of an input
  diet?: string; // hold the value of a select
}

export const FORMLY_FIELDS: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'firstname',
        type: 'input',
        templateOptions: {
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true,
        },
        className: 'text-input',
      },
      {
        key: 'lastname',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true,
        },
        validation: {
          show: false,
          messages: {
            required: 'Last name is required',
          },
        },
        className: 'last-name',
      },
    ],
  },

  {
    key: 'diet',
    type: 'select',
    templateOptions: {
      label: 'Dietary Restrictions',
      defaultValue: 'none',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Vegetarian', value: 'vegetarian' },
        { label: 'Vegan', value: 'vegan' },
        { label: 'Gluten-free', value: 'gluten-free' },
        { label: 'Kosher', value: 'kosher' },
      ],
    },
    hooks: {
      onChanges(field) {
        console.log('onChanges', field.model);
      },
    },
  },

  {
    key: 'food-to-select',
    type: 'chip',
    templateOptions: {
      label: 'Food to Select',
      multiple: true,
    },
    expressions: {
      'templateOptions.options': (field: any) => {
        const diet = field.model.diet;

        if (!diet) {
          return [];
        }
        switch (diet) {
          case 'vegetarian':
            return VEGETARIAN;
          case 'vegan':
            return VEGAN;
          case 'gluten-free':
            return GLUTEN_FREE;
          case 'kosher':
            return KOSHER;
          default:
            return DEFAULT;
        }
      },
    },
    hooks: {
      onInit(field) {
        console.log('onInit', field.templateOptions?.options);
      },
    },
  },
];

export const VEGETARIAN = [
  { value: 'tofu', label: 'Tofu' },
  { value: 'lentils', label: 'Lentils' },
  { value: 'quinoa', label: 'Quinoa' },
];

export const VEGAN = [
  { label: 'Vegan Burger', value: 'vegan-burger' },
  { label: 'Fruit Salad', value: 'fruit-salad' },
  { label: 'Vegan Pasta', value: 'vegan-pasta' },
];

export const GLUTEN_FREE = [
  { label: 'Gluten-Free Pizza', value: 'gf-pizza' },
  { label: 'Rice Bowl', value: 'rice-bowl' },
  { label: 'Grilled Chicken', value: 'grilled-chicken' },
];

export const KOSHER = [
  { label: 'Kosher Chicken', value: 'kosher-chicken' },
  { label: 'Latkes', value: 'latkes' },
  { label: 'Bagels', value: 'bagels' },
];

export const DEFAULT = [
  { label: 'Pizza', value: 'pizza' },
  { label: 'Burger', value: 'burger' },
  { label: 'Pasta', value: 'pasta' },
  { label: 'Salad', value: 'salad' },
];
