import { Textarea } from "@/components/ui/textarea"

export default function App() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white  rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tauri App Template</h1>
        </div>

        <Textarea placeholder="Type something..." />
      </div>
    </div>
  )
}