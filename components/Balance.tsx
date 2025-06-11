// import React from 'react'
// import getUserBalance from '@/app/actions/getUserBalance'
// import {addCommas} from '@/lib/utils'

// const Balance = async() => {
//     const {balance} = await getUserBalance();
//   return (
//     <div>
//       <h4>Your Balance</h4>
//       <h5>${addCommas(balance ?? 0)}</h5>

//     </div>
//   )
// }

// export default Balance


import React from 'react';
import getUserBalance from '@/app/actions/getUserBalance';
import { addCommas } from '@/lib/addCommas';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <Card className="w-full max-w-sm mx-auto mt-6 shadow-md">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <DollarSign className="text-green-500 w-5 h-5" />
          Your Balance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">
          ${addCommas(balance ?? 0)}
        </p>
      </CardContent>
    </Card>
  );
};

export default Balance;
