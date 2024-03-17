/**
 * v0 by Vercel.
 * @see https://v0.dev/t/d6mbXyN9coX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Contact() {
  return (

    <div id="contact" className="w-full py-12 lg:py-24 items-center justify-center">
      <div className=" w-full flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Connect with us</h1>
            <p className="text-gray-500 dark:text-gray-400">Follow us on our social media platforms to stay updated!</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-4">
            <a
              className="rounded-lg p-2 flex items-center justify-center bg-[#3b5998] hover:bg-opacity-75 transition-opacity"
              href="#"
            >
              <FacebookIcon className="w-6 h-6 text-white" />
              <span className="sr-only">Facebook</span>
            </a>

            <a
              className="rounded-lg p-2 flex items-center justify-center bg-[#c13584] hover:bg-opacity-75 transition-opacity"
              href="https://www.instagram.com/prayuddha_2k24/"
            >
              <InstagramIcon className="w-6 h-6 text-white" />
              <span className="sr-only">Instagram</span>
            </a>
            
            <a
              className="rounded-lg p-2 flex items-center justify-center bg-[#1da1f2] hover:bg-opacity-75 transition-opacity"
              href="tel:+91 6384337281"
            >
              <PhoneIcon className="w-6 h-6 text-white" />
              <span className="sr-only">Phone</span>
            </a>
            
            <a
              className="rounded-lg p-2 flex items-center justify-center bg-[#0077b5] hover:bg-opacity-75 transition-opacity"
              href="mailto:prayuddah2k24@gmail.com"
            >
              <MailIcon className="w-6 h-6 text-white" />
              <span className="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="google-map flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.986552860446!2d78.74121607480315!3d10.658151289483506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa89337cba7f33%3A0x7120582d954fcb0f!2sAnna%20University%20RO%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1710618376140!5m2!1sen!2sin"  height="450" style={{ border: '0',width:'90%', alignContent: 'center' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>


  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
