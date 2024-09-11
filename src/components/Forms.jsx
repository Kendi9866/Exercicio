export default function Forms(){
    return(
        <div className="flex w-[50%] h-2/3 rounded-xl shadow-2xl bg-white justify-center items-center">
            <div className="p-4 h-full w-full">
                <form action="POST" className="flex gap-2 flex-col">
                    <p>Nome: </p>
                    <input type="text" className="border-2 w-60 border-black"/>
                    <p>Email: </p>
                    <input type="text" className="border-2 w-60 border-black"/>
                    <p>Telefone: </p>
                    <input type="text" className="border-2 w-60 border-black"/>
                    <p>: </p>
                    <input type="text" className="border-2 w-60 border-black"/>
                </form>
            </div>
        </div>
    )
}