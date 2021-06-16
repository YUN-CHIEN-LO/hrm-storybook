import HrmWarning from './Warning.vue'


export default {
    title: 'HRM/Small/Warning',
    component: { HrmWarning },
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmWarning },
    template: '<hrm-warning  v-bind="$props"></hrm-warning>',
});

export const Default = Template.bind({});

const Template_WithIcon = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmWarning },
    template: '<hrm-warning  v-bind="$props"><i class="fas fa-check-circle" style="margin-right: 10px" ></i>這是一個有icon的提示</hrm-warning>',
});

export const WithIcon = Template_WithIcon.bind({});