import { fetchCustomers, fetchFilteredInvoices } from "@/app/lib/data";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const totalPaidInvoices = await fetchFilteredInvoices("paid", 1);
  const totalPendingInvoices = await fetchFilteredInvoices("pending", 1);
  const customers = await fetchCustomers();
  return (
    <>
      <Card
        title="Collected"
        value={totalPaidInvoices.length}
        type="collected"
      />
      <Card
        title="Pending"
        value={totalPendingInvoices.length}
        type="pending"
      />
      <Card
        title="Total Invoices"
        value={totalPaidInvoices.length + totalPendingInvoices.length}
        type="invoices"
      />
      <Card title="Total Customers" value={customers.length} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={` truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
