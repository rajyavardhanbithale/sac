export default function Title(props) {
    return (
        <>
            <div className="w-full flex justify-center mt-8">
                <span className="md:text-3xl text-2xl bg-primary text-secondary px-3 py-4 rounded-2xl font-semibold">{props?.title}</span>
            </div>
        </>
    )
}