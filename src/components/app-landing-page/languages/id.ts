import { IAppLandingPageResource } from "./types";

const step5Description = "Silakan gunakan akun taruhan yang diberikan oleh Upline Anda untuk login.";
export const id: IAppLandingPageResource = {
    appDownload: "UNDUH APLIKASI",
    introductions: [
        '"Menawarkan variasi dan Permainan Hiburan yang tinggi,',
        `selalu ada sesuatu yang <span class='{0}'>baru untuk dimainkan</span>"`,
    ],
    descriptions: [
        "Hiburan Online Kasino Luar Biasa",
        "Pemain dapat memilih untuk bermain melalui <span class='{0}'>Browser Web</span> atau <span class='{0}'>Aplikasi</span>",
        "Lebih Instan! Lebih nyaman!",
    ],
    installationGuide: "PETUNJUK INSTALASI",
    steps: [
        {
            title: "Langkah 1",
            content: {
                ios: "Gunakan ponsel untuk memindai kode QR atau Ketuk ikon App Store untuk mengunduh.",
                android: "Gunakan ponsel untuk memindai kode QR atau Ketuk ikon Google Play untuk mengunduh.",
            },
            image: "example-step1",
        },
        {
            title: "Langkah 2",
            content: {
                ios: `Pilih <span class='{0}'>"OK"</span> untuk mengalihkan ke App Store.`,
                android: `Setelah pengunduhan selesai, pilih <span class='{0}'>"Open"</span> untuk memulai penginstalan.`,
            },
            image: "example-step2",
        },
        {
            title: "Langkah 3",
            content: {
                ios: `Anda akan dialihkan ke <span class='{0}'>VivaDzo</span> di App Store alih-alih "SABA.games". Ketuk <span class='{0}'>GET</span> untuk menginstal aplikasi "VivaDzo".`,
                android: `Pilih <span class='{0}'>"Install"</span> untuk melanjutkan.`,
            },
            image: "example-step3",
        },
        {
            title: "Langkah 4",
            content: {
                ios: `Buka "<span class='{0}'>VivaDzo</span>" untuk meluncurkan aplikasi "SABA.games". Jika Aplikasi tidak membuka SABA.games - halaman login <span class='{0}'>(Langkah 5)</span> dengan benar. Harap <span class='{0}'>pindai ulang</span> Kode QR atau <span class='{0}'>ketuk</span> ikon App Store untuk menyelesaikan masalah.`,
                android: `Pilih <span class='{0}'>"Open"</span> untuk meluncurkan aplikasi "SABA.games".`,
            },
            image: "example-step4",
        },
        {
            title: "Langkah 5",
            content: {
                ios: step5Description,
                android: step5Description,
            },
            image: "example-step5",
        },
    ],
};
