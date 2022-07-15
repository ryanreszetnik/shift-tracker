import React from "react";
import { OrganizationsStackPropList } from "@navParams/home/organizations";
import ViewOrganizationPage from "@features/organization/pages/ViewOrganization";

export default function ViewOrganization({
  navigation,
  route,
}: OrganizationsStackPropList<"ViewOrganization">) {
  const organization = route.params.organization;
  return <ViewOrganizationPage />;
}
