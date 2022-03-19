const mySubmit = () =>{
    const name = document.getElementById("name").value
    const pass = document.getElementById("psw").value
    const email = document.getElementById("email").value
    console.log("test");

    localStorage.setItem("name",name);
    localStorage.setItem("pass",pass);
    localStorage.setItem("email",email);

    window.location.replace("http://127.0.0.1:5500/result.html");
}