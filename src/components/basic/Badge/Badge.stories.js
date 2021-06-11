import HrmBadge from './Badge.vue';

export default {
    title: 'HRM/Basic/Badge',
    component: HrmBadge,
    argTypes: { size: { control: { type: 'select', options: ['small', 'medium'] } }, },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmBadge },
    template: '<hrm-badge v-bind="$props" />',
});

export const Default = Template.bind({});