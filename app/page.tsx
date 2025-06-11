// import React from 'react'
// import Guests from '@/components/Guests'
// import { currentUser } from '@clerk/nextjs/server'
// import AddTransaction from '@/components/AddTransaction'
// import Balance from '@/components/Balance'
// import IncomeExpense from '@/components/IncomeExpense'
// import TransactionList from '@/components/TransactionList'

// const page = async() => {
//   const user = await currentUser();

//   if(!user){
//     return <Guests/>
//   }
//   return (
//     <div>
//       Expense Tracker
//       <h1>Welcome, {user.firstName}</h1>
//       <Balance/>
//       <IncomeExpense/>
//       <AddTransaction/>
//       <TransactionList/>
//     </div>
//   )
// }

// export default page

import React from "react";
import Guests from "@/components/Guests";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guests />;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Welcome, {user.firstName} 👋</h1>

      <Card>
        <CardHeader>
          <CardTitle>Your Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <Balance />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Income & Expense Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <IncomeExpense />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <AddTransaction />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionList />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
