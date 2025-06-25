"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { incomeSchema, IncomeType } from "@/lib/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useContext } from "react";
import { ModalState } from "../context/ModalContext";

const CreateIncomeForm = () => {
  const { dispatch } = useContext(ModalState);
  const form = useForm({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      amount: "",
      type: "oneTime" as "oneTime",
    },
  });

  const onSubmit = (data: IncomeType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Amount :</FormLabel>
              <FormControl>
                <Input placeholder="Enter the desired amout" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Type :</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select the income type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="oneTime">One Time</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">
            <Plus />
            Add income
          </Button>
          <Button
            type="reset"
            variant="destructive"
            onClick={() => {
              form.reset();
              dispatch({ modalType: "income", modalState: false });
            }}
          >
            <X />
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default CreateIncomeForm;
