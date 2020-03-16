export default {
  // namespace: 'products',
  // state: [
  //   { name: 'dva', id: 'dva', key: 1 },
  //   { name: 'antd', id: 'antd', key: 1 },
  // ],
  namespace: 'products',
  state: {
    list: [
      { name: 'dva', id: 'dva' },
      { name: 'antd', id: 'antd' },
    ],
    total: 0,
    page: 1,
  },
  reducers: {
    delete(state, { payload: id }) {
      console.log('\n\n\n' + JSON.stringify(state.list) + '\n\n\n');
      state.list = state.list.filter(item => item.id !== id);
      return state;
    },
    delete11(state, { payload: id }) {
      console.log(
        '\n\n\n\t\t delete11 \t\t' + JSON.stringify(state.list) + '\n\n\n',
      );
      console.log(id);
      state.list = state.list.filter(item => item.id !== id);
      console.log(
        '\n\n\n\t\t delete11 \t\t' + JSON.stringify(state.list) + '\n\n\n',
      );
      console.log(
        '\n\n\n\t\t delete11 \t\t' + JSON.stringify(state) + '\n\n\n',
      );
      // return state; // 直接return state; 直接死人了，直接死人了，要return { ...state }; // 两眼蒙圈，究竟定义了多少黑暗的规则，我要怎么才可以记住所有的规则
      return { ...state };
    },
  },
};
