function passwordStrengthIfElse(password) {
    if (password.length > 7) {
      return 'Strong';
    } else {
      return 'Weak';
    }
  }
  

  function passwordStrengthTernary(password) {
    return password.length > 7 ? 'Strong' : 'Weak';
  }

  
  function passwordStrengthLogicalAnd(password) {
    return password.length > 7 && 'Strong' || 'Weak';
  }

  
  function passwordStrengthAdvanced(password) {
    return password.length > 7
      ? password.match(/[A-Z]/) ? 'Very Strong' : 'Strong'
      : 'Weak';
  }
  

  console.log(passwordStrengthIfElse("sadfadsfasd")) 
  console.log(  passwordStrengthTernary("asdfas")
  )
  console.log(  passwordStrengthLogicalAnd("dsf2f2323f")
  )
  console.log(  passwordStrengthAdvanced("12344AS322"))


