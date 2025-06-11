// import getTransactions from '@/app/actions/getTransaction';
// import TransactionItem from './TransactionItem';
// import { Transaction } from '@/types/Transaction';

// const TransactionList = async () => {
//   const { transactions, error } = await getTransactions();

//   if (error) {
//     return <p className='error'>{error}</p>;
//   }

//   return (
//     <>
//       <h3>History</h3>
//       <ul className='list'>
//         {transactions &&
//           transactions.map((transaction: Transaction) => (
//             <TransactionItem key={transaction.id} transaction={transaction} />
//           ))}
//       </ul>
//     </>
//   );
// };

// export default TransactionList;


import getTransactions from '@/app/actions/getTransaction';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/types/Transaction';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return (
      <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950 p-3 rounded-md border border-red-200">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Transaction History</h3>

      <ul className="space-y-3 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent">
        {transactions?.length === 0 ? (
          <li className="text-sm text-muted-foreground">No transactions yet.</li>
        ) : (
          transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
