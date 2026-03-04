// Get stored values from localStorage
const payableAmount = localStorage.getItem("NeXioa_payable_amount") || 0;
const selectedCourse = localStorage.getItem("selectedCourse") || "Selected Course";

// Fill the payment page automatically
document.getElementById("totalAmount").innerText = payableAmount;
document.getElementById("payAmount").innerText = payableAmount;
document.getElementById("courseName").innerText = selectedCourse;

// Form Submission
document.getElementById("paymentForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if(!name || !email || !phone){
    alert("Please fill all details.");
    return;
  }

  // Store user details if needed for step 2
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);

  // Redirect to next payment step
  window.location.href = "payment-step2.html";
});
