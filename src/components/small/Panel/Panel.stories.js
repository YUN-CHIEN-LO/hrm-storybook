import HrmPanel from './Panel.vue';

export default {
    title: 'HRM/Small/Panel',
    component: HrmPanel,
    argTypes: {
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
        toggle: { control: { type: 'boolean' } },
        withBtn: { control: { type: 'boolean' } }
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmPanel },
    template: '<hrm-panel  v-bind="$props"> content... </hrm-panel>',
});

export const Default = Template.bind({});
export const Toggle = Template.bind({});
Toggle.args = {
    toggle: true
}

export const WithBtn = Template.bind({});
WithBtn.args = {
    withBtn: true
}

const Template_WithList = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmPanel },
    template: '<hrm-panel  v-bind="$props"> </hrm-panel>',
});

export const WithList = Template_WithList.bind({});
WithList.args = {
    items: [{
        label: 'Item 1',
        value: 'item1'
    }, {
        label: 'Item 2',
        value: 'item2'
    }, {
        label: 'Item 3',
        value: 'item3'
    }]
}