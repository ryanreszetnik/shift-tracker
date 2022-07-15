import React from "react";
import ViewAllOrganizationsPage from "@features/organization/pages/ViewAllOrganizations";
import { OrganizationsStackPropList } from "@navParams/home/organizations";
export default function ViewAllOrganizations({
  navigation,
}: OrganizationsStackPropList<"ViewAllOrganizations">) {
  return <ViewAllOrganizationsPage />;
}
