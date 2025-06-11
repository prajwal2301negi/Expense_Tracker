// 'use client';
// import { Transaction } from '@/types/Transaction';
// import { addCommas } from '@/lib/addCommas';
// import { toast } from 'react-toastify';
// import deleteTransaction from '@/app/actions/deleteTransaction';

// const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
//   const sign = transaction.amount < 0 ? '-' : '+';

//   const handleDeleteTransaction = async (transactionId: string) => {
//     const confirmed = window.confirm(
//       'Are you sure you want to delete this transaction?'
//     );

//     if (!confirmed) return;

//     const { message, error } = await deleteTransaction(transactionId);

//     if (error) {
//       toast.error(error);
//     }

//     toast.success(message);
//   };

//   return (
//     <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
//       {transaction.text}
//       <span>
//         {sign}${addCommas(Math.abs(transaction.amount))}
//       </span>
//       <button
//         onClick={() => handleDeleteTransaction(transaction.id)}
//         className='delete-btn'
//       >
//         x
//       </button>
//     </li>
//   );
// };

// export default TransactionItem;

'use client';

import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/addCommas';
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';
import { Trash2 } from 'lucide-react';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this transaction?'
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
    }
  };

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-xl border shadow-sm ${
        transaction.amount < 0
          ? 'bg-red-50 dark:bg-red-950 border-red-200'
          : 'bg-green-50 dark:bg-green-950 border-green-200'
      }`}
    >
      <div className="flex flex-col">
        <span className="font-medium text-sm text-muted-foreground">{transaction.text}</span>
        <span
          className={`text-lg font-bold ${
            transaction.amount < 0
              ? 'text-red-600 dark:text-red-400'
              : 'text-green-600 dark:text-green-400'
          }`}
        >
          {sign}${addCommas(Math.abs(transaction.amount))}
        </span>
      </div>

      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="text-muted-foreground hover:text-destructive transition"
        title="Delete transaction"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </li>
  );
};

export default TransactionItem;
