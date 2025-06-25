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
import { categorySchema, CategoryType } from "@/lib/schemas";
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

const CreateCategoryForm = () => {
  const { dispatch } = useContext(ModalState);
  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: CategoryType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Category name :</FormLabel>
              <FormControl>
                <Input placeholder="Enter new category name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">
            <Plus />
            Create category
          </Button>
          <Button
            type="reset"
            variant="destructive"
            onClick={() => {
              form.reset();
              dispatch({ modalType: "category", modalState: false });
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
export default CreateCategoryForm;
