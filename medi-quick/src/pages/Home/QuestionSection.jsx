import React from "react";
import { toast } from "react-hot-toast";

const QuestionSection = () => {
  const handleSendMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const msgObj = {
      name,
      email,
      subject,
      message,
    };
    //save info
    // fetch("https://oitech-server.vercel.app/api/v1/messages", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(msgObj),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     toast.success("Message Send Successfully");
    //     form.reset();
    //   });
  };
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="py-12">
          <h1 className="text-5xl font-bold">
            Have Any Questions? Let's Answer Them
          </h1>
          <p className="py-6 text-center font-bold italic">
            "Don't take chances with your health - Choose MediQuick for reliable
            counterfeit drug detection"
          </p>
          <form onSubmit={handleSendMessage}>
            <div className="flex gap-4">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-primary font-bold">
                    Name <strong className="text-error">*</strong>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input input-bordered border-primary"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Email <strong className="text-error">*</strong>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered border-primary"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Subject <strong className="text-error">*</strong>
                </span>
              </label>
              <input
                type="text"
                name="subject"
                required
                className="input input-bordered border-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary font-bold">
                  Message <strong className="text-error">*</strong>
                </span>
              </label>

              <textarea
                required
                name="message"
                className="textarea textarea-bordered border-primary textarea-lg w-full"
              ></textarea>
            </div>
            <button className="my-6 btn btn-wide btn-primary">
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
