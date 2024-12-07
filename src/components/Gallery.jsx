import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Gallery = () => {
    const images = [
        { id: 1, src: '1.jpg', alt: 'Image 1' },
        { id: 2, src: '2.jpg', alt: 'Image 2' },
        { id: 3, src: '3.jpg', alt: 'Image 3' },
        { id: 4, src: '4.jpg', alt: 'Image 4' },
    ];

    return (
        <div className='py-10 bg-gray-100 relative' id='gallery'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>Random</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {
                        images.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
}

export default Gallery;
