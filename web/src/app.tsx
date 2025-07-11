import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { RecordRoomAudio } from "./pages/record-room-audio";
import { ThemeProvider } from "./components/layout/theme-provider";
import { DefaultLayout } from "./components/layout/DefaultLayout";

const queryClient = new QueryClient()
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route index element={<CreateRoom />} />
              <Route  element={<Room />} path="/room/:roomId" />
              <Route  element={<RecordRoomAudio />} path="/room/:roomId/audio" />
            </Routes>
          </DefaultLayout>
      </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

