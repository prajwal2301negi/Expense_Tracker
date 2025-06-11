// import getIncomeExpense from '@/app/actions/getIncomeExpense';
// import { addCommas } from '@/lib/utils';

// const IncomeExpense = async () => {
//   const { income, expense } = await getIncomeExpense();

//   return (
//     <div className='inc-exp-container'>
//       <div>
//         <h4>Income</h4>
//         <p className='money plus'>${addCommas(Number(income?.toFixed(2)))}</p>
//       </div>
//       <div>
//         <h4>Expense</h4>
//         <p className='money minus'>${addCommas(Number(expense?.toFixed(2)))}</p>
//       </div>
//     </div>
//   );
// };

// export default IncomeExpense;
import getIncomeExpense from '@/app/actions/getIncomeExpense';
import { addCommas } from '@/lib/addCommas';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <div className="border rounded-xl p-4 bg-green-50 dark:bg-green-950 shadow-md flex items-center justify-between">
        <div>
          <h4 className="text-sm text-muted-foreground">Income</h4>
          <p className="text-xl font-semibold text-green-600 dark:text-green-400">
            ${addCommas(Number(income?.toFixed(2)))}
          </p>
        </div>
        <ArrowUpCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
      </div>

      <div className="border rounded-xl p-4 bg-red-50 dark:bg-red-950 shadow-md flex items-center justify-between">
        <div>
          <h4 className="text-sm text-muted-foreground">Expense</h4>
          <p className="text-xl font-semibold text-red-600 dark:text-red-400">
            ${addCommas(Number(expense?.toFixed(2)))}
          </p>
        </div>
        <ArrowDownCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
      </div>
    </div>
  );
};

export default IncomeExpense;
