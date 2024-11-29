import Note from "./Note"

export default function Whiteboard() {
  return (
    <div className="w-screen h-[calc(100vh-42px)] border-4 border-blue-500">
      <Note />
    </div>
  )
}