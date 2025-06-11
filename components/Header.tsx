// import React from 'react'
// import {SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
// import { checkUser } from '@/lib/checkUser'

// const Header = async() => {
//   const user = await checkUser()
//   //console.log(user)
//   return (
//     <div>
//       Header
//       <div>
//         <SignedOut>
//             <SignInButton/> 
//             {/* If not login, show Sign In Button */}
           
//         </SignedOut>
//         <SignedIn>
//             <UserButton/>
//             {/* If user is signed in, show UserButton */}
//         </SignedIn>
//       </div>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = async () => {
  const user = await checkUser();

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-[#0E0F14]">
      <div className="flex items-center gap-3">
        {/* <Menu className="h-6 w-6 text-muted-foreground" /> */}
        <h1 className="text-lg font-semibold tracking-wide">Droply</h1>
      </div>

      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
