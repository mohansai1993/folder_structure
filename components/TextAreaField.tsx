import { ErrorMessage, Field } from "formik";

interface TextAreaFieldType {
  name: string;
  label?: string;
  style?: string;
  flexDirection?: "vertical" | "horizontal";
  labelClassName?: string;
}
function TextAreaField(props: any) {
  const { label, name, flexDirection, labelClassName }: TextAreaFieldType =
    props;
  return (
    <div className={flexDirection === "horizontal" ? `grid grid-cols-3` : ""}>
      {label && (
        <div className={`my-2 ${labelClassName}`}>
          <label>{label}</label>
        </div>
      )}
      <div className="w-full col-span-2">
        {" "}
        <Field
          name={name}
          {...props}
          as="textarea"
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        />
        <div className="text-red-500 text-xs mt-1 ">
          {name && <ErrorMessage name={name} />}
        </div>
      </div>
    </div>
  );
}

export default TextAreaField;
