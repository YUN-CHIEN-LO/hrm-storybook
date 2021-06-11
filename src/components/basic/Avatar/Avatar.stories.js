import HrmAvatar from './Avatar.vue';

export default {
    title: 'HRM/Basic/Avatar',
    component: HrmAvatar,
    argTypes: {},
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HrmAvatar },
    template: '<HrmAvatar v-bind="$props" />',
});

export const Default = Template.bind({});