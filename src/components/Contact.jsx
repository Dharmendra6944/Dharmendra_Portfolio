import React from 'react';

const container = ` text-gray-200 py-20 px-2 md:px-8`;
const wrapper = `flex flex-col gap-3 justify-center items-center my-3`;
const title = `text-center text-amber-600 text-4xl font-bold`;
const titleDesc = `text-center text-xl`;
const contactForm = `flex flex-col gap-6 bg-gray-950 p-5 rounded-lg w-4/5 md:w-2/3 lg:w-1/2`;
const contactTitle = 'text-amber-600 font-semibold ml-2 text-xl';
const inputStyle = `bg-gray-700 h-14 p-3 rounded-lg`;
const inputStyleTextArea = 'bg-gray-700 p-3 rounded-lg';
const sendButton = `text-gray-950 font-semibold h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const message = formData.get('message');

    const mailtoLink = `mailto:sparjapati000@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div name='contact' className={container}>
        <div className={wrapper}>
          <div className={title}>Contact Me</div>
          <div className={titleDesc}>Feel free to reach out to me for any queries</div>
          <form action='' method='POST' className={contactForm} onSubmit={handleSubmit}>
            <div className={contactTitle}>Email Me</div>
            <input className={inputStyle} type="text" name='name' placeholder='Your Name' required />
            <input className={inputStyle} type="email" name='email' placeholder='Your Email' required />
            <textarea className={inputStyleTextArea} name='message' rows={6} placeholder='Message' required></textarea>
            <button className={sendButton} type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;