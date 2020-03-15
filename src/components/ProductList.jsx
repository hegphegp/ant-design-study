import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ data, onDelete, classAttrs, styleAttrs }) => {
  const oldClassName = 'aa bb';
  const className =
    classAttrs != null ? oldClassName + ' ' + classAttrs : oldClassName;
  const styles = {
    fontSize: '14px',
    color: 'pink',
  };
  //如果遍历map
  for (var key in styleAttrs) {
    if (styleAttrs.hasOwnProperty(key)) {
      styles[key] = styleAttrs[key];
      // console.log('key==>>' + key +'  value==>>' + styleAttrs[key]);
    }
  }
  //构造参数传key-value
  // var m = new Map([['XiaoMing', 99], ['XiaoHong', 66]]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button size="small">Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  // return <Table rowKey={(record, index) => `拼接唯一key${record.id}${index}`} className="ant-table ant-table-small" dataSource={data} columns={columns} />;
  return (
    <Table
      rowKey={record => record.id}
      className={className}
      dataSource={data}
      columns={columns}
      style={styles}
    />
  );
};

export default ProductList;
