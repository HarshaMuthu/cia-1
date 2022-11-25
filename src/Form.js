import './form.css';

function submit() {
    let username = String(document.querySelector("[data-testid='username']").value);
    let error1 = document.getElementById("error1");
    if (username.length === 0) {
        document.querySelector("[data-testid='username']").style.border = "2px solid red";
        error1.innerHTML = "Username is required";
        error1.style.color = "red";
    }
    

    let email = String(document.querySelector("[data-testid='email']").value);
    let error2 = document.getElementById("error2");
    if (email.length === 0) {
        document.querySelector("[data-testid='email']").style.border = "2px solid red";
        error2.innerHTML = "Email is required";
        error2.style.color = "red";
    }

    let password = String(document.querySelector("[data-testid='password']").value);
    let error3 = document.getElementById("error3");
    if (password.length === 0) {
        document.querySelector("[data-testid='password']").style.border = "2px solid red";
        error3.innerHTML = "Password is required";
        error3.style.color = "red";
    } else {
        var score = 0;
        for (var i = 0; i < password.length; i++) {
            if (password[i].match(/[a-z]/)) {
                score++;
                break;
            }
        }
        for (i = 0; i < password.length; i++) {
            if (password[i].match(/[A-Z]/)) {
                score++;
                break;
            }
        }
        for (i = 0; i < password.length; i++) {
            if (password[i].match(/[0-9]/)) {
                score++;
                break;
            }
        }
        for (i = 0; i < password.length; i++) {
            if (password[i].match(/[!@#$%^&*()]/)) {
                score++;
                break;
            }
        }
        if (score === 1) {
            error3.innerHTML = "Password is Weak";
            error3.style.color = "red";
            document.querySelector("[data-testid='password']").style.border = "2px solid red";
        } else if (score === 2) {
            error3.innerHTML = "Password is Good";
            error3.style.color = "orange";
            document.querySelector("[data-testid='password']").style.border = "2px solid orange";
        } else if (score === 3) {
            error3.innerHTML = "Password is Strong";
            error3.style.color = "lightgreen";
            document.querySelector("[data-testid='password']").style.border = "2px solid lightgreen";
        } else if (score === 4) {
            error3.innerHTML = "Password is Very Strong";
            error3.style.color = "green";
            document.querySelector("[data-testid='password']").style.border = "2px solid green";
        }
    }
}

function App() {
    return (
        
        <div className="App">
            <div className="Form">
                <div className="input">
              
                    <label>Enter your username</label>
                    <input type="text" placeholder="your Username" data-testid="username" minLength="1" />
                    <p id="error1"></p>
                </div>
                <div className="input">
                    <label>Enter your email</label>
                    <input type="email" placeholder="Your Email" data-testid="email" minLength="1" />
                    <p id="error2"></p>
                </div>
                <div className="input">
                    <label>Enter your password</label>
                    <input type="password" placeholder="your Password" data-testid="password" minLength="1" />
                    <p id="error3"></p>
                </div>
                <button type="submit" data-testid="submit" onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default App;