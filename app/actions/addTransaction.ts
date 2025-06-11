'use server'
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData{
    text: string;
    amount: number;
}

interface TransactionResult{
    data?: TransactionData;
    error?: string
}


// Promise is type of formData
async function addTransaction(formData: FormData): Promise<TransactionResult>{
     const textValue = formData.get('text');
     const amountValue = formData.get('amount');

     // check for input values
     if (!textValue || !amountValue || textValue === '') {
        return { error: 'Please fill in all fields' };
     }

     const text: string = textValue.toString();  // text as string
     const amount: number = parseFloat(amountValue.toString());  // amount as number


    // Logged In User
    
    
    
     const { userId } = await auth();
     if(!userId){
        return { error: 'You must be logged in to add a transaction' };
     }
    //  console.log(userId) 

    //  const transactionData: TransactionData= {
    //     text, amount
    //  };

    try {
         const transactionData: TransactionData = await db.transaction.create({
        data:{
            text, amount, userId
        }
    });

    revalidatePath('/')

     return {data: transactionData};
        
    } catch (error) {
        return { error: "Transaction not added"}
    }

   
}


export default addTransaction;