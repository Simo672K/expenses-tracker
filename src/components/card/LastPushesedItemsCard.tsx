import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Props {
  className?: string;
}

const purchases = [
  {
    id: 1,
    name: "Running Shoes",
    category: "Clothing",
    priority: "High",
    price: "$89.99",
    date: "2025-06-10",
  },
  {
    id: 2,
    name: "Electric Kettle",
    category: "Appliances",
    priority: "Medium",
    price: "$39.50",
    date: "2025-06-08",
  },
  {
    id: 3,
    name: "Movie Ticket",
    category: "Entertainment",
    priority: "Low",
    price: "$12.00",
    date: "2025-06-06",
  },
  {
    id: 4,
    name: "Groceries",
    category: "Food",
    priority: "High",
    price: "$125.45",
    date: "2025-06-04",
  },
  {
    id: 5,
    name: "Bluetooth Headphones",
    category: "Electronics",
    priority: "Medium",
    price: "$59.99",
    date: "2025-06-01",
  },
  {
    id: 6,
    name: "Notebook Set",
    category: "Stationery",
    priority: "Low",
    price: "$14.75",
    date: "2025-05-30",
  },
];

const LastPurchasedItemsCard = ({ className }: Props) => {
  return (
    <Card className={cn("shadow-none border border-gray-300", className)}>
      <CardHeader>
        <CardTitle
          className={cn("text-2xl flex items-center gap-3", poppins.className)}
        >
          Recent purchased items
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Id</TableHead>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Category</TableHead>
              <TableHead className="font-bold">Priority</TableHead>
              <TableHead className="font-bold">Price</TableHead>
              <TableHead className="font-bold">Date of purchase</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchases.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{purchase.id}</TableCell>
                <TableCell>{purchase.name}</TableCell>
                <TableCell>{purchase.category}</TableCell>
                <TableCell>{purchase.priority}</TableCell>
                <TableCell>{purchase.price}</TableCell>
                <TableCell>{purchase.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default LastPurchasedItemsCard;
