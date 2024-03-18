import { list } from "./club_list"



export default function Clubs() {
    return (
        <>
            <div className="w-full flex justify-center mt-8">
                <span className="text-3xl bg-primary text-secondary px-3 py-4 rounded-2xl">Our Clubs</span>
            </div>

            <div className="p-5 w-full flex flex-wrap justify-center gap-6">
                {list.map((item,idx)=>(
                    <div key={idx} >
                        
                        <span className="relative">{item.name}</span>
                        <img src={item.logo} alt="" className="w-64 rounded-full hover:brightness-50 transition duration-500" />
                    </div>
                ))}
            </div>
        </>
    )
}