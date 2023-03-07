import React from "react";
import * as Yup from "yup";
import { useStateContext } from "../../context/StateContext";
import { useFormik } from "formik";

export const Main = () => {
  const { countriesList, getAllCountries } = useStateContext();

  React.useEffect(() => {
    getAllCountries();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "default",
      country: "default",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("The username is required.")
        .min(3, "The username only can have between 3 and 50 characters.")
        .max(50, "The username only can have between 3 and 255 characters."),
      country: Yup.string().required("The country is required."),
    }),
    onSubmit: async (formData: any) => {
      console.log(formData);
    },
  });

  return (
    <div id="settings-main" className="container">
      <div className="wrapper bg-white mt-5 mb-5 container">
        <h4 className="pb-4 pt-4 border-bottom fw-bold">Account settings</h4>

        <div className="d-flex align-items-start py-3 border-bottom">
          <img
            src="https://wrestlingnews.co/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTkzMDQ4OTQwMTg1MTM0ODAw/roxanne-perez.png"
            className="img"
            alt="profile-img"
          />
          <div className="pl-sm-4 pl-2" id="img-section">
            <b>Profile Photo</b>
            <p>Other users will be able to see the image.</p>
            <button className="btn button border">
              <b>Upload</b>
            </button>
          </div>
        </div>

        {countriesList ? (
          <form onSubmit={formik.handleSubmit} method="POST">
            <div className="py-2">
              <div className="row py-2">
                <div className="col-md-6">
                  <label htmlFor="firstname">Username</label>
                  <input
                    type="text"
                    className="bg-light form-control"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username &&
                    formik.values.username.length !== 0 && (
                      <small className="text-danger">
                        {formik.errors.username}
                      </small>
                    )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    className="bg-light"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                  >
                    <option defaultValue={formik.values.country}>
                      {formik.values.country}
                    </option>
                    {countriesList.map((country: any) => {
                      return (
                        <option
                          value={country.name.common}
                          key={country.name.common}
                        >
                          {country.name.common}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="py-3 pb-4 border-bottom">
                <button
                  type="submit"
                  className="btn btn-primary mr-3"
                  disabled={
                    formik.errors.country != undefined ||
                    formik.errors.username != undefined ||
                    formik.values.username.length === 0
                  }
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center mt-5 mb-5">
            <div className="spinner-border" role="status"></div>
          </div>
        )}
      </div>
    </div>
  );
};
