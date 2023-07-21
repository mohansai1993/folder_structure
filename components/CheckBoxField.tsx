import { Checkbox } from "antd";
import { Field } from "formik";
import React from "react";

interface CheckboxField {
  name: string;
  label?: string;
}
function CheckBoxField(props: any) {
  const { label, name }: CheckboxField = props;
  return (
    <Field name={name} {...props}>
      {({ field }: any) => (
        <Checkbox {...props} {...field}>
          {label}
        </Checkbox>
      )}
    </Field>
  );
}

export default CheckBoxField;
