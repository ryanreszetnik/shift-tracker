import { View } from "react-native";
import React, { useEffect } from "react";
import API from "@api";
import OrganizationPreview from "../components/OrganizationPreview";
import { Organization } from "@constants/types";
export default function ViewAllOrganizations() {
  const [organizations, setOrganizations] = React.useState<Organization[]>([]);
  const loadOrganzations = async () => {
    const orgs = await API.getAllUserOrganizations(9);
    console.log(orgs, orgs[0]);
    setOrganizations(orgs);
  };
  useEffect(() => {
    loadOrganzations();
  }, []);
  return (
    <View>
      {organizations.map((org) => (
        <OrganizationPreview name={org.name} />
      ))}
    </View>
  );
}
