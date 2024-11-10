// services.js

// Function to handle service booking
function handleBooking(serviceId, serviceName, servicePrice) {
  // Display a confirmation alert using SweetAlert2
  Swal.fire({
    title: `Book ${serviceName}?`,
    text: `You are about to book the ${serviceName} service for ₹${servicePrice}`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, Book It!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      // If confirmed, show a success message
      Swal.fire({
        title: `${serviceName} Booked!`,
        text: `Your ${serviceName} service has been successfully booked.`,
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    }
  });
}

// Function to check if image is loaded properly
function checkImageLoaded(imgElement) {
  if (!imgElement.complete || imgElement.naturalWidth === 0) {
    // If image failed to load, set a fallback image
    imgElement.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
  }
}

// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to all "Book Service" buttons
  const bookButtons = document.querySelectorAll('.bookservice');
  
  bookButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // Get the service ID and details from the button's ID and sibling elements
      const serviceId = e.target.id;
      const serviceCard = e.target.closest('.card-body-service');
      const serviceName = serviceCard.querySelector('.heading').textContent.trim();
      const servicePrice = serviceCard.querySelector('.price').textContent.replace('₹', '').trim();
      
      // Call the handleBooking function with the service details
      handleBooking(serviceId, serviceName, servicePrice);
    });
  });

  // Check all images to ensure they load properly
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Check if the image is loaded successfully
    img.onload = () => {
      console.log(`Image loaded: ${img.src}`);
    };

    // If the image failed to load, use a fallback image
    img.onerror = () => {
      checkImageLoaded(img);
    };
  });
});
