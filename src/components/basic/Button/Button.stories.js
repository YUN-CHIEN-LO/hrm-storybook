import HrmButton from './Button.vue';

export default {
    title: 'HRM/Form/Button',
    component: HrmButton,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmButton },
    template: '<hrm-button  v-bind="$props"></hrm-button>',
});

export const Default = Template.bind({});

const Template_WithIcon = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmButton },
    template: '<hrm-button  v-bind="$props"></hrm-button>',
});

export const WithIcon = Template_WithIcon.bind({});
WithIcon.args = {
    icon: 'fas fa-plus'
}