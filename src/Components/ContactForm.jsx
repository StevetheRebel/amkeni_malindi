import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { addContactMessages } from "../firebase";
import { Modal } from "@mui/material";

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

function ContactForm({ closeReach }) {
  const [isSubmitting, setIsSubmitting] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      await addContactMessages({
        name: data.fullName,
        email: data.email,
        subject: data.msgSubject,
        message: data.userMessage,
      });

      console.log(data);
      

      closeReach()
      reset();
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        name="contactForm"
        id="contactForm"
        autoComplete="yes"
        ref={form}
      >
        <div className="flex flex-col gap-6 py-4">

        <input type="text" name="Message" id="message" defaultValue={`Message`} className="hidden" />

          {/* Name */}
          <fieldset className="border-b-2 border-black">
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="pb-4 body-text w-full focus:outline-none focus:border-none md:pb-2"
              placeholder="Your Name"
              {...register("fullName")}
            />
          </fieldset>

          {/* Email */}
          <fieldset className="border-b-2 border-black">
            <input
              type="email"
              name="contactemail"
              id="contactId"
              className="pb-4 body-text w-full focus:outline-none focus:border-none md:pb-2"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid Email Address",
                },
              })}
            />
            {errors.email && (
              <p className="text-secondary/90 text-[10px] xs:text-sm">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Subject */}
          <fieldset className="border-b-2 border-black">
            <input
              type="text"
              name="msgSubject"
              id="msgSubject"
              className="pb-4 body-text w-full focus:outline-none focus:border-none md:pb-2"
              placeholder="Subject"
              {...register("msgSubject")}
            />
          </fieldset>

          {/* Message */}
          <fieldset className="border-b-2 border-black">
            <textarea
              name="userMessage"
              id="userMessage"
              className="pb-4 body-text w-full focus:outline-none focus:border-none md:pb-2"
              placeholder="Your Message"
              rows={4}
              {...register("userMessage", {
                required: "Add a message before submiting",
              })}
            ></textarea>
            {errors.userMessage && (
              <p className="text-secondary/90 text-[10px] xs:text-sm">
                {errors.userMessage.message}
              </p>
            )}
          </fieldset>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-2 text-center bg-muted text-white w-full uppercase font-subheading hover:bg-black mb-4"
        >
          {
            `${isSubmitting ? "Submitting..." : "Submit"}`
          }
        </button>
        
      </form>
    </>
  );
}

export default ContactForm;
