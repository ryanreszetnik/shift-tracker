import React from "react";
import { UpcomingStackPropList } from "@navParams/home/upcoming";
import ViewAllUpcomingPage from "@features/upcoming/pages/ViewAllUpcoming";
export default function ViewAllUpcoming({
  navigation,
}: UpcomingStackPropList<"ViewAllUpcoming">) {
  return <ViewAllUpcomingPage />;
}
