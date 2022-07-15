import { OrganizationsStackPropList } from "@navParams/home/organizations";
import React from "react";
import CreateOrganizationPage from "@features/organization/pages/CreateOrganization";
export default function CreateOrganization({
  navigation,
}: OrganizationsStackPropList<"CreateOrganization">) {
  return <CreateOrganizationPage />;
}
