"use client";
import { SignIn, useUser } from "@clerk/nextjs";
 
export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return <SignIn />;
  }
 
  return <div>Hello, {user.firstName} welcome to Clerk</div>;
}