import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function Home(props: any) {
  const { clicked } = props;

  const {
    register,
    handleSubmit,
    formState: { },
    reset,
  } = useForm();
  const url = import.meta.env.VITE_SERVER_URL;

  const submitDetails = async (data: any) => {
    axios
      .post(url + "/v1/signup", data)
      .then((res) => {
        if (res.status == 200) {
          toast.success("Registration Successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          reset();
        }
      })
      .catch(() => {
        toast.error("Registration Error, Try Again ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="container mx-auto font-Nunito">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 items-center justify-center px-5 md:px-20">
        <div className="flex flex-col gap-5 text-white">
          <div className="w-full flex flex-col gap-5 text-4xl md:text-6xl font-bold text-white space-x-2">
            {/* <p className=''>Scale your</p>
            <p className=''>bussiness to </p>
            <p className=''>the top</p> */}
            <p>Email Marketing Mastery: Reach Millions, Unleash Success!</p>
          </div>
          <div>
            <p className="text-2xl">
              Email Marketing and SMS Marketing Platform
            </p>
          </div>
          <div>
            <p className="text-xl">Join the Waitlist now</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div
            className={`mb-4 w-full md:w-3/4 py-5 h-auto bg-white rounded-xl flex flex-col gap-2  ${clicked ? "glow" : ""
              }`}
          >
            <div className=" ">
              <div className="w-full flex items-center justify-center py-5">
                <h1 className="text-xl font-semibold">Join the Waitlist !</h1>
              </div>

              <div className="w-full  sm:p-6 md:p-8 px-4 md:px-5">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(submitDetails)}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Postaye..."
                      required
                      {...register("name")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Postaye Email Marketing"
                      required
                      {...register("companyName")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="+251900000000"
                      required
                      {...register("phoneNumber")}
                    />
                  </div>
                  <div className="flex items-start"></div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Register
                  </button>
                  <div className="text-sm font-medium text-gray-500 "></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
