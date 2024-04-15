"use client"

import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "../../components/ui/navigation-menu"
import { Button } from "../../components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "../../components/ui/avatar"
import { PopoverTrigger, PopoverContent, Popover } from "../../components/ui/popover"

export default function header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="hidden lg:flex" href="#">
        <ActivityIcon className="h-6 w-6" />
        <span className="sr-only">CalorieSync</span>
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex shrink-0 flex-1">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-start rounded-md bg-white px-4 py-2 text-sm font-medium underline-off hover:underline transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-start rounded-md bg-white px-4 py-2 text-sm font-medium underline-off hover:underline transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Track
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-start rounded-md bg-white px-4 py-2 text-sm font-medium underline-off hover:underline transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Recipes
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-start rounded-md bg-white px-4 py-2 text-sm font-medium underline-off hover:underline transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Workouts
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center">
        <Button className="h-8 w-8 mr-2 lg:hidden" size="icon" variant="outline">
          <ChevronDownIcon className="w-4 h-4" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              aria-controls="menu"
              aria-haspopup="true"
              className="h-8 w-8 rounded-full border-2 border-gray-900 border-gray-950/50 hover:border-gray-950 focus:border-gray-950 ring-gray-950 dark:border-gray-50 dark:border-gray-950/50 dark:hover:border-gray-950 dark:focus:border-gray-950 dark:ring-gray-900"
              id="menu"
              variant="ghost"
            >
              <Avatar>
                <AvatarImage alt="Avatar" src="/avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 mt-1 origin-top-right" id="menu" side="bottom">
            <div>
              <div className="flex flex-col w-full gap-0">
                <Link
                  className="flex-1 inline-flex h-9 items-center justify-start rounded-md bg-gray-100 px-4 py-2 text-sm font-medium underline-off hover:underline transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Account
                </Link>
                <Link
                  className="flex-1 inline-flex h-9 items-center justify-start rounded-md bg-white px-4 py-2 text-sm font-medium underline-off hover:underline transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Support
                </Link>
                <Link
                  className="flex-1 inline-flex h-9 items-center justify-start rounded-md bg-white shadow-sm px-4 py-2 text-sm font-medium underline-off hover:underline bg-gray-100/50 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Logout
                </Link>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}