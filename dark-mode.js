document.addEventListener("DOMContentLoaded", function () {
    const toggleModeButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Mengecek apakah dark mode sebelumnya diaktifkan
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleModeButton.checked = true;
    }

    toggleModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('.btn-light').forEach(btn => btn.classList.toggle('dark-mode'));

        // Change icon
        const icon = toggleModeButton.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

        // Simpan preferensi dark mode di localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
