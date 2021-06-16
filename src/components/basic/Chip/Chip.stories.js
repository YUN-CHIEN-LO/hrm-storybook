import HrmChip from './Chip.vue';

export default {
    title: 'HRM/Basic/Chip',
    component: HrmChip,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmChip },
    template: '<hrm-chip  v-bind="$props" />',
});

export const Default = Template.bind({});