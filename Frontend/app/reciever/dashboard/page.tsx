"use client";
import PageTitle from "@/components/PageTitle";
import SideNavbar from "@/components/SideNavbar";
import Image from "next/image";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  LucideIcon,
} from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Key } from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    icon: Activity,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function RecieverDashboard() {
  const { data: session, status } = useSession();

  return (
    <div>
      <div className="justify-between flex items-center p-4">
        <PageTitle title={`${session?.user?.name}`}/>
        <Button
          variant="secondary"
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/login" })
          }
        >
          Signout
        </Button>
      </div>
      <div className="flex flex-col gap-5  w-full" suppressHydrationWarning>
        
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map(
            (
              d: {
                amount: string;
                icon: LucideIcon;
                label: string;
              },
              i: Key | null | undefined
            ) => (
              <Card
                key={i}
                amount={d.amount}
                icon={d.icon}
                label={d.label}
              />
            )
          )}
        </section>
        <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>

            <BarChart />
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">
                You made 265 sales this month.
              </p>
            </section>
            {uesrSalesData.map((d, i) => (
              <SalesCard
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </CardContent>
          {/*  */}
        </section>
      </div>
    </div>
  );
}