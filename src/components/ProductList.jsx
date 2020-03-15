import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ data, onDelete }) => {
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
  return <Table className="ant-table ant-table-small" dataSource={data} columns={columns} />;
};

export default ProductList;