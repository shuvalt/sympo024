import Image from 'next/image'

import Photohunt from '@/public/images/Photohunt.jpg'
import Secondwin222 from '@/public/images/Secondwin222.jpg'
import Beg3 from '@/public/images/Beg3.jpeg'
import Logo2 from '@/public/images/Logo2.jpg'
import Sense5 from '@/public/images/Sense5.jpeg'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">A List of Non-Tech Events</h2>

            <p className="text-xl font-style: italic; text-gray-400">"Where Hearts Meet: Non-Tech Events for Real Connections!"</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={Photohunt} width={100} height={100} alt="Photohunt" />
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg> */}
              <br/>
              <h4 className="font-bold text-2xl ... font-mono h4 mb-2">PHOTO HUNT</h4>
              {/* <br/> */}
              <p className="font-mono tracking-wide text-lg text-gray-400 text-center">"At the symposium, participants are tasked with capturing the beauty of insects, sunrise, flowers at  AUBIT campus through unedited photographs. The competition emphasizes authenticity and will be scrutinized by a panel of judges. The winner will leave a lasting impression on the audience."</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={Secondwin222} width={100} height={48} alt="Secondwin222" />
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg> */}
              <br/>
              <h4 className="font-bold text-2xl ... font-mono h4 mb-2">SECONDS T0 WIN </h4>
              <p className="font-mono tracking-wide text-lg text-gray-400 text-center">"Seconds To Win" is a thrilling event with three 60-second challenges: "Coin Tower Triumph" (coin stacking), "Paper Cup Challenge" (propelling a cup using a straw), and "Cup Ball Blast" (blowing a ball into cups). The event spans three levels, each with a different time limit. Agility, focus, and controlled breaths are key."</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={Beg3} width={100} height={48} alt="Knife" />
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg> */}
              <br/>
              <h4 className="font-bold text-2xl ... font-mono h4 mb-2">BEG BORROW STEAL</h4>
              <p className="font-mono tracking-wide text-lg text-gray-400 text-center">"Beg Borrow Steal: Join the ultimate challenge where participants race against the clock to acquire items through wit, negotiation, and resourcefulness. Compete, strategize, and triumph in this thrilling game of cunning and creativity!"</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={Logo2} width={100} height={48} alt="Logo" />
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg> */}
              <br/>
              <h4 className="font-bold text-2xl ... font-mono h4 mb-2">LOGO QUEST</h4>
              {/* <img className="float-left ..." src="../Sympo024/public"></img> */}
              <p className="font-mono tracking-wide text-lg text-gray-400 text-center ">"The logo identification game challenges players to recognize and correctly identify various logos from different "Brands and Application logos". Players are presented with images of logos, and their task is to quickly and accurately name the corresponding brands."</p>
            </div>

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]"> */}
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg> */}
              {/* &nbsp;
              <h4 className="font-bold text-2xl ... font-mono h4 mb-2">EVENT 04</h4> 
              <p className="font-mono tracking-wide text-lg text-gray-400 text-center"></p>
            </div> */}

            {/* 6th item */}

            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg> */}
               <Image className="rounded-full" src={Sense5} width={100} height={48} alt="5th Sense" />
               &nbsp;
              <h4 className="font-bold text-2xl ... font-mono h4 mb-2">5th SENSE</h4>
              <p className="font-mono tracking-wide text-lg text-gray-400 text-center">"Participants showcase their skills in vegetable slicing in just 1 minute, then tackle a dressing challenge in 5 minutes. The ultimate round sees teams answering questions in 10 minutes, with limited reading time and fun tasks if needed. A thrilling tiebreaker determines the champion among teams of two."</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

