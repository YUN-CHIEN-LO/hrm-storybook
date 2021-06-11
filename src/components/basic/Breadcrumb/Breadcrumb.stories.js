import HrmBreadcrumb from './Breadcrumb.vue';

export default {
    title: 'HRM/Basic/Breadcrumb',
    component: HrmBreadcrumb,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
        toggle: { control: { type: 'boolean' } },
        withBtn: { control: { type: 'boolean' } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmBreadcrumb },
    template: '<hrm-breadcrumb  v-bind="$props" />',
});

export const Default = Template.bind({});