import { Input } from "antd";

const { TextArea } = Input;
const CustomInput = ({
  type = "text",
  id,
  value,
  size = "small",
  onChange,
  textarea = false,
  placeholder,
  label,
  className,
  ...props
}) => {
  const Component = textarea ? TextArea : Input;
  return (
    <div className="flex flex-col">
      <label className="text-sm pe-1" htmlFor={id}>
        {label}
      </label>
      <Component
        type={type}
        id={id}
        size={size}
        value={value}
        onChange={onChange}
        className={`nodrag nopan ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
