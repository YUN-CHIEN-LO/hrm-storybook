import HrmCheckbox from './Checkbox.vue';
import HrmCheckboxgroup from './CheckboxGroup.vue';

export default {
    title: 'HRM/Basic/Checkbox',
    component: { HrmCheckbox, HrmCheckboxgroup },
    argTypes: {
        disabled: { control: { type: 'boolean' } },
        type: { control: { type: 'select', options: ['default', 'inline'] } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmCheckbox },
    template: '<hrm-checkbox  v-bind="$props" />',
});

export const Default = Template.bind({});

const Template_group = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmCheckboxgroup },
    template: '<hrm-checkboxgroup  v-bind="$props" />',
});

export const Group = Template_group.bind({});