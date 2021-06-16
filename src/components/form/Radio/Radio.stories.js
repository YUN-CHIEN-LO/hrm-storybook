import HrmRadio from './Radio.vue';
import HrmRadiogroup from './RadioGroup.vue';

export default {
    title: 'HRM/Form/Radio',
    component: { HrmRadio, HrmRadiogroup },
    argTypes: {
        disabled: { control: { type: 'boolean' } },
        type: { control: { type: 'select', options: ['default', 'inline'] } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmRadio },
    template: '<hrm-radio  v-bind="$props" />',
});

export const Default = Template.bind({});

const Template_group = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmRadiogroup },
    template: '<hrm-radiogroup  v-bind="$props" />',
});

export const Group = Template_group.bind({});