import { redirect } from "next/navigation";
import React from "react";

import { SubscriptionEntitlementQuery } from "@/app/convex/query.config";
import Navbar from "@/components/navbar";
import { combinedSlug } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const { profileName, entitlement } = await SubscriptionEntitlementQuery();
  // if (!entitlement._valueJSON) {
  //   // TODO: Remove billing hardcoded path
  //   redirect(`/billing/${combinedSlug(profileName!)}`);
  // }
  return (
    <div className="grid grid-cols-1">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
