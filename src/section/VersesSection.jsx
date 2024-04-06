import gsap from 'gsap'

const VersesSection = ({verseRef}) => {

    // useEffect(() => {
    //     gsap.fromTo(verseRef.current,
    //         { y: -50, opacity: 0 },
    //         {
    //             scrollTrigger:
    //             {
    //                 trigger: container.current,
    //                 start: 'top center',
    //                 end: 'bottom center'
    //             }, y: 0, opacity: 1, duration: 2, ease: 'sine.inOut'
    //         });
    // },[])

    const verse = "Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan"
    const bible = "Kolose 3:14"

    return (
        <section ref={verseRef} className='w-full h-full flex justify-center items-center text-left'>
            <div className='flex flex-col gap-6'>
                <i className='text-2xl font-serif text-center'>{`"${verse}"`}</i>
                <p className='text-2xl font-yustine text-center'>{bible}</p>
            </div>
        </section>
    )
}

export default VersesSection