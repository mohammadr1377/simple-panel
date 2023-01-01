export default function CustomInput(data: {
  value: string | number;
  handelChane: Function;
  customeClass?: string;
  type?: string;
  placeholder?: string;
  textLabel?: string;
}) {
  function OnChange(event: React.ChangeEvent<HTMLInputElement>) {
    data.handelChane(event.target.value);
  }
  return (
    <>
      {data.textLabel && <label className="px-1 mb-1  mt-3 block w-full">{data.textLabel}</label>}

      <input
        value={data.value}
        type={data.type ? data.type : "text"}
        onChange={OnChange}
        className={`w-full border py-1 px-2  border-gray-400 rounded-md  ${data.customeClass}`}
        placeholder={data.placeholder}
      />
    </>
  );
}
