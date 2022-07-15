import React from "react";
import ViewAllShiftsPage from "@features/shifts/pages/ViewAllShifts";
import { ShiftsStackPropList } from "@navParams/home/shifts";

export default function ViewAllShifts({
  navigation,
}: ShiftsStackPropList<"ViewAllShifts">) {
  return <ViewAllShiftsPage />;
}
