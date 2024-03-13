function validateForm(data) {
    if (!data.email.includes('@')) {
      throw new Error('Wrong email.');
    }
    if (data.password.length < 6) {
      throw new Error('Short password.');
    }   
    return true;
  }
  

  try {
    const dataEx = {
      email: 'qwerty@gmail.com',
      password: '12311312123123',
    };
    const isValid = validateForm(dataEx);
    console.log('Validate Form:', isValid);
  } catch (error) {
    console.error(error.message);
  }
