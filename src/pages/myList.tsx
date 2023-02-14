import Footer from "@/components/Footer";

export default function Popular() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden animate-screenOpacity">
        <div className="w-full h-full mt-16 text-white px-[4%] mr-5">
            <p className="hidden lg:flex text-[2.5rem] h-16">Minha lista</p>

            <div className="hidden lg:flex w-full h-full justify-center pt-[100px] text-[#666] text-lg">
                <p>Você ainda não adicionou nenhum título à sua lista.</p>
            </div>

            <div className="lg:hidden flex text-[#999] text-[1.2em] font-bold mb-[.5em]">
                <p>Não há nenhum título na minha lista.</p>
            </div>
        </div>

      <Footer/>
    </div>
  )
}