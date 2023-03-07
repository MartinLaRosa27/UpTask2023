import React from "react";

export const Main = () => {
  return (
    <div id="settings-main" className="container">
      <div className="wrapper bg-white mt-5 mb-5 container">
        <h4 className="pb-4 pt-2 border-bottom fw-bold">Account settings</h4>
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
        <div className="py-2">
          <div className="row py-2">
            <div className="col-md-6">
              <label htmlFor="firstname">Username</label>
              <input
                type="text"
                className="bg-light form-control"
                placeholder="Rok-C"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="bg-light form-control"
                placeholder="rok-c@email.com"
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-md-6">
              <label htmlFor="country">Country</label>
              <select name="country" id="country" className="bg-light">
                <option value="india" selected>
                  India
                </option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="uae">UAE</option>
              </select>
            </div>
          </div>
          <div className="py-3 pb-4 border-bottom">
            <button className="btn btn-primary mr-3">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
