import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Register.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, NavLink } from 'react-router-dom';

function EmailRegistration() {
  const key = "6LddkXslAAAAABAjfWEjay7KwKzeaR3yXt6sA274";
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [OTP, showOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [capDone, setCapDone] = useState(false);
  const [otp, setOtp] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onCapChange = () => {
    setCapDone(true);
  };
  var emailresp;
  const handleSubmit = (event) => {
    event.preventDefault();

      setLoading(true);
      axios
        .post("https://conatus-registration-backend.onrender.com/sendotp", {
          email: email,
        })
        .then((result) => {
          emailresp = result.status;
          if (emailresp === 200) {
            showOTP(true);
            toast.success(`OTP sent Successfully`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setLoading(false);
          }
          else if (emailresp === 409) {
            setEmail("");
            toast.error(`User already Registered`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setLoading(false);
          }
           console.log(result);
        })

        .catch((err) => {
          console.log(err);
          if (err.response.status === 409) {
            setEmail("");
            toast.error(`User already Registered`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            setEmail("");
            toast.error(`OTP not Sent`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          setLoading(false);
        }); 
  };

  var otpresp;
  const handleOtp = () => {
    console.log(otp);
    if (otp.length !== 4)
      toast.error(`Enter correct OTP`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    else {
      setLoading2(true);
      axios
        .post("https://conatus-registration-backend.onrender.com/verifyotp", {
          email: email,
          otp: Number(otp),
        })
        .then((result) => {
          otpresp = result.status;
          if (otpresp === 200) {
            toast.success(`Success`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            sessionStorage.setItem("login", true);
            sessionStorage.setItem("leaderemail", email);
            setLoading2(false);
            showOTP(false);
          } else if (otpresp === 401) {
            toast.error(`Wrong OTP`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setOtp("");
          }
          setLoading2(false);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            toast.error(`Wrong OTP`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setOtp("");
            setLoading2(false);
          } else if (err.response.status === 404) {
            toast.error(`Failed to register ! Login Again`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setOtp("");
            setEmail("");
            setLoading2(false);
            showOTP(false);
          } else {
            toast.error(`Wrong OTP`, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setOtp("");
            setLoading2(false);
          }
        });
    }
  };
  var count = 1;
  const handleResend = () => {
    count++;
    setOtp("");
    if (count <= 4) {
      axios
        .post("https://conatus-registration-backend.onrender.com/resendotp", {
          email: email,
        })
        .then((result) => {
          console.log(result);
          toast.info(`OTP sent`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          toast.info(`OTP not sent`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(err);
        });
    } else {
      showOTP(false);
      setEmail("");
      toast.error(`Registration failed`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (login) {
      Navigate("/login");
    }
  });

  return (
    <div>
      <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
      <div className="mainbody">
        <div className="container">
          {OTP ? (
            <span className="ent">
              Enter OTP
              <OTPInput
                value={otp}
                onChange={setOtp}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                className="otp-input "
                inputClassName="otp-num"
              />
              <ResendOTP onResendClick={handleResend} />
              <button type="submit" onClick={handleOtp} disabled={loading2}>
                {loading2 ? <>Verifying OTP ...</> : <>Verify OTP</>}
              </button>
            </span>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  className="email_inp"
                  onChange={handleEmailChange}
                  required
                />
              </label>
              <ReCAPTCHA sitekey={key} onChange={onCapChange} />
              <button type="submit" disabled={loading || !capDone}>
                {loading ? <>Sending Otp..</> : <>Send OTP</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailRegistration;