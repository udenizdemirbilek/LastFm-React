import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
