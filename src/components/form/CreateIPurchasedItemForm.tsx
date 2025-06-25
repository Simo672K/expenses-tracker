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
import { PurchasedItemType, purchasedItemSchema } from "@/lib/schemas";
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

const categories = ["groceries", "utilities", "entertainement", "others"];

const priorities = ["high", "medium", "low"];

const CreatePurchasedItemForm = () => {
  const { dispatch } = useContext(ModalState);
  const form = useForm({
    resolver: zodResolver(purchasedItemSchema),
    defaultValues: {
      name: "",
      category: "-- None --",
      price: "",
      priority: "high" as "high",
    },
  });

  const onSubmit = (data: PurchasedItemType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Item name:</FormLabel>
              <FormControl>
                <Input placeholder="Enter the item name/label" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Item price:</FormLabel>
              <FormControl>
                <Input placeholder="Enter the item price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Item category :</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select the item category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category, i) => (
                    <SelectItem value={category} key={i}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Item priority :</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select the item priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {priorities.map((priority, i) => (
                    <SelectItem value={priority} key={i}>
                      {priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">
            <Plus />
            Add item
          </Button>
          <Button
            type="reset"
            variant="destructive"
            onClick={() => {
              form.reset();
              dispatch({ modalType: "purchasedItem", modalState: false });
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
export default CreatePurchasedItemForm;
