let count = 0;

let value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        value.textContent = count;

        if (count > 0) {
            value.style.color = "#234f1e";
        }
        if (count < 0) {
            value.style.color = "maroon";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
    });
});