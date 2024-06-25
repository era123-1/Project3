
    // Mbyllja e modalit kur shtyp "x"
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('modal').style.display = 'none';
    });
  
  // Shfaqja e modalit kur shtyp "Buy This Property"
  document.getElementById('purchase-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  // Nëse përdoruesi konfirmon blerjen
  document.getElementById('confirm-purchase').addEventListener('click', function() {
    window.location.href = 'payment.html'; 
  });

 