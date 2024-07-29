import { useRouter } from 'next/router';
import Image from 'next/image';
import News from '../components/News/News';
import BusinessCarousel from '../components/Home/BusinessCarousel';
import ProductsCarousel from '../components/Home/ProductsCarousel';

const mainVideo = "/assets/videos/main.mp4";
const downArrow = "/assets/Home/downArrow.svg";
const tech1 = "/assets/Home/tech1.png";
const tech2 = "/assets/Home/tech2.png";
const tech3 = "/assets/Home/tech3.png";
const tech4 = "/assets/Home/tech4.png";
const boxArrow = "/assets/Home/boxArrow.svg";
const productsBackground = "/assets/Home/productsBackground.png";

const Home = () => {
    const router = useRouter();

    const navigate = (path) => {
        router.push(path);
    };

    return (
        <>
            <div className="relative w-full z-0" style={{ height: '100vh' }}>
                <video muted autoPlay loop playsInline className="w-full h-full object-cover">
                    <source src={mainVideo} type="video/mp4" />
                </video>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-sansRegular flex flex-col items-center">
                    Scroll Down
                    <img src={downArrow} alt="아래 화살표" className="mt-1 h-10" />
                </div>
            </div>

            <div className="flex flex-col items-center w-full my-24">
                <div className="text-6xl font-sansBold text-left ml-10 mb-9">
                    Technology
                </div>
                <div className="flex flex-wrap justify-center w-full max-w-full">
                    <div
                        className="relative cursor-pointer transition-all duration-300"
                        style={{ width: '25%', height: '534px' }}
                        onClick={() => navigate('/electroCatalyst')}
                    >
                        <Image
                            src={tech1}
                            alt="전기촉매필터"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute bottom-1/4 left-1/4 text-yellow-400 text-xl font-sansBold">
                            신개념 초격차
                            <div className="text-2xl font-sansBold text-white flex items-end">
                                전기촉매필터
                                <Image src={boxArrow} alt="boxArrow" width={36} height={36} className="ml-5 opacity-0 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative cursor-pointer transition-all duration-300"
                        style={{ width: '25%', height: '534px' }}
                        onClick={() => navigate('/tower')}
                    >
                        <Image
                            src={tech2}
                            alt="전기촉매타워"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute bottom-1/4 left-1/4 text-yellow-400 text-xl font-sansBold">
                            초고속
                            <div className="text-2xl font-sansBold text-white flex items-end">
                                전기촉매타워
                                <Image src={boxArrow} alt="boxArrow" width={36} height={36} className="ml-5 opacity-0 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative cursor-pointer transition-all duration-300"
                        style={{ width: '25%', height: '534px' }}
                        onClick={() => navigate('/filter')}
                    >
                        <Image
                            src={tech3}
                            alt="마이크로 여과필터"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute bottom-1/4 left-1/4 text-yellow-400 text-xl font-sansBold">
                            무약품 세정
                            <div className="text-2xl font-sansBold text-white flex items-end">
                                마이크로<br />여과필터
                                <Image src={boxArrow} alt="boxArrow" width={36} height={36} className="ml-5 opacity-0 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative cursor-pointer transition-all duration-300"
                        style={{ width: '25%', height: '534px' }}
                        onClick={() => navigate('/nanoBubble')}
                    >
                        <Image
                            src={tech4}
                            alt="울트라 나노버블"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute bottom-1/4 left-1/4 text-yellow-400 text-xl font-sansBold">
                            막힘 없는
                            <div className="text-2xl font-sansBold text-white flex items-end">
                                울트라<br />나노버블
                                <Image src={boxArrow} alt="boxArrow" width={36} height={36} className="ml-5 opacity-0 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center overflow-hidden">
                <div className="flex justify-end w-full">
                    <div className="text-6xl font-sansBold text-right mr-10 mb-9">
                        Business
                    </div>
                </div>
                <BusinessCarousel />
            </div>

            <div className="flex flex-col items-start w-full overflow-hidden mt-24" style={{
                backgroundImage: `url(${productsBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}>
                <div className="text-6xl font-sansBold text-white ml-10 mb-9 mt-24">
                    Products
                </div>
                <ProductsCarousel />
            </div>

            <div className="flex flex-col items-center justify-center w-11/12 mx-auto overflow-hidden mt-24">
                <div className="text-6xl font-sansBold mb-9">
                    News
                </div>
                <div className="flex flex-wrap justify-center w-full gap-1">
                    <News />
                </div>
            </div>
        </>
    );
};

export default Home;
