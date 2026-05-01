import React from 'react'
import Dashboard from './Dashboard'
import { MdOutlineVideoCall } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Meetingspage = () => {
    const user = "Nitin"

    const meetingSlides = [
        {
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop",
            title: "Plan meetings faster",
            text: "Create and join meetings instantly with your team."
        },
        {
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&auto=format&fit=crop",
            title: "Collaborate anywhere",
            text: "Stay connected with teammates from any location."
        },
        {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop",
            title: "Work smarter",
            text: "Keep your meetings organized and productive."
        },
        {
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop",
            title: "Share ideas easily",
            text: "Discuss, present, and make decisions together."
        }
    ]

  return (
    <div className='flex'>

      <Dashboard />
      <section className="w-full h-screen bg-aboutHeading/20 flex flex-col pt-20 items-center">
          <div className='flex flex-col gap-3 items-center'>
              <h1 className="text-3xl font-semibold">Welcome Back {user}</h1>
              <h1 className="text-2xl font-medium">Here's what's happening with your meetings</h1>
              <span className="text-xl text-gray-600">Connect, Collaborate from anywhere with Memix Meetings</span>
          </div>
          <div className="flex gap-3  p-10">
              <button className="bg-accent border-none rounded-xl p-3 flex items-center font-semibold">
                  <MdOutlineVideoCall
                  size={30}
                  className="mr-2"/>
                  Start New Meeting
              </button>

              <input className="p-3 border border-accent/80 font-semibold text-accent rounded-xl outline-accent" type="text" placeholder='Enter a code or link' />
              <button>Join</button>
          </div>
          <div className="h-px  bg-gray-800 "></div>

          <div className="w-[60%] mt-10 relative">
              <button className="meeting-swiper-prev absolute left-[-60px] top-1/2 z-10 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-semibold text-accent hover:bg-accent hover:text-white transition">
                  ‹
              </button>

              <button className="meeting-swiper-next absolute right-[-60px] top-1/2 z-10 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-semibold text-accent hover:bg-accent hover:text-white transition">
                  ›
              </button>

              <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                      prevEl: '.meeting-swiper-prev',
                      nextEl: '.meeting-swiper-next',
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                      768: {
                          slidesPerView: 2,
                      },
                      1024: {
                          slidesPerView: 3,
                      },
                  }}
                  className="pb-12"
              >
                  {meetingSlides.map((slide, index) => (
                      <SwiperSlide key={index}>
                          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-6 shadow-md">
                              <div className="w-40 h-40 rounded-full overflow-hidden mb-5 border-4 border-accent/40">
                                  <img
                                      src={slide.image}
                                      alt={slide.title}
                                      className="w-full h-full object-cover"
                                  />
                              </div>

                              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                  {slide.title}
                              </h2>

                              <p className="text-gray-600 leading-relaxed">
                                  {slide.text}
                              </p>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
      </section>

    </div>
  )
}

export default Meetingspage
