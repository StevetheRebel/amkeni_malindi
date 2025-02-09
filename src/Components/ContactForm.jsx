import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    console.log('data:', data)
    reset()
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)} name="contactForm" id="contactForm" autoComplete="yes" ref={form}>
        <div className="flex flex-col gap-6 py-4">
          {/* Name */}
          <fieldset className="border-b-2 border-black">
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="pb-4 body-text w-full focus:outline-none focus:border-none"
              placeholder="Your Name"
              {...register("fullName")}
            />
          </fieldset>
          <fieldset className="border-b-2 border-black">
            <input
              type="email"
              name="contactemail"
              id="contactId"
              className="pb-4 body-text w-full focus:outline-none focus:border-none"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid Email Address",
                }
              })}
            />
            {errors.email && (
                <p className="text-secondary/90 text-[10px] xs:text-sm">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="border-b-2 border-black">
            <input
              type="text"
              name="msgSubject"
              id="msgSubject"
              className="pb-4 body-text w-full focus:outline-none focus:border-none"
              placeholder="Subject"
              {...register("msgSubject")}
            />
          </fieldset>
          <fieldset className="border-b-2 border-black">
            <textarea
              name="userMessage"
              id="userMessage"
              className="pb-4 body-text w-full focus:outline-none focus:border-none"
              placeholder="Your Message"
              rows={8}
              {...register("userMessage", {
                required: "Add a message before submiting"
              })}
            ></textarea>
            {errors.userMessage && (
                <p className="text-secondary/90 text-[10px] xs:text-sm">{errors.userMessage.message}</p>
            )}
          </fieldset>
        </div>
        <button type="submit" className="py-2 text-center bg-muted text-white w-full uppercase font-subheading hover:bg-black mb-4">submit</button>
      </form>
    </>
  );
}

export default ContactForm;
