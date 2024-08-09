/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        loader: "imgix",
        path: "https://okbbs.co.kr",
        domains: ["okbbs.co.kr"], // 프로토콜 없이 도메인 이름만 사용합니다.
    },
    trailingSlash: false,
    output: "export", // 정적 호스팅을 위해 output에 export를 추가합니다.
};

export default nextConfig;