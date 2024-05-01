document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check credentials (You can replace this with your own authentication logic)
    if (username === 'Admin' && password === 'Admin123') {
      // Redirect to the page for user1
      window.location.href = '/cyberconnect-it/client-portal/support-center/';
    } else if (username === 'aayliffe' && password === '!AnA160818!') {
      // Redirect to the page for user2
      window.location.href = '/cyberconnect-it/client-portal/support-center/';
    } else if (username === 'jehioghae' && password === 'Je2024!') {
        // Redirect to the page for user2
        window.location.href = '/cyberconnect-it/client-portal/support-center/';
      } else if (username === 'rmaxwell' && password === 'Rm2024!') {
        // Redirect to the page for user2
        window.location.href = '/cyberconnect-it/client-portal/support-center/';
      } else if (username === 'jr' && password === 'Jr2024!') {
        // Redirect to the page for user2
        window.location.href = '/cyberconnect-it/client-portal/support-center/';
      }

     else {
      // Display error message
      document.getElementById('error-message').innerText = 'Invalid username or password';
    }
  });
  