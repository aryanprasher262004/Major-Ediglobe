const Tables = ({
  columns,
  renderRows,
  data
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRows:(item:any)=> React.ReactNode;
  data: any[];
}) => {
  // This component will render a table based on the provided columns using props we have to give the type of the prop used from parent component

  return (
    <table className="w-full mt-3">
      <thead>
        <tr className="">
          {columns.map((column) => (
            <th
              key={column.accessor}
              className={`p-2 text-left text-sm text-gray-500   ${column.className}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item)=> renderRows(item))}</tbody>
    </table>
  );
};

export default Tables;
