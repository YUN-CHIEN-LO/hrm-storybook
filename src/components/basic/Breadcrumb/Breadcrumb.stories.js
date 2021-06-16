import HrmBreadcrumb from './Breadcrumb.vue';

export default {
    title: 'HRM/Basic/Breadcrumb',
    component: HrmBreadcrumb,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmBreadcrumb },
    template: '<hrm-breadcrumb  v-bind="$props" />',
});

export const Default = Template.bind({});