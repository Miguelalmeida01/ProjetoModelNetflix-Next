'use client';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";


export function FooterHome() {
    return (
        <>
            <footer
                className="flex h-48 mt-36 bg-gradient-to-r from-gray-400 
            from-1%  to-transparent  dark:bg-gradient-to-r dark:from-gray-900 
            dark:from-1%  dark:to-transparent ">
                <div className="flex gap-64 mx-10 w-full">
                    <div className="grid w-1/3 m-10">
                        <a href="#" className="font-bold">Institucional</a>
                        <a href="#" className="hover:text-gray-400">Sobre Nós</a>
                        <a href="#" className="hover:text-gray-400">Contato</a>
                        <a href="#" className="hover:text-gray-400">Política de Privacidade</a>
                    </div>
                    <div className="grid w-1/3 m-10">
                        <a href="#" className="font-bold">Ajuda</a>
                        <a href="#" className="hover:text-gray-400">Pagamentos</a>
                        <a href="#" className="hover:text-gray-400">Cancelamentos</a>
                        <a href="#" className="hover:text-gray-400">Acessibilidade</a>
                    </div>
                    <div className="grid w-1/3 m-10">
                        <a href="#" className="font-bold">Redes</a>
                        <a className="flex gap-x-6">
                            <InstagramLogo className="hover:text-rose-300"  size={32} />
                            <FacebookLogo className="hover:text-blue-700" size={32} />
                            <YoutubeLogo className="hover:text-red-500" size={32} />
                        </a>
                    </div>





                </div>
            </footer>
        </>
    )
}
