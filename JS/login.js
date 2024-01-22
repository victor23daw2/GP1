window.onload = () => {
  document.getElementById("botoEnvia").onclick = () => {
    let email = document.getElementById("email").value;
    let passwd = document.getElementById("passwd").value;

    console.log(`Email: ${email}, passwd: ${passwd}`);
  };
};
