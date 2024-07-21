import React from 'react'
import LogInPrenstation from './LogInPrenstation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LogIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
      email: '',
      password: ''
  });

  function handleUserInput(e) {
      const {name, value} = e.target;
      setLoginData({
       ...loginData,
       [name]: value
      })
   }   
   
   async function handleFormSubmit(e) {
    e.preventDefault(); // prevent the form from reloading the page
    console.log(loginData);

    // Add validations for the form input
    if(!loginData.email || !loginData.password ) {
        toast.error("Missing values from the form")
        return;
    }

    // check email
    if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
        toast.error("Invalid email address")
        return;
    }

    const apiReponse = await dispatch(login(loginData));
    console.log("Api response", apiReponse);
    if(apiReponse.payload.data.success) {
        navigate('/');
    }
}

  return (
    <LogInPrenstation 
      handleUserInput={handleUserInput}
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default LogIn
