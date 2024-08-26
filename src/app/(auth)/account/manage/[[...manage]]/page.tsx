import { RedirectToSignIn, SignedIn, SignedOut, UserProfile } from '@clerk/nextjs';

const Page = () => {
  return (
    <div>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </div>
  );
};

export default Page;
