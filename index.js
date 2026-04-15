function createLoginTracker(userinfo) {
  let attemptCount = 0;
  return(passworfAttempt) => {
    attemptCount++;
    if (passworfAttempt === userinfo.password && attemptCount <= 3) {
      return 'Login successful';
    }
    if (attemptCount > 3) {
      return 'Account locked';
    }
    return 'Login failed';
  };

}
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};