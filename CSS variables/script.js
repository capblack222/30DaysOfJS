const inputs = document.querySelectorAll(".container input");
const styleH1 = document.querySelector("#h1_text");

function update() {
    // console.log(this.value);
    const suffix = this.dataset.suffix || '';
    document.documentElement.style.setProperty(`--${this.dataset.name}`, this.value + suffix);
    if (this.dataset.name == "color") {
        styleH1.style.color = this.value;
        // console.log(styleH1.style);
    }
}

inputs.forEach(input => input.addEventListener("change", update));
inputs.forEach(input => input.addEventListener("mousemove", update));
