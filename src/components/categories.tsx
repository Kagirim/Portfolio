
import CategoryCard from "../partials/categoryCard"

export default function Categories({ categories }: { categories: any[] }) {
    return (
        <div className="h-screen container px-4 md:px-12 py-12 mx-auto">
            <section className="font-mono font-bold">
                <span className="text-darkBlue pt-0 mt-0 pb-5 text-2xl flex items-center justify-center uppercase tracking-wider">
                    My Services
                </span>
                {/* <p className="mx-auto my-12 max-w-xl bg-transparent text-center text-3xl font-bold leading-relaxed tracking-wide text-darkBlue">
                    I offer a range of services to build and maintain your web applications.
                </p> */}
            </section>
            
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-3 border rounded-lg shadow p-4 md:p-6 text-center">
                
                { categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </section>
        </div>
    )
}