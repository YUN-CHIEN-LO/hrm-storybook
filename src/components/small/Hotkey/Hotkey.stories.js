import Hotkey from './Hotkey.vue';


export default {
    title: 'HRM/Small/Hotkey',
    component: Hotkey,

};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Hotkey },
    template: `<Hotkey v-bind="$props" class="container" />`,
});

export const Default = Template.bind({});
export const WithBadge = Template.bind({});

WithBadge.args = {
    hotclicks: [{ icon: 'far fa-bell', label: '通知', badgeNum: 1 },
        { icon: 'fas fa-list-ol', label: '工作', badgeNum: 0 },
        { icon: 'fas fa-exchange-alt', label: '簽核', badgeNum: 3 },
        { icon: 'fas fa-sign-out-alt', label: '請假', badgeNum: 4 },
        { icon: 'far fa-newspaper', label: '公告', badgeNum: 0 },
        { icon: 'far fa-calendar-check', label: '考勤', badgeNum: 0 },
    ]
};