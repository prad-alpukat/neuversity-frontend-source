// alert("hello world")

// Pengulangan While 
let i = 0;
while (i < 5) {
    console.log("Testing " + i)

    // updater condition
    i = i + 1
}

// Function (tidak mengembalikan nilai)
function sayHello(nama, asal = "Yogyakarta", idEl = "helloText") {
    const text_el = document.getElementById(idEl)
    
    text_el.innerText = "Hello, Namaku " + nama + " dari " + asal
}
sayHello("Praditya")
sayHello("Anton", undefined, "testing")

// Function (mengembalikan nilai)
function helloDosen(nama_dosen, nama_mhs, prodi) {
    return `Hello, Pak ${nama_dosen}. Saya ${nama_mhs} dari ${prodi}`;
}

const hello = helloDosen("Doni", "Anton", "Teknik Komputer")

const content_el = document.getElementById("content")
// content_el.innerHTML = hello


// Latihan
const mhs = [
    {
        nama: "Anton",
        prodi: "Teknik Komputer"
    }, 
    {
        nama: "Budi",
        prodi: "Sistem Informasi"
    }
]

function printHelloDosen(data_mhs, nama_dosen, id_el) {
    const content_el = document.getElementById(id_el);

    let text = "";
    for (let i = 0; i < data_mhs.length; i++){
        const nama_mhs = data_mhs[i].nama;
        const prodi = data_mhs[i].prodi;
        const text_mhs = helloDosen(nama_dosen, nama_mhs, prodi);
        text = text + `<p>${text_mhs}</p>`;
    }
    content_el.innerHTML = text;
}

printHelloDosen(mhs, "Doni", "content")


// function update content
function updateHelloDosen() {
    // ambil element input
    const input_nama = document.getElementById("nama")
    const input_prodi = document.getElementById("prodi")

    // ambil data dari input
    const nama = input_nama.value
    const prodi = input_prodi.value
    const new_data = { nama, prodi } // masih kurang efektif
    
    // validasi sederhana bet, untuk cek input kosong
    // if (nama == "") {
    //     return alert("Nama tidak boleh kosong")
    // }
    nama === "" ? alert("Nama tidak boleh kosong") : undefined

    // update content
    // update array mhs
    mhs.push(new_data)

    // render ulang content
    printHelloDosen(mhs, "Doni", "content")

    // reset input
    input_nama.value = ""
    input_prodi.value = ""
}

const form_mhs = document.getElementById("formMhs")

form_mhs.addEventListener("submit", function (event) {
    event.preventDefault()
    updateHelloDosen()
})