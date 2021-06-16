import HrmHeader from './Header.vue';

export default {
    title: 'HRM/Basic/Header',
    component: HrmHeader,
    argTypes: {
        size: { control: { type: 'select', options: ['medium'] } },
        disabled: { control: { type: 'boolean' } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmHeader },
    template: '<hrm-header v-bind="$props">Header</hrm-header>',
});

export const Default = Template.bind({});

const Template_WithIcon = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmHeader },
    template: '<hrm-header v-bind="$props">Header <i class="fas fa-question-circle" style="margin-left: 10px" ></i> <i class="far fa-file-pdf"></i> </hrm-header>',
});

export const WithIcon = Template_WithIcon.bind({});