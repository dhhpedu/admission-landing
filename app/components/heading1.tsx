const Heading1: React.FC<{
    title: string;
    subTitle?: string;
    center?: boolean;
}> = ({ title, subTitle, center }) => {
    return (
        <div className={`flex ${center ? 'justify-center text-center' : ''}`}>
            <div className="py-4 md:py-10 max-w-[800px]">
                <div className="text-2xl md:text-3xl 2xl:text-4xl uppercase text-blue-500 font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">{title}</div>
                <div className="text-slate-900 md:text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="20">{subTitle}</div>
            </div>
        </div>
    )
}

export default Heading1;