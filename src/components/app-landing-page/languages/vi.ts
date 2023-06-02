import { IAppLandingPageResource } from "./types";

const step5Description = "Vui lòng đăng nhập bằng tài khoản được cấp bởi quản lý cấp trên của bạn.";

export const vi: IAppLandingPageResource = {
    appDownload: "TẢI ỨNG DỤNG",
    introductions: [
        '"Cung Cấp Nhiều Thể Loại Game Mang Đậm Tính Giải Trí',
        `Và Luôn Có Các <span class='{0}'>Game Mới</span> Chờ Đón Bạn"`,
    ],
    descriptions: [
        "Nền Tảng Casino Trực Tuyến Được Yêu Thích Nhất",
        "Có Thể Chơi Qua <span class='{0}'>Trình Duyệt Web</span> Hoặc <span class='{0}'> Ứng Dụng Di Động</span>",
        "Nhanh Chóng! Thuận Tiện!",
    ],
    installationGuide: "HƯỚNG DẪN CÀI ĐẶT",
    steps: [
        {
            title: "Bước 1",
            content: {
                ios: "Dùng điện thoại để quét mã QR hoặc nhấn vào biểu tượng App Store để tải ứng dụng.",
                android: "Dùng điện thoại để quét mã QR hoặc nhấn vào biểu tượng Google Play để tải ứng dụng.",
            },
            image: "example-step1",
        },
        {
            title: "Bước 2",
            content: {
                ios: "Chọn <span class='{0}'>OK</span> để mở App Store.",
                android: `Sau khi tệp tin được tải xuống, chọn <span class='{0}'>Open</span> để bắt đầu cài đặt`,
            },
            image: "example-step2",
        },
        {
            title: "Bước 3",
            content: {
                ios: `Bạn sẽ được chuyển tiếp đến ứng dụng <span class='{0}'>VivaDzo</span> trên App Store thay vì SABA.games. Bấm <span class='{0}'>NHẬN</span> để cài ứng dụng "VivaDzo" trên iphone.`,
                android: `Chọn <span class='{0}'>Install</span> để tiếp tục.`,
            },
            image: "example-step3",
        },
        {
            title: "Bước 4",
            content: {
                ios: `Mở ứng dụng <span class='{0}'>VivaDzo</span> để bắt đầu trải nghiệm SABA.games. Nếu bạn không thể truy cập giao diện đăng nhập SABA.games <span class='{0}'>(Bước 5)</span>. Vui lòng <span class='{0}'>quét</span> lại mã QR hoặc <span class='{0}'>nhấn</span> vào biểu tượng App Store để thử lại.`,
                android: `Chọn <span class='{0}'>Open</span> để bắt đầu trải nghiệm SABA.games.`,
            },
            image: "example-step4",
        },
        {
            title: "Bước 5",
            content: {
                ios: step5Description,
                android: step5Description,
            },
            image: "example-step5",
        },
    ],
};
