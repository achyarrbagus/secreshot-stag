import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "../mantine-theme";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LandingPageTemplate from "@/templates/LandingPage/LandingPageTemplate";
import { Providers } from "@/lib/providers";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Providers>
            <LandingPageTemplate>
              <Component {...pageProps} />
            </LandingPageTemplate>
          </Providers>
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
};

export default App;
