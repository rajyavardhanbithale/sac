export default function Title(props) {
    return (
        <>
            <div className="w-full flex justify-center mt-8">
                <span className="text-3xl bg-primary text-secondary px-3 py-4 rounded-2xl">{props?.title}</span>
            </div>
        </>
    )
}