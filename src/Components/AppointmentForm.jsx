import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Box, Modal, Typography } from "@mui/material";
import { addAppointmentBooking } from "../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  maxHeight: "400px",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "24px",
  p: 3,
};

const AppointmentForm = ({ handleFormClose }) => {
  const [openSubmission, setOpenSubmission] = useState(false);
  const [countDown, setCountDown] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModalClose = () => setOpenSubmission(false);

  const time = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return new Date().toLocaleString("en-US", options);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      additionalInfo: "",
    },
  });

  const form = useRef();

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const{ appointmentId } = await addAppointmentBooking({
        additionalInfo: data.additionalInfo,
        appointmentDate: data.appointmentDate,
        appointmentTime: data.appointmentTime,
        contact: data.contact,
        consent: data.consent,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNo: data.phoneNo,
        services: data.services,
      });

      setValue("appointmentId", appointmentId);
      if (form.current) {
        form.current.appointmentId.value = appointmentId;
      }

      if (form.current) {
        const idField = form.current.elements.namedItem("appointmentId");
        if (idField) idField.value = appointmentId;
      }

      await emailjs
        .sendForm("service_a1qw2qj", "template_unmz1hs", form.current, {
          publicKey: "ILmSuFObwJMgWXT14",
        })
        .then(setOpenSubmission(true));
    } catch (error) {
      console.error("Error submitting appointment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    let timer;

    if (openSubmission) {
      setCountDown(5);

      timer = setInterval(() => {
        setCountDown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleModalClose();
            handleFormClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [openSubmission]);

  const validateDate = (value) => {
    const date = new Date(value);
    const day = date.getDay();
    return (day !== 0 && day !== 6) || "Please select a weekday (Mon - Fri)";
  };

  const validateTime = (value) => {
    const [hour, minute] = value.split(":").map(Number);
    return (
      ((hour > 9 || (hour === 9 && minute >= 0)) &&
        (hour < 17 || (hour === 17 && minute === 0))) ||
      "Open between 9:00 AM and 5:00 PM"
    );
  };

  return (
    <div className="px-4">
      <form
        ref={form}
        action=""
        name="appointmentForm"
        id="appointmentForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center lg:pb-8 "
      >
        {/* form title */}
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={"Appointment Request"}
          className="hidden"
          {...register("title")}
        />

        {/* Submission time */}
        <input
          type="text"
          name="time"
          id="time"
          defaultValue={time()}
          className="hidden"
          {...register("time")}
        />

        {/* Appointment Reference No */}
        <input
          type="text"
          name="appointmentId"
          id="appointmentId"
          className="hidden"
          {...register("appointmentId")}
        />

        {/* Full Name */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%] ">
          <legend className="legend">Full Name</legend>
          <div className="flex flex-col gap-4 justify-end sm:flex-row sm:justify-between sm:gap-0">
            {/* First Name */}
            <div className="flex justify-between items-end mb-3 sm:mb-0 sm:block sm:w-1/2 relative">
              <label htmlFor="firstName" className="body-text text-nowrap">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="input-style w-2/3 sm:w-[90%]"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-secondary/90 text-[10px] xs:text-sm absolute top-[100%] sm:relative sm:top-0">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="flex justify-between items-end mb-3 sm:mb-0 sm:block sm:w-1/2 relative">
              <label htmlFor="lastName" className="body-text">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="input-style w-2/3 sm:w-[90%]"
                {...register("lastName")}
              />
            </div>
          </div>
        </fieldset>

        {/* Contact Details */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%]">
          <legend className="legend">Contact Details</legend>
          <div className="flex flex-col gap-4 justify-end sm:flex-row sm:justify-between sm:gap-0">
            {/* Phone No: */}
            <div className="flex justify-between items-end mb-3 sm:mb-0 sm:block sm:w-1/2 relative">
              <label htmlFor="phoneNo" className="body-text text-nowrap">
                Phone No:
              </label>
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                placeholder="+254xx, 07xx, 01xx"
                className="input-style w-2/3  sm:w-[90%]"
                {...register("phoneNo", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+?254|0)(1\d{2}|7\d{2})\s?\d{3}\s?\d{3}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.phoneNo && (
                <p className="text-secondary/90 text-[10px] xs:text-sm absolute top-[100%] sm:relative sm:top-0">
                  {errors.phoneNo.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex justify-between items-end mb-3 sm:mb-0 sm:block sm:w-1/2 relative">
              <label htmlFor="email" className="body-text">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@site.com"
                className="input-style w-2/3 sm:w-[90%] "
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid Email Address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-secondary/90 text-[10px] xs:text-sm absolute top-[100%] sm:relative sm:top-0">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Contact Method */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%]">
          <legend className="legend">Preferred Contact method</legend>

          <div className="flex justify-between sm:px-10 lg:px-14">
            {/* Phone call */}
            <div className="flex gap-2 sm:gap-4 lg:gap-6">
              <input
                type="radio"
                name="contact"
                id="phoneCall"
                value="phone call"
                {...register("contact", {
                  required: "Please select a contact method",
                })}
              />
              <label htmlFor="phoneCall" className="body-text">
                Phone Call
              </label>
            </div>

            {/* Email contact */}
            <div className="flex gap-2 sm:gap-4 lg:gap-6">
              <input
                type="radio"
                name="contact"
                id="emailContact"
                value="email"
                {...register("contact", {
                  required: "Please select a contact method",
                })}
              />
              <label htmlFor="emailContact" className="body-text">
                Email
              </label>
            </div>

            {/* SMS */}
            <div className="flex gap-2 sm:gap-4 lg:gap-6">
              <input
                type="radio"
                name="contact"
                id="smsContact"
                value="sms"
                {...register("contact", {
                  required: "Please select a contact method",
                })}
              />
              <label htmlFor="smsContact" className="body-text">
                SMS
              </label>
            </div>
          </div>
          {errors.contact && (
            <p className="text-secondary/90 text-center text-[10px] xs:text-sm">
              {errors.contact.message}
            </p>
          )}
        </fieldset>

        {/* Services Required */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%] body-text">
          <legend className="legend">Select Services You Require</legend>
          <p className="body-text pb-2">
            (You can select more than one option)
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 lg:gap-3 items-center">
              <input
                type="checkbox"
                name="hts"
                value="HTS Services"
                id="hts"
                className="accent-primary"
                {...register("services", {
                  required: "Please select at least one service",
                })}
              />
              <label htmlFor="hts">HIV Testing Services</label>
            </div>
            <div className="flex gap-1 lg:gap-3 items-center">
              <input
                type="checkbox"
                name="stiScreening"
                value="STI Screening"
                id="stiScreening"
                className="accent-primary"
                {...register("services", {
                  required: "Please select at least one service",
                })}
              />
              <label htmlFor="stiScreening">STI Screening & Treatment</label>
            </div>
            <div className="flex gap-1 lg:gap-3 items-center">
              <input
                type="checkbox"
                name="condomLube"
                value="Condoms and Lubes"
                id="condomLube"
                className="accent-primary"
                {...register("services", {
                  required: "Please select at least one service",
                })}
              />
              <label htmlFor="condomLube">Condom & Lubricant</label>
            </div>
            <div className="flex gap-1 lg:gap-3 items-center">
              <input
                type="checkbox"
                name="prepPep"
                value="PrEP or PEP"
                id="prepPep"
                className="accent-primary"
                {...register("services", {
                  required: "Please select at least one service",
                })}
              />
              <label htmlFor="prepPep">PrEP / PEP</label>
            </div>
            <div className="flex gap-1 lg:gap-3 items-center">
              <input
                type="checkbox"
                name="art"
                value="ART"
                id="art"
                className="accent-primary"
                {...register("services", {
                  required: "Please select at least one service",
                })}
              />
              <label htmlFor="art">Antiretroviral Therapy (ART)</label>
            </div>
            <div className="flex gap-1 lg:gap-3 items-center">
              <input
                type="checkbox"
                name="mental"
                value="mental health or psychosocial support"
                id="mental"
                className="accent-primary"
                {...register("services", {
                  required: "Please select at least one service",
                })}
              />
              <label htmlFor="mental">
                Mental Health & Psychosocial Support
              </label>
            </div>
            {errors.services && (
              <p className="text-secondary/90 text-[10px] xs:text-sm self-center">
                {errors.services.message}
              </p>
            )}
          </div>
        </fieldset>

        {/* Date of appointment */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%] ">
          <legend className="legend">Appointment Date</legend>
          <p className="body-text pb-2">
            We're open <span className="font-bold">Mon - Fri</span> 9:00AM to
            5:00PM
          </p>
          <div className="flex flex-col gap-4 justify-end sm:flex-row sm:justify-between sm:gap-0">
            {/* Appointment Date */}
            <div className="flex justify-between items-end mb-3 sm:mb-0 sm:block sm:w-1/2 relative">
              <label
                htmlFor="appointmentDate"
                className="body-text text-nowrap"
              >
                Date:
              </label>
              <input
                type="date"
                name="appointmentDate"
                id="appointmentDate"
                className="input-style w-2/3 sm:w-[90%]"
                {...register("appointmentDate", {
                  required: "Please select a Date",
                  validate: validateDate,
                })}
              />
              {errors.appointmentDate && (
                <p className="text-[10px] xs:text-sm text-secondary/90 absolute top-[100%] sm:relative sm:top-0">
                  {errors.appointmentDate.message}
                </p>
              )}
            </div>

            {/* Appointment Time */}
            <div className="flex justify-between items-end mb-3 sm:mb-0 sm:block sm:w-1/2 relative">
              <label
                htmlFor="appointmentTime"
                className="body-text text-nowrap"
              >
                Time:
              </label>
              <input
                type="time"
                name="appointmentTime"
                id="appointmentTime"
                className="input-style w-2/3 sm:w-[90%]"
                {...register("appointmentTime", {
                  required: "Please select a Time",
                  validate: validateTime,
                })}
              />
              {errors.appointmentTime && (
                <p className="text-[10px] xs:text-sm text-secondary/90 absolute top-[100%] sm:relative sm:top-0">
                  {errors.appointmentTime.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Additional Information Text Area */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%] ">
          <legend className="legend">Additional Information</legend>
          <textarea
            name="additionalInfo"
            id="additionalInfo"
            className="input-style w-full p-2"
            rows={5}
            placeholder="Any more information you'd like to share..."
            {...register("additionalInfo")}
            onFocus={(e) => {
              if (e.target.value === "No additional details provided") {
                e.target.value = "";
              }
            }}
          ></textarea>
        </fieldset>

        {/* Consent Confirmation */}
        <fieldset className="px-2 py-2 w-full border-2 lg:w-[90%] xl:w-[80%] 2xl:w-[90%] ">
          <legend className="legend">Consent</legend>
          <div>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className="inline-block accent-primary"
              {...register("consent", {
                required: "Please confirm consent before submiting",
              })}
            />
            <label className="body-text pl-2">
              I consent to the collection and use of my personal information for
              the purpose of scheduling and managing my appointment.
            </label>
            {errors.consent && (
              <p className="text-[10px] xs:text-sm text-secondary/90">
                {errors.consent.message}
              </p>
            )}
          </div>
        </fieldset>

        {/* Submit button */}
        <fieldset>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-button-links px-4 py-2 rounded-lg bg-primary/40 body-text text-black/50 hover:bg-primary hover:text-black ${isSubmitting ? `opacity-50 cursor-not-allowed` : ``}`}
          >
            {`${isSubmitting ? "Submitting..." : "Submit"}`}
          </button>
          <Modal
            open={openSubmission}
            onClose={handleModalClose}
            arial-labelledby="modal-modal-title"
            arial-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You have successfully booked your appointment!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Closing in {countDown} seconds...
              </Typography>
            </Box>
          </Modal>
        </fieldset>
      </form>
    </div>
  );
};

export default AppointmentForm;
