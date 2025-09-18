import { redirect } from "next/navigation";

import { SubscriptionEntitlementQuery } from "@/app/convex/query.config";
import { combinedSlug } from "@/lib/utils";

const page = async () => {
  const { entitlement, profileName } = await SubscriptionEntitlementQuery();
  // if (!entitlement._valueJSON) {
  //   redirect(`/billing/${combinedSlug(profileName!)}`);
  // }
  redirect(`/dashboard/${combinedSlug(profileName!)}`);
};

export default page;
