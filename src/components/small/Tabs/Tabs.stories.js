import HrmTabs from './Tabs.vue'


export default {
    title: 'HRM/Small/Tabs',
    component: { HrmTabs },
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmTabs },
    template: '<hrm-tabs  v-bind="$props" />',
});

export const Default = Template.bind({});