'use client'

export default function EventCard(props) {


    const epochDate = (epoch) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        const timestamp = epoch * 1000
        const epochDate = new Date(timestamp)
        const month = epochDate.getMonth()
        const date = epochDate.getDate()
        const year = epochDate.getFullYear()
        const dayIndex = epochDate.getDay()

        return `${dayNames[dayIndex]}, ${date} ${monthNames[month]} ${year}`
    }

    return (
        <>
            <div className="w-full h-48 rounded-t-2xl overflow-hidden">
                <img
                    src={`https://lh3.googleusercontent.com/d/${props?.imageID}=w1000`}
                    alt=""
                    className="object-cover w-full h-full hover:scale-105 duration-500 hover:brightness-90"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="flex flex-col items-center p-4 w-full">
                <span className="font-medium text-xl text-gray-800 text-center">
                    {props?.title}
                </span>
                <span className="text-gray-600 text-center">
                    {epochDate(props?.date)}
                </span>
            </div>

        </>
    )
}