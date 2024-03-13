import {Link, useNavigate} from 'react-router-dom';
import {Button, Label, TextInput, Alert, Spinner} from 'flowbite-react';
import { useState } from 'react';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all the fields!');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch ('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success===false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    }  catch(error){
      setErrorMessage(error.message);
      setLoading(false);

    }
};
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'> 
      {/*left */}
        <div className='flex-1'>
        <img style={{ marginLeft:'30px', width: '300px', height: 'auto',justifyContent: 'center' }} src='/src/assets/img/logo.png' alt='Logo' />
      <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-200 rounded-lg text-white'>
              PendekarSiber
            </span>
            Portal
          </Link>
          <p className='text-sm mt-5 text-center'>
             Join now as adventure awaits for you to explore!  
          </p>
        </div>

        {/*right */}
      <div className='p-10 flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Username'/>
            <TextInput 
              type='text'
              placeholder='Username'
              id='username' onChange={handleChange}/>
          </div> 
          <div>
            <Label value='Email'/>
              <TextInput 
                type='email'
                placeholder='name@email.com'
                id='email' onChange={handleChange} />
          </div>
          <div>
            <Label value='Password'/>
              <TextInput 
                type='password'
                placeholder='Password'
                id='password' onChange={handleChange} />
          </div>
          <Button color='blue'type='submit' disabled={loading}>
          {
            loading ? (
              <>
               <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
             
            ): (
             'Sign Up'
          )}
          </Button>
          <OAuth/>
        </form>
        <div className='flex gap-2 text-sm mt-5 text-center'>
          <span> Have an account?</span>
          <Link to ='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
        </div>
        { 
        errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
       
        
      <div className=''></div>
    
        </div>
      </div>
  );
}