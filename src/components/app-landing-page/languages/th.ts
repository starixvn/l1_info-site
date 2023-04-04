import { IAppLandingPageResource } from "./types";

const step5Description = "โปรดใช้บัญชีเดิมพันที่อัพไลน์มอบให้เพื่อเข้าสู่ระบบ";

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
            content: {
                ios: "ใช้โทรศัพท์มือถือสแกน QR Code หรือแตะที่ไอคอน App Store เพื่อดาวน์โหลด",
                android: `ใช้โทรศัพท์สแกนรหัส QR หรือแตะที่ไอคอน Google Play เพื่อดาวน์โหลด`,
            },
            image: "example-step1",
        },
        {
            title: "ขั้้นตอนที่ 2",
            content: {
                ios: `เลือก <span class='{0}'>"OK"</span> เพื่อเปลี่ยนเส้นทางไปยัง App Store`,
                android: `หลังจากดาวน์โหลดเสร็จแล้ว เลือก <span class='{0}'>"Open"</span> เพื่อเริ่มการติดตั้ง`,
            },
            image: "example-step2",
        },
        {
            title: "ขั้้นตอนที่ 3",
            content: {
                ios: `คุณจะถูกเปลี่ยนเส้นทางไปยัง <span class='{0}'>VivaDzo</span> ใน App Store แทน "SABA.games" แตะ <span class='{0}'>GET</span> เพื่อติดตั้งแอป "VivaDzo"`,
                android: `เลือก <span class='{0}'>"Install"</span> เพื่อดำเนินการต่อ`,
            },
            image: "example-step3",
        },
        {
            title: "ขั้้นตอนที่ 4",
            content: {
                ios: `เปิด <span class='{0}'>VivaDzo</span> เพื่อเปิดแอป "SABA.games"`,
                android: ` เลือก <span class='{0}'>"Open"</span> เพื่อเข้าสู่แอป "SABA.games"`,
            },
            image: "example-step4",
        },
        {
            title: "ขั้้นตอนที่ 5",
            content: {
                ios: step5Description,
                android: step5Description,
            },
            image: "example-step5",
        },
    ],
};
