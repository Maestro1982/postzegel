const SignInForm = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[250px] md:w-[350px] border-[2px] border-[#b5d6b2] bg-[#5a464c] rounded-md'>
        <h1 className='text-center text-[20px] md:text-[24px] text-[#ffefbd] mt-1 underline'>
          Inloggen
        </h1>
        <div className='flex flex-col'>
          <label htmlFor='email' className='p-2 text-[#ffefbd] mb-0'>
            Email
          </label>
          <input type='email' name='email' id='email' className='input-field' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='p-2 text-[#ffefbd] mb-0'>
            Wachtwoord
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='input-field'
          />
        </div>
        <div className='flex justify-center mt-5'>
          <button className='button'>Login</button>
        </div>
      </div>
    </div>
  );
};
export default SignInForm;
