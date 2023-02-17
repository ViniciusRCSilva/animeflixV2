import Link from "next/link";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, UserCircle } from "phosphor-react";

export default function Footer(){
    return(
        <div className="flex w-full text-gray-unselected my-5 lg:mx-32 px-[4%] text-xs">
            <div className="flex flex-col max-w-[980px]">
                <div className="flex mb-[1em] text-white">
                    <Link href="https://github.com/ViniciusRCSilva" target="_blank">                    
                        <div className="mr-4 cursor-pointer">
                            <GithubLogo width={32} height={32} />
                        </div>
                    </Link>

                    <Link href="https://www.linkedin.com/in/vinicius-rc-silva/" target="_blank">                    
                        <div className="mr-4 cursor-pointer">
                            <LinkedinLogo width={32} height={32} />
                        </div>
                    </Link>

                    <Link href="mailto:viniciusflexa@gmail.com" target="_blank">                    
                        <div className="mr-4 cursor-pointer">
                            <EnvelopeSimple width={32} height={32} />
                        </div>
                    </Link>

                    <Link href="https://vini-portfolio.vercel.app/" target="_blank">                    
                        <div className="mr-4 cursor-pointer">
                            <UserCircle width={32} height={32} />
                        </div>
                    </Link>
                </div>

                <div>
                    <div className="mb-[14px] text-justify lg:text-left">
                        <p>Este projeto tem apenas objetivo de desafiar as capacidades no desenvolvimento de uma interface semelhante à 
                        <a href="http://netflix.com/" target="_blank" className="underline"> Netflix.</a></p>
                        <p>Gostaria de frisar que não incentivo ou apoio qualquer atividade que viole direitos autorais, incluindo a criação de sites que distribuam filmes ou séries de forma gratuita na internet. Além de ser ilegal, essa prática prejudica a indústria do entretenimento e os artistas envolvidos na produção desses trabalhos. É importante valorizar e respeitar o trabalho desses profissionais, apoiando as formas legais e justas de consumir conteúdo audiovisual.</p>
                    </div>
                    <p>© 2023 AnimeFlix, Inc.</p>
                </div>
            </div>
        </div>
    )
}