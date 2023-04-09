import { Detail } from "@/ui";
import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const { id, type } = router.query as { id: string; type: string };

  return <Detail id={id} type={type} />;
};

export default DetailsPage;
