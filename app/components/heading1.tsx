const Heading1: React.FC<{
    title: string;
    subTitle?: string;
}> = ({ title, subTitle }) => {
    return (
        <div className="flex justify-center">
            <div className="py-4 md:py-10 max-w-[800px] text-center">
                <div className="text-2xl md:text-3xl 2xl:text-4xl uppercase text-blue-500 font-bold mb-2">{title}</div>
                <div className="text-slate-500 font-medium md:text-lg">{subTitle}</div>
            </div>
        </div>
    )
}

export default Heading1;