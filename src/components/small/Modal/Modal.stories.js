import HrmModal from './Modal.vue';

export default {
    title: 'HRM/Small/Modal',
    component: HrmModal,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmModal },
    template: '<hrm-modal v-bind="$props" />',
});

export const Default = Template.bind({});