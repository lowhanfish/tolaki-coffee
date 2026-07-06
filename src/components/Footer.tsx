import Image from 'next/image'
import Link from 'next/link'
import { BsSendPlus, BsFillPinFill, BsFillTelephoneFill, BsEnvelopeAt, BsFillGlobeAmericasFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=' bg-black'>
            <div className='grid grid-cols-12 gap-5 px-3 md:px-8 lg:px-30 py-5 opacity-80 w-full'>
                <div className='col-span-12 xl:col-span-3 hidden md:block'>
                    <div className='flex justify-center xl:justify-start'>
                        <Image
                            src={`/images/logo_light.png`}
                            alt='Logo'
                            width={200}
                            height={50}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority
                            style={{ width: '60%', height: 'auto' }}
                        />
                    </div>
                    <p className='pt-5 text-[12px] text-center xl:text-left'>
                        Kopi Tolaki adalah brand kopi dan lada lokal dari Sulawesi Tenggara yang berkomitmen menghadirkan produk berkualitas dengan rasa autentik
                    </p>

                    <div className='flex gap-1 pt-2 justify-center xl:justify-start'>
                        <Link href="/" className='flex h-5 w-5 justify-center items-center border border-yellow-500 rounded-full p-3'>
                            <div>
                                <FaFacebookSquare />
                            </div>
                        </Link>
                        <Link href="/" className='flex h-5 w-5 justify-center items-center border border-yellow-500 rounded-full p-3'>
                            <div>
                                <FaYoutube />
                            </div>
                        </Link>
                        <Link href="/" className='flex h-5 w-5 justify-center items-center border border-yellow-500 rounded-full p-3'>
                            <div>
                                <FaInstagram />
                            </div>
                        </Link>
                        <Link href="/" className='flex h-5 w-5 justify-center items-center border border-yellow-500 rounded-full p-3'>
                            <div>
                                <FaTiktok />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-4 xl:col-span-2 font-bold'>
                    <p className='color-main text-[14px] font-bold'>MENU</p>
                    <ul className='text-[12px] pt-2'>
                        <li><Link href="/"><p>Beranda</p></Link></li>
                        <li><Link href="/"><p>Profil Perusahaan</p></Link></li>
                        <li><Link href="/"><p>Produk</p></Link></li>
                        <li><Link href="/"><p>Petani & Kemitraan</p></Link></li>
                        <li><Link href="/"><p>Berita</p></Link></li>
                        <li><Link href="/"><p>Kontak</p></Link></li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-4 xl:col-span-2 font-bold'>
                    <p className='color-main text-[14px] font-bold'>PRODUK</p>
                    <ul className='text-[12px] pt-2'>
                        <li><Link href="/"><p>Kopi Medium Roast</p></Link></li>
                        <li><Link href="/"><p>Kopi Dark Roast</p></Link></li>
                        <li><Link href="/"><p>Kopi Premium</p></Link></li>
                        <li><Link href="/"><p>Lada hitam</p></Link></li>
                        <li><Link href="/"><p>Paket Bundling</p></Link></li>
                    </ul>
                </div>
                <div className='col-span-12 md:col-span-4 xl:col-span-2 font-bold '>
                    <p className='color-main text-[14px] font-bold'>KONTAK</p>
                    <div className='text-[12px] pt-2 flex gap-1 flex-col'>

                        <Link href="/">
                            <div className='w-full flex gap-2 '>
                                <div className='w-3'>
                                    <BsFillPinFill className='' />
                                </div>
                                <div className='flex-1'>
                                    <p>Ladono, Konawe Selatan, Sulawesi Tenggara - Indonesia</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/">
                            <div className='w-full flex gap-2 '>
                                <div className='w-3'>
                                    <BsFillTelephoneFill className='' />
                                </div>
                                <div className='flex-1'>
                                    <p>+62 812 3456 7890</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/">
                            <div className='w-full flex gap-2 '>
                                <div className='w-3'>
                                    <BsEnvelopeAt className='' />
                                </div>
                                <div className='flex-1'>
                                    <p>info@kopitolaki.com</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className='w-full flex gap-2 '>
                                <div className='w-3'>
                                    <BsFillGlobeAmericasFill className='' />
                                </div>
                                <div className='flex-1'>
                                    <p>www.kopitolaki.com</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className='col-span-12 xl:col-span-3'>
                    <p className='color-main text-[14px] font-bold text-center xl:text-left'>BERLANGGANAN</p>
                    <p className='text-[12px] pt-2 text-center xl:text-left'>Dapatkan info terbaru dan promo menarik dari Kopi Tolaki</p>
                    <div className='pt-4 flex justify-center xl:justify-start'>
                        <input
                            className='border border-[#c9a100] h-9 rounded-l-md w-75 pl-2 text-[14px]'
                            type="text"
                            placeholder='example@gmail.com'
                        />
                        <button className='h-9 w-12 bg-[#c9a100] hover:bg-yellow-500 rounded-r-md flex justify-center items-center cursor-pointer'>
                            <BsSendPlus className='text-[20px]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
