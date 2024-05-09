// Function to check website status
function checkWebsite(url, monitorElement) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var status = xhr.status;
            var statusText = xhr.statusText;
            var timestamp = new Date().toLocaleTimeString();

            if (status >= 200 && status < 400) {
                monitorElement.querySelector('.status').textContent = 'Online';
                monitorElement.querySelector('.status').style.color = 'green';
            } else {
                monitorElement.querySelector('.status').textContent = 'Offline';
                monitorElement.querySelector('.status').style.color = 'red';
            }

            monitorElement.querySelector('.timestamp').textContent = timestamp;
        }
    };
    xhr.send();
}

// Check websites periodically
setInterval(function() {
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/', document.querySelectorAll('.monitor')[0]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/login/', document.querySelectorAll('.monitor')[1]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/admin-portal/admin-dashboard/', document.querySelectorAll('.monitor')[2]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/login/client-login/', document.querySelectorAll('.monitor')[3]);

    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/admin-portal/service-engineering-dashboard/', document.querySelectorAll('.monitor')[4]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/client-portal/support-center/', document.querySelectorAll('.monitor')[5]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/voip-portal/support-center/', document.querySelectorAll('.monitor')[6]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/login/voip-login/', document.querySelectorAll('.monitor')[7]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/login/document-library-login/', document.querySelectorAll('.monitor')[8]);
    checkWebsite('https://adamayliffe.github.io/cyberconnect-it/DocumentLibrary/', document.querySelectorAll('.monitor')[9]);
}, 1000); // Check every 1 seconds
