// Ambil elemen form dan daftar tugas dari HTML
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Ambil data tugas dari localStorage (jika ada), atau inisialisasi dengan array kosong
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Fungsi untuk menampilkan semua tugas ke dalam elemen <ul>
function renderTasks() {
    taskList.innerHTML = ''; // Kosongkan isi <ul> agar tidak duplikat

    // Loop melalui setiap tugas di array
    tasks.forEach((task, index) => {
        // Buat elemen <li> untuk setiap tugas
        const li = document.createElement('li');
        
        // Tambahkan class "completed" jika tugas sudah selesai
        li.className = task.completed ? 'completed' : '';

        // Masukkan isi tugas dan tombol aksi ke dalam <li>
        li.innerHTML = `
            ${task.text}
            <div>
                <button onclick="toggleComplete(${index})">Selesai</button>
                <button onclick="deleteTask(${index})">Hapus</button>
            </div>
        `;

        // Tambahkan <li> ke dalam <ul>
        taskList.appendChild(li);
    });

    // Simpan ulang data tugas ke localStorage setiap kali render
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener untuk menambahkan tugas saat form disubmit
todoForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // Buat objek tugas baru dari input pengguna
    const newTask = {
        text: taskInput.value,   // Isi teks tugas
        completed: false         // Status awal belum selesai
    };

    // Tambahkan tugas ke array
    tasks.push(newTask);

    // Kosongkan input setelah ditambahkan
    taskInput.value = '';

    // Tampilkan ulang daftar tugas
    renderTasks();
});

// Fungsi untuk menandai tugas selesai atau belum
function toggleComplete(index) {
    // Toggle nilai boolean completed
    tasks[index].completed = !tasks[index].completed;

    // Tampilkan ulang daftar
    renderTasks();
}

// Fungsi untuk menghapus tugas dari array
function deleteTask(index) {
    tasks.splice(index, 1); // Hapus satu item di posisi index
    renderTasks();          // Tampilkan ulang daftar
}

// Tampilkan daftar tugas pertama kali saat halaman dimuat
renderTasks();