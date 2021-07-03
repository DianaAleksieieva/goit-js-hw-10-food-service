const body = document.querySelector('body');
const themCheckBox = document.getElementById('theme-switch-toggle');

themSettings()
themCheckBox.addEventListener("change", function(event) {
    if (event.target.checked) {
        body.setAttribute('class', 'dark-theme')
        localStorage.setItem("ui-theme", "dark-theme");
        
    } else {
        body.setAttribute('class', 'light-theme')
        localStorage.setItem("ui-theme", "light-them");
  }
});

function themSettings() {
    const savedThem = localStorage.getItem("ui-theme")
    if (savedThem) {
        body.setAttribute('class', savedThem);
        if (savedThem === 'dark-theme') {
            themCheckBox.setAttribute('checked', 'checked')
        }
        else {
            themCheckBox.removeAttribute('checked', 'checked')
        }
    }
}
