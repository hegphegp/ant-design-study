export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 'dva', key: 1 },
    { name: 'antd', id: 'antd', key: 1 },
  ],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    delete11(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
