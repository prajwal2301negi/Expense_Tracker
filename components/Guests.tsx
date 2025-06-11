// import React from 'react'
// import { SignInButton } from '@clerk/nextjs'


// const Guests = () => {
//   return (
//     <div>
//         <h1>Please sign in to manage your transaction</h1>
//         <SignInButton/>
      
//     </div>
//   )
// }

// export default Guests

'use client';

import React from 'react';
import { SignInButton } from '@clerk/nextjs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

const Guests = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardContent className="space-y-6 py-8">
          <div className="flex flex-col items-center gap-2">
            <Lock className="h-10 w-10 text-muted-foreground" />
            <h1 className="text-xl font-semibold">
              Please sign in to manage your transactions
            </h1>
          </div>
          <SignInButton mode="modal">
            <Button variant="default">Sign In</Button>
          </SignInButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default Guests;
