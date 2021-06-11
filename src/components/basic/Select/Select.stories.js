import HrmSelect from './Select.vue';

export default {
    title: 'HRM/Basic/Select',
    component: HrmSelect,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
        disabled: { control: { type: 'boolean' } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmSelect },
    template: '<hrm-select  v-bind="$props" />',
});

export const Default = Template.bind({});