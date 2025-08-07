"use client";
import { Suspense, useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { Preloader } from "./components";
import { MainPageContent } from "./components/MainPageContent";

export default function Page() {
  useEffect(() => {
    const initMiniApp = async () => {
      try {
        await sdk.actions.ready();
        console.log("Mini app initialized successfully");
      } catch (error) {
        console.error("Failed to initialize mini app:", error);
      }
    };

    initMiniApp();
  }, []);

  return (
    <Suspense fallback={<Preloader isLoading={true} />}>
      <MainPageContent />
    </Suspense>
  );
}


// "use client";
// import { Suspense, useEffect } from "react";
// import { Preloader } from "./components";
// import { MainPageContent } from "./components/MainPageContent";

// // this Declares the SDK type for TypeScript
// declare global {
//   interface Window {
//     farcasterSDK?: any;
//   }
// }

// export default function Page() {
//   useEffect(() => {
//     const loadAndInitMiniApp = async () => {
//       try {
//         // this Dynamically import the SDK from CDN
//         const { sdk } = await import('https://esm.sh/@farcaster/miniapp-sdk');
        
//         //this Stores SDK globally for potential reuse
//         window.farcasterSDK = sdk;
        
//         // this Initialize the mini app
//         await sdk.actions.ready();
//         console.log("Mini app initialized successfully");
//       } catch (error) {
//         console.error("Failed to load or initialize mini app:", error);
//       }
//     };

//     loadAndInitMiniApp();
//   }, []);

//   return (
//     <Suspense fallback={<Preloader isLoading={true} />}>
//       <MainPageContent />
//     </Suspense>
//   );
// }