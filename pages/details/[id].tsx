import { useRouter } from "next/router";

import { MediaType } from "@/__generated__/graphql";
import { Detail } from "@/ui";

const DetailsPage = () => {
  const router = useRouter();
  const { id, type } = router.query as { id: string; type: MediaType };

  return <Detail id={id} type={type} />;
};

export default DetailsPage;
