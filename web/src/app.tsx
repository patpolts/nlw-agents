import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { RecordRoomAudio } from "./pages/record-room-audio";
import { ThemeProvider } from "./components/theme-provider";

const queryClient = new QueryClient()
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<CreateRoom />} />
            <Route  element={<Room />} path="/room/:roomId" />
            <Route  element={<RecordRoomAudio />} path="/room/:roomId/audio" />
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

