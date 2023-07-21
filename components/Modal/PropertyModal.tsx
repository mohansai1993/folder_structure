import { Button, Modal, Radio, message } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import TextField from "../TextField";
import { useMutation } from "@apollo/client";
import {
  AddManager,
  AddProperty,
  UpdateProperty,
} from "../../graphql/Mutations";
import { errorMessage, successMessage } from "../../config/constant/message";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

function PropertyModal() {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [updateProperty] = useMutation(UpdateProperty);
  const [addManager] = useMutation(AddManager);
  const { currentUser } = useAuth();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStep(0);
  };

  function _renderStepContent(step: number) {
    switch (step) {
      case 0:
        return <SetupAssistantForm />;
      case 1:
        return <PropertyDetailsForm />;
      case 2:
        return <ManagementForm />;
      case 3:
        return <BankDetailForm />;
      case 4:
        return <VideoUploadForm />;
      default:
        return <div>Not Found</div>;
    }
  }

  const title = () => {
    switch (step) {
      case 0:
        return "Setup Assistant";
      case 1:
        return "Enter property details ";
      case 2:
        return "Management";
      case 3:
        return "Enter banking details for deposits and payments associated  with the amenities for your property";
      case 4:
        return "Congrats on Uploading your property";
    }
  };

  const SetupAssistantForm = () => {
    return (
      <Formik
        initialValues={{
          isFirstProperty: "no",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <h4>Would you like to setup your first property</h4>
            <div>
              <div className="my-3">
                <div className="grid gap-2">
                  <label>
                    <Field
                      type="radio"
                      name="isFirstProperty"
                      value="yes"
                      as={Radio}
                    />
                    Yes
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="isFirstProperty"
                      value="no"
                      as={Radio}
                    />
                    No{" "}
                    <span className="text-gray-400">
                      (You can always restart this wizard from the main menu at
                      late time)
                    </span>
                  </label>
                </div>
                <ErrorMessage
                  name="option"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
          </div>
          <FooterButton />
        </Form>
      </Formik>
    );
  };
  const PropertyDetailsForm = () => {
    const [addProperty] = useMutation(AddProperty);
    const [_, handleUpdateForm] = useLocalStorageState({
      key: "property_Details",
      value: {
        propertyId: "",
      },
    });
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{
            owner_name: "",
            name: "",
            address1: "",
            address2: "",
            city: "",
            State: "",
            Zip: "",
          }}
          validationSchema={Yup.object().shape({
            owner_name: Yup.string().required(
              "Property Owner Name is required"
            ),
            name: Yup.string().required("Property Name is required"),
            address1: Yup.string().required("Street Address 1 is required"),
            city: Yup.string().required("City is required"),
            State: Yup.string().required("State is required"),
            Zip: Yup.number()
              .required("ZIP is required")
              .positive("ZIP must be a positive number")
              .integer("ZIP must be an integer"),
          })}
          onSubmit={(values: any) => {
            console.log(values);

            addProperty({
              variables: {
                name: values.name,
                street1: values.address1,
                street2: values.address1,
                city: values.city,
                state: values.State,
                zip: String(values.Zip),
                ownerId: currentUser?.id,
              },
            })
              .then((data: any) => {
                console.log(data?.data?.addProperty?.id);
                successMessage(messageApi, "Property updated");
                handleUpdateForm({
                  propertyId: data?.data?.addProperty?.id,
                });
                handleCancel();
              })
              .catch((err) => {
                console.log(err.message);
                errorMessage(messageApi, err.message);
              });
          }}
        >
          <Form>
            {" "}
            <div className="my-3">
              <TextField
                name="owner_name"
                label="Property Owner Name"
                placeholder="Enter owner name"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
            </div>
            <div className="my-3">
              <TextField
                name="name"
                label="Property  Name"
                placeholder="Enter  name"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
            </div>
            <div className="my-3">
              <TextField
                name="address1"
                label="Street Address 1"
                placeholder="Address 1"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
            </div>
            <div className="my-3">
              <TextField
                name="address2"
                label="Street Address 2"
                placeholder="Address 2"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
            </div>
            <div className="flex  gap-2 my-3">
              <TextField
                name="city"
                label="City"
                placeholder="City"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
              <TextField
                name="State"
                label="State"
                placeholder="State"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
              <TextField
                name="Zip"
                label="Zip"
                type="number"
                placeholder="ZIP"
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
            </div>
            <FooterButton />
          </Form>
        </Formik>
      </>
    );
  };

  const ManagementForm = () => {
    const [initialValues, handleUpdateForm] = useLocalStorageState({
      key: "property_Details",
    });

    return (
      <>
        <Formik
          initialValues={{
            option1: "yes",
            managerName: "",
            email: "",
            phone: "",
          }}
          onSubmit={(values) => {
            if (values.option1 === "yes") {
              if (initialValues?.propertyId === undefined) {
                errorMessage(messageApi, "Please add properties first");
              } else {
                addManager({
                  variables: {
                    name: values.managerName,
                    email: values.email,
                    phone: String(values.phone),
                    propertyId: initialValues.propertyId,
                  },
                })
                  .then((data: any) => {
                    successMessage(messageApi, "Manager details add");
                    handleCancel();
                  })
                  .catch((err) => {
                    console.log(err.message);
                    errorMessage(messageApi, err.message);
                  });
              }
            } else {
              successMessage(messageApi, "It is self Manged");
            }
          }}
        >
          {({ values }) => (
            <Form>
              <div>
                <h4>
                  Would you like to assign a Manages for the amenities on this
                  property? your first property
                </h4>
                <div>
                  <div className="my-3">
                    <div className="grid gap-2">
                      <label>
                        <Field
                          type="radio"
                          name="option1"
                          value="yes"
                          as={Radio}
                        />
                        Yes, I would link to assign a manages
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="option1"
                          value="no"
                          as={Radio}
                        />
                        No, it is self Manged
                        <span className="text-gray-400">
                          (You can always restart this wizard from the main menu
                          at late time)
                        </span>
                      </label>
                    </div>
                    {values.option1 === "yes" && (
                      <>
                        <TextField
                          name="managerName"
                          label="Manager Name"
                          placeholder="Enter Name "
                          className="w-full border px-4 py-4 rounded-md focus:outline-"
                        />{" "}
                        <div className="flex gap-2">
                          <TextField
                            name="email"
                            label="Email Address"
                            type="email"
                            placeholder="Email Address"
                            className="w-full border px-4 py-4 rounded-md focus:outline-"
                          />{" "}
                          <TextField
                            name="phone"
                            label="Phone Number"
                            type="number"
                            placeholder="Phone Number"
                            className="w-full border px-4 py-4 rounded-md focus:outline-"
                          />{" "}
                        </div>
                      </>
                    )}
                    <ErrorMessage
                      name="option"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>{" "}
              <FooterButton />
            </Form>
          )}
        </Formik>
      </>
    );
  };
  const BankDetailForm = () => {
    const [initialValues, _] = useLocalStorageState({
      key: "property_Details",
    });

    return (
      <>
        <Formik
          initialValues={{
            bankAccountNickname: "",
            bankAccountName: "",
            bankAccountNumber: "",
            bankRoutingNumber: "",
            bankAccountAddress1: "",
            bankAccountAddress2: "",
            bankCity: "",
            bankState: "",
            bankZip: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            updateProperty({
              variables: {
                ...values,
                bankAccountNumber: String(values.bankAccountNumber),
                bankRoutingNumber: String(values.bankRoutingNumber),
                bankZip: String(values.bankZip),
                propertyId: initialValues.propertyId,
              },
            })
              .then((data: any) => {
                successMessage(messageApi, "Bank details updated");
              })
              .catch((err) => {
                console.log(err.message);
                errorMessage(messageApi, err.message);
              });
          }}
          validationSchema={Yup.object().shape({
            bankAccountNickname: Yup.string().required(
              "Account Nickname is required"
            ),
            bankAccountName: Yup.string().required(
              "Business name/Name on account is required"
            ),
            bankAccountNumber: Yup.number()
              .required("Bank Account Number is required")
              .positive("Bank Account Number must be a positive number")
              .integer("Bank Account Number must be an integer"),
            bankRoutingNumber: Yup.number()
              .required("Routing Number is required")
              .positive("Routing Number must be a positive number")
              .integer("Routing Number must be an integer"),

            bankAccountAddress1: Yup.string().required(
              "Address Line 1 is required"
            ),
            bankAccountAddress2: Yup.string(),
            bankCity: Yup.string().required("City is required"),
            bankState: Yup.string().required("State is required"),
            bankZip: Yup.number()
              .required("ZIP is required")
              .positive("ZIP must be a positive number")
              .integer("ZIP must be an integer"),
          })}
        >
          <Form>
            {" "}
            <div className="my-3">
              <div className="flex gap-2">
                <TextField
                  name="bankAccountNickname"
                  label="Account Nickname"
                  placeholder="Enter Nickname"
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />{" "}
                <TextField
                  name="bankAccountName"
                  label=" Business name/Name on account"
                  placeholder="Enter Name"
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />{" "}
              </div>
              <div className="flex gap-2">
                <TextField
                  name="bankAccountNumber"
                  label="Bank Account Number"
                  type="number"
                  placeholder=" Account Number "
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />{" "}
                <TextField
                  name="bankRoutingNumber"
                  label="Routing Number"
                  type="number"
                  placeholder="Routing Number "
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />{" "}
              </div>
              <TextField
                name="bankAccountAddress1"
                label="Address Line 1 "
                placeholder="Address Line 1 "
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />
              <TextField
                name="bankAccountAddress2"
                label="Address Line 2"
                placeholder="Address Line 2 "
                className="w-full border px-4 py-4 rounded-md focus:outline-"
              />{" "}
              <div className="flex  gap-2 my-3">
                <TextField
                  name="bankCity"
                  label="City"
                  placeholder="City"
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />
                <TextField
                  name="bankState"
                  label="State"
                  placeholder="State"
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />
                <TextField
                  name="bankZip"
                  label="Zip"
                  type="number"
                  placeholder="ZIP"
                  className="w-full border px-4 py-4 rounded-md focus:outline-"
                />
              </div>
            </div>
            <FooterButton />
          </Form>
        </Formik>
      </>
    );
  };
  const VideoUploadForm = () => {
    return (
      <div>
        <h4>Would you like to setup your first property</h4>
        <div>
          <div className="my-3">
            <div className="text-gray-400">
              Here’s a video that’ll guide you through your easy-to-use
              dashboard for any future changes
            </div>
            <div className="grid gap-2">
              <img
                className="rounded-md my-2"
                src={process.env.PUBLIC_URL + "/video.png"}
              />
            </div>
          </div>
        </div>
        <FooterButton />
      </div>
    );
  };
  const FooterButton = () => {
    return (
      <div className="flex gap-4">
        {step === 4 ? (
          <Link
            to={"/owner/dashboard"}
            className="w-full"
            onClick={handleCancel}
          >
            <Button
              htmlType="submit"
              className="block w-full text-xl bg-[#FAB815] mt-4 px-4 py-4 rounded-md  text-white font-semibold mb-2"
            >
              Go Dashboard
            </Button>
          </Link>
        ) : (
          <Button
            htmlType="submit"
            className="block w-full text-xl bg-[#FAB815] mt-4 px-4 py-4 rounded-md  text-white font-semibold mb-2"
          >
            Save and Exit
          </Button>
        )}
        <Button
          type="primary"
          // disabled={isSubmitting}
          // htmlType="submit"
          onClick={() => setStep(step + 1)}
          className="block w-full text-xl bg-[#FAB815] mt-4 px-4 py-4 rounded-md  text-white font-semibold mb-2"
        >
          {step === 4 ? "Add Amenity" : "Next"}
        </Button>
      </div>
    );
  };
  return (
    <div>
      {contextHolder}
      <span onClick={showModal}> {"Add property"}</span>
      <Modal
        title={title()}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="p-2 pb-4">
          <div> {_renderStepContent(step)}</div>
        </div>
      </Modal>
    </div>
  );
}

export default PropertyModal;
