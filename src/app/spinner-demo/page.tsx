import { Spinner } from "@/components/ui/spinner"

const sizes = ["sm", "md", "lg", "xl"] as const
const variants = ["default", "muted", "white"] as const

export default function SpinnerDemo() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Spinner Component Showcase</h1>

        {/* Sizes Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">All Sizes</h2>
          <div className="flex flex-wrap gap-8 items-end justify-center">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-3">
                <Spinner
                  size={size}
                  variant="default"
                  className="border-t-blue-600"
                />
                <p className="text-sm font-medium text-gray-600 uppercase">{size}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Variants Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">All Variants</h2>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {/* Default */}
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-lg">
              <Spinner size="md" variant="default" />
              <p className="text-sm font-medium text-gray-600 uppercase">Default</p>
            </div>

            {/* Muted */}
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-lg">
              <Spinner size="md" variant="muted" />
              <p className="text-sm font-medium text-gray-600 uppercase">Muted</p>
            </div>

            {/* White on Dark */}
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-lg">
              <Spinner size="md" variant="white" />
              <p className="text-sm font-medium text-gray-300 uppercase">White</p>
            </div>
          </div>
        </section>

        {/* All Combinations Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">All Combinations (Sizes × Variants)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left font-semibold text-gray-900 bg-gray-100 border border-gray-300"></th>
                  {variants.map((variant) => (
                    <th
                      key={variant}
                      className="p-4 text-center font-semibold text-gray-900 bg-gray-100 border border-gray-300 uppercase text-sm"
                    >
                      {variant}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizes.map((size) => (
                  <tr key={size}>
                    <td className="p-4 font-semibold text-gray-900 bg-gray-100 border border-gray-300 uppercase text-sm">
                      {size}
                    </td>
                    {variants.map((variant) => (
                      <td
                        key={`${size}-${variant}`}
                        className={`p-6 text-center border border-gray-300 ${
                          variant === "white" ? "bg-gray-900" : "bg-white"
                        }`}
                      >
                        <div className="flex justify-center items-center min-h-12">
                          <Spinner size={size} variant={variant} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
