export default function CustomTable(props: {
  data: any[];
  column: { key: string; farsiColumn: string }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="border w-full ">
        <thead className="border-b-2">
          <tr>
            {props.column.map((item) => {
              return (
                <th className="border-r-2 py-3" key={item.key}>
                  {item.farsiColumn}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <>
                <tr className="[&:nth-child(odd)]:bg-slate-400">
                  {props.column.map((itemColumn) => {
                    if (item[itemColumn.key]) {
                      return (
                        <td className="text-center border-b-2 border-slate-300 border-r-2 py-3  ">
                          {item[itemColumn.key]}
                        </td>
                      );
                    }
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
