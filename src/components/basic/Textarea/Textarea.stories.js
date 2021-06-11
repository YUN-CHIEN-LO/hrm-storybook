import HrmTextarea from './Textarea.vue';

export default {
    title: 'HRM/Basic/Textarea',
    component: HrmTextarea,
    argTypes: {
        size: { control: { type: 'select', options: ['medium'] } },
        disabled: { control: { type: 'boolean' } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmTextarea },
    template: '<hrm-textarea  v-bind="$props" />',
});

export const Default = Template.bind({});