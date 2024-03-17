const account ={
    owner: "Prayuth Snow",
    user: "yuth",
    psw: "1111",
};
const account2 = {
    owner: "Lisa Lazoo",
    user: "lisa",
    psw: "abcd"
};
 const accounts = [account,account2];
 // ใช้คำสั่ง find หา lisa แล้วค่อยหาตาม username
const btnLogin = document.querySelector(".login_btn");
const inputLoginUser = document.querySelector(".login_input--user");
const inputLoginPsw = document.querySelector(".login_input--psw");
const iblWelcome = document.querySelector(".welcome");

let currentAcc;

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const user = inputLoginUser.value;
    const psw = inputLoginPsw.value;

    currentAcc = accounts.find((acc) => acc.user === user);
    console.log(currentAcc);

    if (user === "admin" && psw === "1234") {
        iblWelcome.textContent = `ยินดีต้อนรับ ${user}`;
    }
});
