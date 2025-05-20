function copyEmail() {
  const email = document.getElementById('email-address').textContent;
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.classList.add('copied');
    btn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<ion-icon name="copy-outline"></ion-icon>';
    }, 1200);
  });
}
