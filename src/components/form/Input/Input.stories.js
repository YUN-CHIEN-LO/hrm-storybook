import HrmInput from './Input.vue';

export default {
    title: 'HRM/Form/Input',
    component: HrmInput,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
        type: { control: { type: 'select', options: ['default', 'underline'] } },
        disabled: { control: { type: 'boolean' } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmInput },
    template: '<hrm-input  v-bind="$props" />',
});

export const Default = Template.bind({});
export const Underline = Template.bind({});
Underline.args = {
    type: 'underline'
}