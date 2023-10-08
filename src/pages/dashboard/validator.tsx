


function validator() {
    return (
        <div className='max-w-7xl mx-auto text-gray-200 sm:px-4 lg:px-0'>
            <div className='-mx-6 -mt-6 sm:mx-0 sm:mt-0'>
                <p className='flex py-2 px-6 sm:px-0 items-center text-2xl font-medium tracking-wider mb-8 border-b w-full border-gray-700 md:px-8 '>
                    Validate a <span className='text-gray-100 ml-1'> VC</span>
                </p>
            </div>

            <div>
                <p className='text-xl font-medium tracking-wider mb-8'>
                    Paste your VC below
                </p>
                <div className='flex justify-center items-center gap-10 flex-col pb-5'>
                    <input
                        className='w-full px-5 py-2 mt-5 content-center border border-zinc-600 rounded-full text-zinc-600 
                        hover:text-white hover:bg-[#191919]
                        '
                        type='text'
                        placeholder='Paste your VC here'
                    />
                </div>
            </div>
        </div>
    )
}

export default validator;