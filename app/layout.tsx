// if something stays on the page regardless of which page you go to, it goes in the layout
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/1. Header'
import ActiveSectionContextProvider from "@/context/active-section-context"



const inter = Inter({ subsets: ['latin'] })


// The thing that will show on the google tab of the wbeiste
export const metadata = {
  title: 'Jacky | Personal Portforlio Website',
  description: 'Created by Jacky',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>

      {/* Dont know what the className thing do*/}
      <body className={'${inter.className} flex flex-col justify-center items-center bg-white text-slate-950 p-8'}>
      <div className="bg-[#e8f0fe] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#cfe0f9]"></div>
      <div className="bg-[#f3e9f7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#dfcce3]"></div>





      <ActiveSectionContextProvider>
        <Header />
        {children} 
      </ActiveSectionContextProvider>
      </body>

    </html>
  )
}
