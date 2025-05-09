document.addEventListener('DOMContentLoaded', function () {
  const typingEffect = document.querySelector('.typing-effect');
  const text = "Building the future with AI and technology.";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingEffect.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
