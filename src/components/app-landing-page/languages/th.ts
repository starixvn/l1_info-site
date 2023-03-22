import { IAppLandingPageResource } from "./types";

export const th: IAppLandingPageResource = {
    appDownload: "ดาวน์โหลดแอป",
    introductions: ["นำเสนอเกมที่มีความหลากหลายและความบันเทิงสูงด้วยวิธีการเล่นใหม่ ๆ อยู่เสมอ"],
    descriptions: [
        "สุดยอดแพลตฟอร์มคาสิโนออนไลน์",
        "ผู้เล่นสามารถเลือกเล่นผ่าน<span class='{0}'>เว็บเบราว์เซอร์</span>หรือ<span class='{0}'>แอพมือถือ</span>",
        "ทันใจยิ่งขึ้น! สะดวกกว่า!",
    ],
    installationGuide: "คู่มือการติดตั้ง",
    steps: [
        {
            title: "ขั้้นตอนที่ 1",
            content: "ใช้โทรศัพท์มือถือสแกน QR Code หรือแตะที่ไอคอน App Store เพื่อดาวน์โหลด",
            image: "example-step1",
        },
        {
            title: "ขั้้นตอนที่ 2",
            content: "Select <span class='{0}'>Get the App</span> to redirect to App Store",
            image: "example-step2",
        },
        {
            title: "ขั้้นตอนที่ 3",
            content: `คุณจะถูกเปลี่ยนเส้นทางไปยัง <span class='{0}'>VivaDzo</span> ใน App Store แทน "SABA.games" แตะ <span class='{0}'>GET</span> เพื่อติดตั้งแอป VivaDzo`,
            image: "example-step3",
        },
        {
            title: "ขั้้นตอนที่ 4",
            content: `เปิด <span class='{0}'>VivaDzo</span> เพื่อเปิดแอป "SABA.games"`,
            image: "example-step4",
        },
        {
            title: "ขั้้นตอนที่ 5",
            content: "โปรดใช้บัญชีเดิมพันที่อัพไลน์มอบให้เพื่อเข้าสู่ระบบ",
            image: "example-step5",
        },
    ],
};
