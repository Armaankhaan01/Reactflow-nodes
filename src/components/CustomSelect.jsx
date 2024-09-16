import { Select } from "antd";

const CustomSelect = ({
  options,
  value,
  onChange,
  label,
  size = "small",
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        size={size}
        className={`nodrag nopan ${className}`}
        {...props}
      />
    </div>
  );
};

export default CustomSelect;
