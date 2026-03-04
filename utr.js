// Get payable amount
let amount = localStorage.getItem("NeXioa_payable_amount");

if (!amount || isNaN(amount) || Number(amount) <= 0) {
  alert("Invalid access. Please select course first.");
  window.location.href = "courses.html";
}

amount = Number(amount);
document.getElementById("payAmount").innerText = amount;

// Show coupon message if applied
let couponUsed = localStorage.getItem("NeXioa_coupon_applied");
if (couponUsed === "true") {
  document.getElementById("couponApplied").innerText = "🎉 30% Coupon Applied!";
}

// UTR Form Submission
document.getElementById("utrForm").addEventListener("submit", function(e){
  e.preventDefault();

  const utr = document.getElementById("utr").value.trim();

  // Validate numeric 6-20 digits
  if (!/^[0-9]{6,20}$/.test(utr)) {
    alert("Please enter a valid numeric UTR number.");
    return;
  }

  localStorage.setItem("NeXioa_user_utr", utr);

  // Redirect to Google Form
  window.location.href = "https://forms.gle/gcHBKHLmukhZCCoe9";
});
