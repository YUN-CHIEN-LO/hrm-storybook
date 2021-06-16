import HrmGroupBtn from './GroupBtn.vue'
import HrmButton from './../../form/Button/Button.vue'

export default {
    title: 'HRM/AdvancedForm/GroupBtn',
    component: { HrmGroupBtn, HrmButton },
    argTypes: { size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }, },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmGroupBtn, HrmButton },
    template: '<hrm-group-btn v-bind="$props"><HrmButton>Btn1</HrmButton><HrmButton>Btn2</HrmButton><HrmButton>Btn3</HrmButton></hrm-group-btn>',
});

export const Default = Template.bind({});