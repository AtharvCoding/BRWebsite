function copyCode() {
    const codeText = 'devtools::install_github("atharvdeshpande/brainRot")';
    
    // Create a temporary textarea element to copy the text
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = codeText;
    document.body.appendChild(tempTextArea);
    
    // Select and copy the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        showAlert();
    } catch (err) {
        console.error('Failed to copy text: ', err);
        // Fallback for modern browsers
        if (navigator.clipboard) {
            navigator.clipboard.writeText(codeText).then(() => {
                showAlert();
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    }
    
    // Remove the temporary element
    document.body.removeChild(tempTextArea);
}

function showAlert() {
    const alert = document.getElementById('alert');
    alert.classList.add('show');
    
    // Hide the alert after 3 seconds
    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
}

// Add some smooth scrolling behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior to any internal links if needed
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});