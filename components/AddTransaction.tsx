// 'use client';
// import { useRef } from 'react';
// import addTransaction from '@/app/actions/addTransaction';
// import { toast } from 'react-toastify';

// const AddTransaction = () => {
//   const formRef = useRef<HTMLFormElement>(null); // to clear form

//   const clientAction = async (formData: FormData) => {
//     const { data, error } = await addTransaction(formData);

//     if (error) {
//       toast.error(error);
//     } else {
//       toast.success('Transaction added');
//       formRef.current?.reset();
//     }
//     //console.log(formData.get('text'), formData.get('amount'))
//   };

//   return (
//     <>
//       <h3>Add transaction</h3>
//       <form ref={formRef} action={clientAction}>
//         <div className='form-control'>
//           <label htmlFor='text'>Text</label>
//           <input
//             type='text'
//             id='text'
//             name='text'
//             placeholder='Enter text...'
//           />
//         </div>
//         <div className='form-control'>
//           <label htmlFor='amount'>
//             Amount <br /> (negative - expense, positive - income)
//           </label>
//           <input
//             type='number'
//             name='amount'
//             id='amount'
//             placeholder='Enter amount...'
//             step='0.01'
//           />
//         </div>
//         <button className='btn'>Add transaction</button>
//       </form>
//     </>
//   );
// };

// export default AddTransaction;

'use client';

import { useRef } from 'react';
import { toast } from 'react-toastify';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, FileText } from 'lucide-react';
import addTransaction from '@/app/actions/addTransaction';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transaction added!');
      formRef.current?.reset();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <DollarSign className="text-green-500" />
          Add Transaction
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={clientAction} className="space-y-4">
          <div>
            <Label htmlFor="text" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Text
            </Label>
            <Input
              type="text"
              id="text"
              name="text"
              placeholder="Enter description..."
              required
            />
          </div>
          <div>
            <Label htmlFor="amount">
              Amount <br className="sm:hidden" />
              <span className="text-sm text-muted-foreground">
                (negative - expense, positive - income)
              </span>
            </Label>
            <Input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount..."
              step="0.01"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Add Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTransaction;
