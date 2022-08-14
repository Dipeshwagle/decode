import type { NextPage, GetStaticProps } from "next";
import Airtable from "airtable";
import { Fundraising } from "model/Fundrasing";
import Table from "components/ui/table";
import getFundraisingData from "api/hooks/useFundraisingData";

type PageProps = NextPage & {
  data: Fundraising[];
};

const Home = ({ data, ...props }: PageProps) => {

  const { data: fundRaisingData, isLoading } = getFundraisingData({});

  return (
    <div className="min-h-screen bg-black ">
      <Table
        data={fundRaisingData?.map((data) => data.fields as unknown as Fundraising)}
      />
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const base = Airtable.base("app8wK6YOyIpQk45i");
//   const data = await base("Fundraising Rounds - Companies")
//     .select({ maxRecords: 10 })
//     .all();

//   const investors = await base("Investors").select({ maxRecords: 10 }).all();

//   return {
//     props: {
//       data: data.map((data) => data.fields),
//       investors: investors.map((data) => data.fields),
//     },
//   };
// };

export default Home;
