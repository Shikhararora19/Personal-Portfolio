import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const contact = () => {
  const [form,setForm] = useState({name:'',email:'',message:''})
  const formRef = useRef(null);
  const [isLoading,setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_q0a6qq3',
      'template_42bzaql',
      {
        from_name: form.name,
        to_name: "Shikhar",
        from_email: form.email,
        to_email: 'shikhararora132@gmail.com',
        message: form.message
      },
      'uaTVw7vCgg2IL1lHt'
    ).then(() => {
      setIsLoading(false);
      
    }).catch((Error) => {
      setIsLoading(false);
      console.log(Error);
    })

  };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' 
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold' >Name</label>
          <input 
          type='text' name='name' className='input' placeholder='john' required value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}></input>
          <label className='text-black-500 font-semibold' >Email</label>
          <input 
          type='email' name='email' className='input' placeholder='johndoe@gmail.com' required value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}></input>
          <label className='text-black-500 font-semibold' >Message</label>
          <textarea 
           name='message' rows={4} className='input' placeholder='How can I help you?' required value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}></textarea>
          <button type='submit' className='btn' 
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isLoading}>{isLoading?'Sending...':'Send'}</button>

        </form>
      </div>


    </section>
  )
}

export default contact