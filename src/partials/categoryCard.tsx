

export default function category({ category: { icon, title, description } }: { category: { icon: any, title: any, description: any } }) {
    return (
        <div className="block rounded-xl border p-4 bg-white">
            <span className="inline-block rounded-lg p-3">
                <div className="inline-flex align-middle justify-center items-center select-none text-darkBlue font-mono">
                    { icon }
                </div>
            </span>
            <h2 className="mt-2 font-mono text-base sm:text-lg text-darkBlue">{ title }</h2>
            <p className="sm:mt-1 block text-sm sm:text-base font-mono text-darkBlue">{ description }</p>
        </div>
    )
}