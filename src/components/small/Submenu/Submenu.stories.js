import HrmSubmenu from './Submenu.vue'


export default {
    title: 'HRM/Small/Submenu',
    component: HrmSubmenu,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmSubmenu },
    template: '<hrm-submenu  v-bind="$props" />',
});

export const Default = Template.bind({});