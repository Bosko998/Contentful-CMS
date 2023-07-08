import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "gdelytgx57ck",
  environment: "master", // defaults to 'master' if not set
  accessToken: "7K4bha-lDX2xZhcOKvOTGOOAkWrzr-VS4qrkPKB-XXY",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const firstProp = Object.values(item.fields)[0];
        const { title, description, file } =
          firstProp?.content[0]?.data?.target?.fields;
        const id = item?.sys.id;
        const img = file?.url;
        const url = description;

        return { title, url, id, img };

        // const { content } = firstProp;
        // const { data } = content[0];
        // const { target } = data;
        // const { fields } = target;
        // const { title, description, file } = fields;
        // const id = item.sys.id;
        // const img = file?.url;
        // const url = description;
        // console.log(item.fields);
        // return { title, url, id, img };
      });
      setLoading(false);
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

export default useFetchProjects;
