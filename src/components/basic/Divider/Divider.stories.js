import HrmDivider from './Divider.vue';

export default {
    title: 'HRM/Basic/Divider',
    component: HrmDivider,
    argTypes: {
        type: { control: { type: 'select', options: ['default', 'color', 'colorful'] } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmDivider },
    template: '<hrm-divider v-bind="$props" />',
});

export const Default = Template.bind({});