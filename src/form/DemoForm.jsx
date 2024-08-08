import React, { useState } from "react";

const defaultValue = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
};
export default function DemoForm() {
  const [formValues, setFormValue] = useState(defaultValue);
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const validate = (event) => {
    const { value, name, required, pattern } = event.target;
    const newErrors = { ...formErrors };
    if (!value.trim()) {
      if (required) {
        newErrors[name] = "Vui lòng nhập thông tin";
      }
    } else {
      if (pattern) {
        const regex = new RegExp(pattern);
        const isValid = regex.test(value);
        if (!isValid) {
          if (name == "email") {
            newErrors[name] = "Email không hợp lệ";
          } else {
            newErrors[name] = "Nội dung không hợp lệ";
          }
        } else {
          newErrors[name] = "";
        }
      } else {
        newErrors[name] = "";
      }
    }
    setFormErrors(newErrors);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    const hasError = Object.values(formErrors).some((item) => !!item)
    // const hasError = Object.values(formErrors) sẽ trả về 1 mảng chứa giá trị của từng key trong object
    // some() để kiểm tra nếu ít nhất có 1 phần tử trong mảng thỏa điều kiện thì sẽ trả về true, ngược lại nếu không có phần tử nào thỏa điều kiện thì sẽ trả về false
    // !! shortcut cách parse dữ liệu về boolean
    if (!hasError) {
      console.log(formValues);
    }
  };
  const handleOnChange = (event) => {
    const { value, name} = event.target
    validate(event)
    setFormValue({ ...formValues, [name]: value });

  };
  const handleOnBlur = (event) => {
    validate(event)
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Validation Form
          </h2>
          <p className="text-gray-500 mb-6">
            Form validation with formik and yup
          </p>
        </div>

        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div className="col-span-2">
              <form onSubmit={onSubmit}>
                <div className="grid gap-4 gap-y-4 text-sm grid-cols-1">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formValues.fullName}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      required={true}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-600 text-sm text-start mt-2">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formValues.email}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      required={true}
                      pattern="^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$"
                    />
                    {formErrors.email && (
                      <p className="text-red-600 text-sm text-start mt-2">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formValues.phone}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      required={true}
                      pattern="/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/"
                    />
                    {formErrors.phone && (
                      <p className="text-red-600 text-sm text-start mt-2">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formValues.address}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      required={false}
                    />
                    {formErrors.address && (
                      <p className="text-red-600 text-sm text-start mt-2">
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-5 text-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
