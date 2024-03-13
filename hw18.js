//task1
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

//task2
function processArray(array, check) {
    for (let i = 0; i < array.length; i++) {
      try {
        array[i] = check(array[i]);
      } catch (error) {
        return {
          error: error.message,
          index: i
        };
      }
    }
    return array;
  }
  
  const myArray = [1, 2, 3, '4', 5];
  
  const checkFunction = (el) => {
    if (typeof el !== 'number') {
      throw new Error('Not a number.');
    }
    return el;
  };
  
  try {
    const result = processArray(myArray, checkFunction);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
