"use client";
import SparklesText from "~~/components/magicui/sparkles-text";
import { Input } from "~~/components/ui/input"
import type { NextPage } from "next";
import { Button } from "~~/components/ui/button"



const Home: NextPage = () => {


  return (
    <>
      <SparklesText className="mx-auto my-2" text="AI Image Prompt Marketplace" />

      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white my-5">
        Buy, sell AI image prompt using crypto easily
      </p>

      <div className="flex w-full max-w-xl items-center space-x-2 mx-auto my-5">
        <Input type="text" placeholder="search" />
        <Button type="submit">Search</Button>
      </div>
      <div id="area-chart" className="mx-5 grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
          <div className="items-center gap-2 relative z-20 flex justify-end border-b bg-card px-3 py-2.5 text-card-foreground">
            <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-area-chart">
                <path d="M3 3v18h18"></path>
                <path d="M7 12v5h12V8l-5 5-4-4Z"></path>
              </svg>
              Chart
            </div>

            <div className="ml-auto flex items-center gap-2 [&>form]:flex">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground [&_svg]-h-3.5 [&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3" data-state="closed">
                <span className="sr-only">Copy</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                </svg>
              </button>
              <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-0 hidden h-4 md:flex"></div>
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:text-accent-foreground h-6 rounded-[6px] border bg-transparent px-2 text-xs text-foreground shadow-none hover:bg-muted dark:text-foreground" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r29i:" data-state="closed">
                View Code
              </button>
            </div>
          </div>

          <div className="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 pt-0 my-2">
                <div className="space-y-3 w-full">
                  <span data-state="closed">
                    <div className="overflow-hidden rounded-md">
                      <img
                        alt="Thinking Components"
                        loading="lazy"
                        width="150"
                        height="150"
                        decoding="async"
                        data-nimg="1"
                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                        src={`https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </span>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-medium leading-none">Thinking Components</h3>
                    <p className="text-xs text-muted-foreground">Lena Logic</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month

                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">January - June 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is a React comment */}


    </>
  );
};

export default Home;
