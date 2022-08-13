import type { NextPage, GetStaticProps } from "next";
import Airtable from "airtable";
import { Fundraising } from "model/Fundrasing";
import Table from "components/table";

type PageProps = NextPage & {
  data: Fundraising[];
};

const Home = ({ data }: PageProps) => {
  return (
    <div>
      <Table data={data}/>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const base = Airtable.base("app8wK6YOyIpQk45i");
  const data = await base("Fundraising Rounds - Companies")
    .select({ maxRecords: 10 })
    .all();
  return {
    props: { data: data.map((data) => data.fields) },
  };
};

export default Home;
