
import CategoryCard from "../partials/categoryCard"

export default function Categories({ categories }: { categories: any[] }) {
    return (
        <section className="h-screen bg-gray-100">
            <div className="font-mono font-bold">
                <span className="text-darkBlue my-3 pt-5 flex items-center justify-center font-medium uppercase tracking-wider">
                    My Services
                </span>
                <p className="mx-auto mb-12 w-full max-w-xl bg-transparent text-center font-bold leading-relaxed tracking-wide text-darkBlue">
                    I offer a range of services to help you build and maintain your web applications.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3">
                { categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </div>
        </section>
    )
}