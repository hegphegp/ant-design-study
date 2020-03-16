import { connect } from 'umi';
import ProductList from '@/components/ProductList';
/**
 * 可怕的事实，有意写错 type: ' products/delete11'  某个字母，对应的方法是不存在的，点击删除的时候，控制台居然不抛错，不抛出任何信息，这是多么可怕的，难道被try{ }catch() 捕获了，如果开发时误写错一个字母，控制台不抛出哪行代码写错，鬼知道在哪里改，太可怕了
 *   dispatch({
 *      type: 'products/delete111',
 *      payload: id,
 *   });
 */
/**
 * 规则1）：路由路径对应的文件是 pages 目录的文件，访问路由时，是先执行pages的文件，然后执行该文件的代码逻辑
 */
/**
 * 规则1）：umi的connect连接的对象，用const定义时一定要传 dispatch 参数。
 * 规则2）：umi的connect连接的对象，models对象域的namespace名称对应的参数名，默认赋予state的值。
 * 规则3）：组件components的参数名称要与属性名称一致。
 */
const Products = ({
  products,
  param0,
  dispatch,
  list: dataSource,
  loading,
  total,
  page: current,
}) => {
  // 写多少个参数都没问题
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  function handleDelete1(id) {
    dispatch({
      type:
        'products/delete11' /** 写错了 products/delete11 某个字母，对应的方法是不存在的，点击删除的时候，控制台居然不抛错，不抛出任何信息，这是多么可怕的 */,
      payload: id,
    });
  }

  const classAttrs = 'ant-table ant-table-small';
  const styleAttrs = {
    padding: '8px 7px',
  };
  return (
    <div>
      <h2>List of Products</h2>
      {/*  onDelete, products 是对应 @/components/ProductList组件的onDelete参数，products参数，鬼怎么知道对应的，安装参数名称吗？这是规则的话，就要默写，就要死记硬背 */}
      <ProductList
        onDelete={handleDelete1}
        data={dataSource}
        classAttrs={classAttrs}
        styleAttrs={styleAttrs}
      />
    </div>
  );
};

// 和models的namespace同名的参数获得state的值
// 遗留问题：不同名的参数，怎么获取初始值，举个例子，后端返回菜单数据，怎么给这个参数赋值，并且传到 connect 的参数里面
// export default connect(({ products, param0 }) => ({
//   products,
//   param0,
// }))(Products);

function mapStateToProps(state) {
  const { list, total, page } = state.products;
  console.log('\n\n\n' + JSON.stringify(list) + '\n\n\n');
  return {
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Products);
